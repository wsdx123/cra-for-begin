import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ id, year, coverImg, title, summary, genres }) => {
    return (
        <div className={styles.container}>
          <div className={styles.item}>
            <img src={coverImg} alt={title} className={styles.movie_img} />
          </div>
          <div className={styles.item}>
            <h2 className={styles.movie_title}>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie_year}>{year}</h3>
            <p>{summary.length > 236 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={styles.movie_genres}>
              {genres && genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;