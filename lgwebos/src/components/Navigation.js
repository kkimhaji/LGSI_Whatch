import React from 'react'; //eslint-disable-line no-unused-vars
import {Link} from 'react-router-dom';
import "./Navigation.css";

function Navigation(){
    return (
    <div className="nav">
      <Link to="/">Comedy</Link>
      <Link to="/">Romance</Link>
      <Link to="/">Drama</Link>
      <Link to="/">Animation</Link>
      <Link to="/">Comedy-Romance</Link>
      <Link to="/">Sci-Fi</Link>
      <Link to="/">Action</Link>
      <Link to="/">Mystery</Link>
      <Link to="/">Adventure</Link>
      <Link to="/">Action-Comedy</Link>
      <Link to="/">Horror</Link>
      <Link to="/">Thriller</Link>
      <Link to="/">Crime</Link>
      <Link to="/">Fantasy</Link>
      <Link to="/">Superhero</Link>
      <Link to="/">Netflix upcoming</Link>
      <Link to="/">Netflix leaving</Link>
    </div>
  )
}

export default Navigation;