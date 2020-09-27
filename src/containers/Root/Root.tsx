import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Global } from '../../styled';
import config from '../../../config/config';
import { useTheme } from '../../styled/ThemeContext';

import { AppTheme } from '../../styled';

interface RootProps {
	route: any
};


export const Root = ({route}: RootProps) => {

	const themeMode = useTheme();

	const themeModeMode = AppTheme.theme[`${themeMode.mode}`];

	return (
		<HelmetProvider>
			<Helmet {...config.app.head} />
				<ThemeProvider theme={themeModeMode}>  
					<Global.GlobalStyle />
					{/* ------------- App ------------- */}
					{renderRoutes(route.routes)}
				</ThemeProvider>
		</HelmetProvider>
	);
};
