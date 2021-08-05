import React from "react";
import {Link} from 'react-router-dom';
import './Movie.css';

export const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
};

const Movie = ({ id, title, poster_path, overview, vote_average, release_date, genre_ids }) =>
<div className="movie">
    <Link
             to={{
                 pathname: '/movie-detail',
                 state: { id, title, poster_path, overview, vote_average, release_date, genre_ids },
             }} style={{ textDecoration: 'none' }}>
    <img src={(poster_path ? (IMG_API + poster_path) :
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80')}
        alt={title}/>
    <div className="movie-info">
        <h5 className="movie-h5">{title}</h5>
        <span className={
            `tag ${setVoteClass(vote_average)}`
        }>{vote_average}</span>
    </div>

    <div className="movie-over">
        <h5 className="movie-h5">Overview:</h5>
        <h6 className="movie-h6">{overview}</h6>

    </div></Link>
</div>;

export default Movie;