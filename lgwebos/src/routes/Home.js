import React, { useEffect, useState } from "react";
import "../routes/Home.css";
import Movie from '../components/Movie';
// import Voice from './voice';


export const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e1d5657438192648dca986a759fc9c6a&page=1";
export const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=e1d5657438192648dca986a759fc9c6a&query=";
export const RECOMMEND_API = "https://api.themoviedb.org/3/movie/recommendations?api_key=e1d5657438192648dca986a759fc9c6a&language=en-US&page=1";

const fetch = require("node-fetch");

function LandingPage() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm);

            setSearchTerm("");
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <header>
                <form onSubmit={handleOnSubmit}>
                <center>
            <table>
                 <tr>
                   <td><input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    /></td>
                   <td><button className="voice_btn" style={{"font-size":"35px"}}>🎤</button></td>
                 </tr>
             </table>
             </center>
             </form>
            </header>

            <div className="movie-container">
                {movies.length > 0 && movies.map((movie) => <Movie key=
                    {movie.id} {...movie} />)}
            </div>
        </>
    );
}


export default LandingPage