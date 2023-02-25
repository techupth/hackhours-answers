import "./App.css";
import MoviesList from "./data/movies";
import Teams from "./data/teams";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <h1 className="movie-list-header">Movie List Section</h1>
        <MoviesList />
      </section>
      <section className="team-list-section">
        {/* Render Team List Here */}
        <h1 className="team-list-header">Team List Section</h1>
        <Teams />
      </section>
    </div>
  );
}

export default App;
