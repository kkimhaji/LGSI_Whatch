import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Scroller from '@enact/sandstone/Scroller';
// import Scroller from '@enact/ui/Scroller';
import Button from '@enact/ui/Button';
 
import {HashRouter, Route} from 'react-router-dom';
import Home from "../routes/Home";
import Search from "../routes/Search";
import Navigation from "../components/Navigation";

import css from './App.module.less'

import Background from './logo.png';

const AppBase = kind({
	name: 'App',

	styles: {
        css
    },

	render: function(props){
		return (
			<Scroller>
			<div className ={css.app} /*{props.className}*/>
				
				<div className = {css.color}>
					<center>
					<div className={css.boxh} style={{ backgroundImage: "url(" + `${ Background }` + ")" }}>
						{/* <h2 className={css.whatch}>Whatch</h2> */}
    				</div>
						
					<div className={css.search}>
						<HashRouter>
							<Navigation />
							<Route path="/" exact={true} component={Home}></Route>
							<Route path="/search" exact={true} component={Search}></Route>
						</HashRouter>						
					</div>
					<div className={css.whatch}>
						<div className={css.postersetting}>
							<img className={css.poster} src="https://t1.daumcdn.net/movie/9ab1a372dd93ced3c357eabb8e01f3f5d6003267"></img>
							<h6>The Boss Baby2</h6>
						</div>
						<div className={css.postersetting}>
							<img className={css.poster} src="https://t1.daumcdn.net/movie/f39274b0acd76f7c66f0a5fb9e5b7222ed37b373"></img>
							<h6>Black Widow</h6>
						</div>
						<div className={css.postersetting}>
							<img className={css.poster} src="https://t1.daumcdn.net/movie/102f2c2b3655cba98202da97b167e94e70fa45f1"></img>
							<h6>Escape from Mogadisu</h6>
						</div>
						<div className={css.postersetting}>
							<img className={css.poster} src="https://t1.daumcdn.net/movie/88c733527983cbd6ab27e4f5f0673358ecfdf9eb"></img>
							<h6>The Medium</h6>
						</div>
					</div>
					</center>
				</div>
				<div>
					<center>
					<h2 className={css.whatch}>Categories</h2>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Comedy._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Romance._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Drama._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Animation._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Comedy-Romance._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<br></br>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Sci-Fi._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Action._CB1513316166_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Mystery._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Adventure._CB1513316166_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Action-Comedy._CB1513316166_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<br></br>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Horror._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Thriller._CB1513316169_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Crime._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Fantasy._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Superhero._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					</center>
					<br></br>
				</div>	
				
			</div>
			</Scroller>
		);
	}
});

const App = ThemeDecorator(AppBase);

export default App;
export {App, AppBase};