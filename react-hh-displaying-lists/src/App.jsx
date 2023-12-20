import "./App.css";
import MoviesList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <h1 className="movie-list-header">Movie List Section</h1>
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
