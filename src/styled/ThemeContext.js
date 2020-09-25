import React, { useContext, useState, useEffect } from 'react';

const defaultMode = 'default';

// -----------------------------------------------------------

export const ManageThemeContext = React.createContext({
	mode: defaultMode,
	toggle: () => { }
});

export const useTheme = () => useContext(ManageThemeContext);

// -----------------------------------------------------------

export const ThemeContext = ({ children }) => {

	const [themeModeState, setThemeModeState] = useState({ mode: defaultMode });

	useEffect(() => {

			console.log('>>>>>>>>>>>>>>>>>>>>>>>> ThemeContext > useEffect() > componentDidMount');

			console.log('>>>>>>>>>>>>>>>>>>>>>>>> ThemeContext > useEffect() > componentDidUpdate > themeModeState: ', themeModeState);

			return () => {
				console.log('>>>>>>>>>>>>>>>>>>>>>>>> ThemeContext > useEffect() > componentWillUnmount > cleanup phase');
			};
		},
		[themeModeState]
	);

	const toggle = () => {
		setThemeModeState({ mode: (themeModeState.mode === 'dark' ? `default` : `dark`) });
	}

	return (
		<ManageThemeContext.Provider value={{ mode: themeModeState.mode, toggle: toggle }}>
			{children}
		</ManageThemeContext.Provider>
	);
}
