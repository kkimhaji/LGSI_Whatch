import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import "./Home.css";
import "./Search.css";
import Button from '@enact/ui/Button';


import css from '../App/App.module.less'



class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: ""
  };

  getSearchMovie = async () => {
    console.log('search Movie');
    const ID_KEY = '8Vvb7DBOvvsZIYgsczX9';
    const SECRET_KEY = 'Y1Me6jzYf2';
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({ movies: [], isLoading: false })
      } else {
        const { data: {
          items
        } } = await axios.get('/v1/search/movie.json', {
          params: {
            query: search,
            ddisplayisplay: 20
          },
          headers: {
            'X-Naver-Client-id': ID_KEY,
            'X-Naver-Client-Secret': SECRET_KEY
          }
        });

        this.setState({ movies: items, isLoading: false })
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    //this.getSearchMovie();
    this.getSearchMovie();
  };

  handleChange = (e) => {
    //console.log(e.type + ":", e.target.value);
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    //console.log(e.type + ":", this.state.value);
    e.preventDefault();
    //this.getSearchMovie();
    this.getSearchMovie();
  };

  render() {
    const { movies, isLoading } = this.state;


    return (<section className="container">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading..{this.state.name}</span>
          </div>)
          : (<form onSubmit={this.handleSubmit}>
            <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search for a movie." />
            <button type="submit"><img className={css.test} src="https://image.flaticon.com/icons/png/64/483/483356.png"></img></button>
            <div className="movies">
              {movies.map(movie => (<SearchMovie key={movie.link} id={movie.link} year={movie.pubDate} title={movie.title} poster={movie.image} rating={movie.userRating} director={movie.director} actor={movie.actor} />))}
            </div>
          </form>)
      }
    </section>);
  }
}

export default Search;
