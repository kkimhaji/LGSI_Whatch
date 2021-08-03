import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Scroller from '@enact/ui/Scroller';
import {BrowserRouter, Route} from 'react-router-dom';
import css from './Category.module.less'
import Home from "../routes/Home";
import Background from './logo.png';
import Navigation from '../components/Navigation';

const CategoryBase = kind({
	name: 'Category',

	styles: {
        css
    },

	render: function(props){ //eslint-disable-line no-unused-vars
		return (
			<Scroller>
			<div className ={css.category}>
                <div className = {css.color}>
                    <center>
                        <div className={css.boxh} style={{ backgroundImage: "url(" + `${ Background }` + ")" }}/>
                        <div>
							<BrowserRouter>
							<Navigation />
								<Route path="/" exact={true} component={Home}/>
								<Route path="/category" component={Category} />
							</BrowserRouter>
						</div>
					</center>
				</div>
			</div>
			</Scroller>
		);
	}
});

const Category = ThemeDecorator(CategoryBase);

export default Category;
export {Category,CategoryBase};