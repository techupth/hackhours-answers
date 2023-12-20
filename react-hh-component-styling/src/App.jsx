import "./App.css";
import Button from "./components/Button.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button color="primary" text="Primary" />
        <Button color="secondary" text="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert severity="error" message="This is error alert box" />
        <Alert severity="warning" message="This is a warning alert box" />
        <Alert severity="info" message="This is an info alert box" />
        <Alert severity="success" message="This is a success alert box" />
      </div>
    </div>
  );
}

export default App;
