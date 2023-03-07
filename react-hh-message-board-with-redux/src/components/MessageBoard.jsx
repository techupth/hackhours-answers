import { useSelector, useDispatch } from "react-redux";
import {
  createMessageText,
  addMessageText,
  deleteMessageText,
} from "../slices/messageBoardSlice";

function MessageBoard() {
  const dispatch = useDispatch();
  const messageState = useSelector((state) => state.messageBoard);
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessageText());
          }}
        >
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              onChange={(e) => dispatch(createMessageText(e.target.value))}
              value={messageState.messageText}
            />
          </label>
          <button className="submit-message-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="board">
        {messageState.messageTextArray.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => dispatch(deleteMessageText(index))}
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
