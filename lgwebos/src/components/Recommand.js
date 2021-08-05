import React, { useEffect, useState } from "react";
import Movie from "./Movie";

export const RECOMMEND_API = "https://api.themoviedb.org/3/"
export const RCM_API = "/recommendations?api_key=e1d5657438192648dca986a759fc9c6a&language=en-US&page=1"


const fetch = require("node-fetch");

export function Recommand({id, params}){
    var rec_api = RECOMMEND_API +params.toString()+ "/"+ id.toString()+ RCM_API;
    console.log(rec_api);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies(rec_api);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
               console.log(data.results);

            });
    }

    return(
        <div>
            <br></br>
            <h3>Similar {params.toString()}s</h3>
        <div className="movie-container">
        { movies.length>0 && movies.map((movie, index) => {
            return index < 8 ? <Movie key={movie.id} {...movie} /> : null;
        })}
    </div>
    </div>
    )
}

export default Recommand;