import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
export function MovieCard({movie}){
   // const imageUrl= "https://api.tvmaze.com/shows/:id"+movie.show.id +"images";
   const imagen=movie.show.image.medium;
    return(
        <li className={styles.movieCard}>
            <Link to={"/movies/"+movie.show.id}>
            <img className={styles.movieImage} src={imagen} alt={movie.show.name}/>
            <div>{movie.show.name}</div></Link>
        </li>
    );
} 