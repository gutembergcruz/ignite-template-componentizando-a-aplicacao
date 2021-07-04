import { MovieCard } from '../components/MovieCard';
import { MovieProps, GenreResponseProps } from "../App";

interface Content {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content({movies, selectedGenre}: Content) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        {/* selectedGenre.title */}
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header> 

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>

  )
}