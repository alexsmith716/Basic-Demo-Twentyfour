import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// import * as Styles from './styles';
import { Global } from '../../styled';
import config from '../../../config/config';

interface RootProps {
	route: any
};

// interface RootState {
// 	toggleTheme: any;
// };

export const Root = ({route}: RootProps) => {

	return (
		<>
			<HelmetProvider>
				<Helmet {...config.app.head} /> 
					<Global.GlobalStyle />
					{/* ------------- App ------------- */}
					{renderRoutes(route.routes)}
			</HelmetProvider>
		</>
	);
};
