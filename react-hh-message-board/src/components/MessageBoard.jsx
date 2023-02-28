import { useState } from "react";

function MessageBoard() {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessage] = useState([]);

  function handleAddMessage(event) {
    event.preventDefault();
    const newMessages = [...messages];
    newMessages.push(messageText);
    setMessage(newMessages);
    setMessageText("");
  }

  function handleDeleteMessage(messageIndex) {
    const newMessages = [...messages];
    newMessages.splice(messageIndex, 1);
    setMessage(newMessages);
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form className="message-input-container" onSubmit={handleAddMessage}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => setMessageText(e.target.value)}
            value={messageText}
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div className="board">
        {messages.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => handleDeleteMessage(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
