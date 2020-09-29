import React from 'react';
import { ThemeProvider } from 'styled-components';
import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';

// import { SvgExample } from '../../components/SvgExample';
import NavBar from '../../components/NavBar';
import DeviceState from '../../components/DeviceState';
import InfoBar from '../../components/InfoBar';
import Footer from '../../components/Footer';

interface AppProps {
	route: any;
};

//	interface AppState {
//		toggleTheme: any;
//	};

// export const ThemeContext = React.createContext(null);

const App = ({route}: AppProps)  => {

	// const toggledTheme = useSelector((state: AppState) => state.toggleTheme.theme);

	return (
		<>
			{/* ------------- Navbar ------------- */}
			<NavBar />
			{/* ------------- Main Content ------------- */}
			{renderRoutes(route.routes)}
			{/* --------------- Svg Examples ----------------- */}
			{/* <SvgExample /> */}
			{/* --------------- InfoBar ---------------- */}
			<InfoBar />
			{/* ------------- Device State ----------- */}
			<DeviceState />
			{/* --------------- Footer ----------------- */}
			<Footer />
			{/* --------------- Modals ----------------- */}
		</>
	);
}

export default App;
