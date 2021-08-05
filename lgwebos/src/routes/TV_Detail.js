import React from 'react';
import './Detail.css';
import Cast from '../components/Cast';
import Recommand from '../components/Recommand';

export const IMG_API = "https://image.tmdb.org/t/p/w1280";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/Tv');
        }
    }

    render() {
        const { location } = this.props;
        console.log(location.state);

        if (location.state) {
        return (
        <div className="movie__detail">
            <table>
                <tr>
                    <td>
                        <img className="movie__detail_img" src={(location.state.poster_path ? (IMG_API + location.state.poster_path) :
                                                'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80')}
                                                alt={location.state.name}/>
                    </td>
                    <td>
                        <div className="movie__title">
                            <h2>{location.state.name}</h2>
                            <ul className="movie__vote_average">
                                <img className="star" src="https://image.flaticon.com/icons/png/512/2107/2107957.png"></img>
                                {location.state.vote_average}
                            </ul>
                            <h5>{location.state.first_air_date}</h5>
                            <h5>{location.state.overview}</h5>
                            <h4>Cast</h4>
                            <div class="box">
                                <div id="tab">
                                    <ul className="actor_tab">
                                        <Cast id={location.state.id} params={"tv"} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            <Recommand id={location.state.id} params={"tv"}/>
        </div>);


        } else {
            return null;
        }
    }
}

export default Detail;