import { useEffect,useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
    const [load, setLoad] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoad(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {load ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((x) => (
                        <Movie
                            key={x.id}
                            id={x.id}
                            coverImg={x.medium_cover_image}
                            title={x.title}
                            summary={x.summary}
                            genres={x.genres} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;