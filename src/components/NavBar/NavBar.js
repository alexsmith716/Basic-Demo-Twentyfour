import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/modules/toggleTheme";
import { navLinks } from "./navLinks";
import * as Styles from "./styles";

import { useTheme } from "../../styled/ThemeContext";

//  useLocation hook returns the location object that represents the current URL. 
//  returns a new location whenever the URL changes.

const NavBar = () => {

	const themeMode = useTheme();
	const location = useLocation();

	// const toggledTheme = useSelector(state => state.toggleTheme.theme);
	// const dispatch = useDispatch();
	// const theme = useContext(ThemeContext);

	//  console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > toggledTheme: ', toggledTheme);
	//  console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useContext(ThemeContext): ', theme);

	const [clicked, setClicked] = useState(false);
	const [activeRoute, setActiveRoute] = useState(location.pathname);

	useEffect(() => {

			setActiveRoute(location.pathname);

			return () => {
				console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentWillUnmount > cleanup phase');
			};
		},
		[location.pathname]
	);

	const doThemeToggle = () => {
		// dispatch(toggleTheme(toggledTheme.themeType));
		themeMode.toggleTheme()
		setClicked(false);
	}

	return (

		<Styles.NavBar className="navbar">

			<div className="container">

				<Styles.Expand>

					<Styles.NavBarBrandLink to='/' className="js-scroll-trigger" onClick={() => setClicked(false)}>Election App</Styles.NavBarBrandLink>

					<Styles.Toggler onClick={() => setClicked(!clicked)}>
						{clicked && (
							<Styles.StyledSvgTimes fill="#ffffff" />
						)}

						{!clicked && (
							<Styles.StyledSvgBars fill="#ffffff" />
						)}
					</Styles.Toggler>

					<Styles.Collapse>

						<Styles.NavBarNav clicked={clicked} className={ clicked ? 'clicked' : '' }>

							<li>
								<Styles.NavBarNavA className="js-scroll-trigger" onClick={doThemeToggle}>
									use {themeMode.mode === 'dark' ? `default` : `dark`} theme
								</Styles.NavBarNavA>
							</li>

							{ navLinks.map((item, index) => {
								return (
									<li key={index}>
										<Styles.NavBarNavLink isActive={activeRoute === item.url} to={item.url} className="js-scroll-trigger" onClick={() => setClicked(false)}>
											{item.title}
										</Styles.NavBarNavLink>
									</li>
								)
							}) }

						</Styles.NavBarNav>

					</Styles.Collapse>
				</Styles.Expand>
			</div>
		</Styles.NavBar>
	);
}

export default NavBar;
