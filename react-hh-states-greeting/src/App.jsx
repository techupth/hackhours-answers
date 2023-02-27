import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  const handleClick = (text) => {
    setGreetingMessage(text);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button
          onClick={() => {
            handleClick("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            handleClick("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            handleClick("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
