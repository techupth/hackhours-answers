// Exercise 2

import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchText) {
      searchFromServer(searchText);
    }
  }, [searchText]);

  const searchFromServer = async (text) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${text}`
      );
      setSearchResult(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      {searchResult.length > 0 && (
        <>
          {searchResult.map((result, index) => (
            <div key={index} className="autocompleteItems">
              <li className="search-result">{result.volumeInfo.title}</li>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;

// // Exercise 4
// import "./App.css";
// import { useState, useCallback } from "react";
// import axios from "axios";

// function App() {
//   const [searchResult, setSearchResult] = useState([]);

//   const debounce = (func) => {
//     let timer;
//     return function (...args) {
//       const context = this;
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(() => {
//         timer = null;
//         func.apply(context, args);
//       }, 0);
//     };
//   };

//   const searchFromServer = async (text) => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${text}`
//       );
//       setSearchResult(response.data.items);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const optimizeSearchFromServer = useCallback(debounce(searchFromServer), []);

//   return (
//     <div className="App">
//       <h1>Find a Book</h1>
//       <input
//         type="text"
//         onChange={(e) => optimizeSearchFromServer(e.target.value)}
//       />
//       {searchResult.length > 0 && (
//         <>
//           {searchResult.map((result, index) => (
//             <div key={index} className="autocompleteItems">
//               <li className="search-result">{result.volumeInfo.title}</li>
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
