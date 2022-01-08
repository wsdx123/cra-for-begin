import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";

const Detail = () => {
    const {id} = useParams();
    const [load, setLoad] = useState(true);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoad(false);
    };
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            {load ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    good
                </div>
            )}
        </div>
    );
}

export default Detail;