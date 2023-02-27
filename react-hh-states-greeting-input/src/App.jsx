import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message");
  const [greetingTextInput, setGreetingTextInput] = useState("");

  const handleTextInputChange = (e) => {
    setGreetingTextInput(e.target.value);
  };

  const handleAddClick = () => {
    setMessage(greetingTextInput);
  };

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={handleTextInputChange}
          value={greetingTextInput}
        />
      </div>

      <div className="buttons">
        <button onClick={handleAddClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
