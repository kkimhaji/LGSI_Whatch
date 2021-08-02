import {render} from 'react-dom';
import App from './App/App';
import "react-alice-carousel/lib/alice-carousel.css";

const appElement = (<App />);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
