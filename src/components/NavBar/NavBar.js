import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/modules/toggleTheme";
import { navLinks } from "./navLinks";
import * as Styles from "./styles";

import { useTheme } from "../../styled/ThemeContext";


const NavBar = () => {

	const themeMode = useTheme();

	// const toggledTheme = useSelector(state => state.toggleTheme.theme);
	// const dispatch = useDispatch();
	// const theme = useContext(ThemeContext);

	//  console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > toggledTheme: ', toggledTheme);
	//  console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useContext(ThemeContext): ', theme);

	const [clicked, setClicked] = useState(false);

	useEffect(() => {
			//  componentDidMount
			console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentDidMount');

			//  componentDidUpdate
			if (clicked) {
				console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentDidUpdate > clicked: ', clicked);
			}

			//  componentWillUnmount
			return () => {
				//  some effects might require cleanup
				console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentWillUnmount > cleanup phase');
			};
		},
		[clicked]
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
									toggleTheme
								</Styles.NavBarNavA>
							</li>

							{ navLinks.map((item, index) => {
								return (
									<li key={index}>
										<Styles.NavBarNavLink to={item.url} className="js-scroll-trigger" onClick={() => setClicked(false)}>
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
