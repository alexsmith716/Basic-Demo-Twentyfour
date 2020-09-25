import { Root } from './containers/Root';
import { App } from './containers/App';
import { Home } from './containers/Home';
import { NotFound } from './containers/NotFound';

import About from './containers/About/Loadable';
// import GraphqlPage from './containers/GraphqlPage/Loadable';
// import GridLayout from './containers/GridLayout/Loadable';

import { preloadData as preloadDataApp } from './containers/App/preloadData';
import { preloadData as preloadDataAboutThree } from './containers/About/preloadData';

//  `createGlobalStyle`
import './styled/fonts.css';
import './theme/scss/global/styles.global.scss';

const routes = [{
	component: Root,
	path: '/',
	routes: [
		{
			path: '/',
			component: App,
			loadData: preloadDataApp,
			meta: {
				title: 'Basic Demo Twentythree',
				description: 'Component App'
			},
			routes: [{
				path: '/',
				exact: true,
				component: Home,
				meta: {
					title: 'Basic Demo Twentythree',
					description: 'Component Home'
				}
			}, {
				path: '/about',
				exact: true,
				component: About,
				loadData: preloadDataAboutThree,
				meta: {
					title: 'Basic Demo Twentythree',
					description: 'Component About'
				}
			}, {
				path: '*',
				component: NotFound,
				meta: {
					title: 'Basic Demo Twentythree',
					description: 'NotFound 404'
				}
			}]
		}]
}];

export default routes;
