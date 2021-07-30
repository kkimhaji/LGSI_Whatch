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

	render: function(props){ //eslint-disable-line no-unused-vars
		return (
			<Scroller>
			<div className ={css.app} /*{props.className}*/>
				<div className = {css.color}>
					<center>
					<div className={css.boxh} style={{ backgroundImage: "url(" + `${ Background }` + ")" }}>
						
    				</div>
					<div className={css.search}>
						<HashRouter>
							<Navigation />
							<Route path="/" component={Search}/>
							<Route path="/" component={Home}/>
						</HashRouter>
					</div>
					
					</center>
				</div>
				
			</div>
			</Scroller>
		);
	}
});

const App = ThemeDecorator(AppBase);

export default App;
export {App, AppBase};