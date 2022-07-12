import movie from "./movies.json";
import styles from "./MovieDetails.module.css";
export function MovieDetails() {
  //const imageUrl= "https://api.tvmaze.com/shows/"+movie.id +"image.medium";
  const url =
    "https://static.tvmaze.com/uploads/images/medium_portrait/" + movie.id;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={movie.image}
        alt={movie.name}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {"movie.name"}
        </p>
        <p>
          <strong>Description:</strong>
          {movie.summary}
        </p>
        <p>
          <strong>Score:</strong>
          {movie.score}
        </p>
        <p>
          <strong>Rating:</strong>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
