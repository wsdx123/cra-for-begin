import { Rate } from "antd";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";

const Detail = () => {
    const {id} = useParams();
    const [load, setLoad] = useState(true);
    const [detail,setDetail] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoad(false);
        setDetail(json.data.movie);
        console.log(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            {load ? (
                <Loading />
            ) : (
                <div>
                    <div className={styles.backImg} style={{backgroundImage: `url(${detail.large_cover_image})`}} />
                    <div className={styles.container}>
                        <div className={styles.item}>
                            <img src={detail.medium_cover_image} />
                        </div>
                        <div className={styles.item}>
                            <h1>{detail.title_long}</h1>
                            <ul>
                                <li>{`Rating ${detail.rating}`}</li>
                                <li>{`Runtime ${detail.runtime}`}</li>
                                <li>{`Download ${detail.download_count}`}</li>
                                <li>
                                    genre
                                    <ul>
                                        {detail.genres && detail.genres.map((x,index) => (<li key={index}>{x}</li>))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;