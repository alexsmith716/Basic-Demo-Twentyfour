import React from 'react';
import { renderRoutes } from 'react-router-config';

import { NavBar } from '../../components/NavBar';
import { DeviceState } from '../../components/DeviceState';
import { InfoBar } from '../../components/InfoBar';
import Footer from '../../components/Footer';

export type AppProps = {
	route?: any;
	children?: any;
};

export const App: React.FC = ({ route, children }: AppProps) => {
	return (
		<>
			{/* ------------- Navbar ------------- */}
			<NavBar />
			{/* ------------- Main Content ------------- */}
			{renderRoutes(route.routes)}
			{/* --------------- InfoBar ---------------- */}
			<InfoBar />
			{/* ------------- Device State ----------- */}
			<DeviceState />
			{/* --------------- Footer ----------------- */}
			<Footer />
			{/* --------------- Modals ----------------- */}
		</>
	);
};
