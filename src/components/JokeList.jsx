import { useEffect, useState } from "react"
import Joke from '../components/Joke.jsx'
import Loading from "../components/Loading.jsx";
import axios from "axios";
import './JokeList.css';


const JokeList = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [counters, setCounters] = useState(0);

    useEffect(() => {
        const getJoke = async () => {
            try {
                const res = await axios.get('https://v2.jokeapi.dev/joke/Any');
                if (res.status === 200) {
                    setJoke(res.data);
                } else {
                    throw new Error(`Failed to get Joke: ${res.status}`);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getJoke();
    }, [counters]);

    const handleGetJoke = () => {
        return setCounters(!counters)
    }
    return (
        <div className="container-jokeList">
            <h1>Joke List</h1>
            <div className="button">
                <button className="btn" onClick={handleGetJoke}>Get another joke</button>
            </div>
            {loading && <Loading />}
            {error && <p className="error">{error}</p>}
            {joke && <Joke joke={joke} />}
        </div>
    );
};

export default JokeList;