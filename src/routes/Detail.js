import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
    const {id} = useParams();
    const [load, setLoad] = useState(true);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie.description_full);
        setLoad(false);
    };
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            {load ? (
                <h1 className={styles.load}>Loading...</h1>
            ) : (
                <div className={styles.container}>
                    good
                </div>
            )}
        </div>
    );
}

export default Detail;