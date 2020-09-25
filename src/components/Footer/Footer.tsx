import React from 'react';
import * as Styles from './styles';


export const Footer: React.FC = () => {
	return (
		<Styles.FooterStyled>
			<div className="container">

				<Styles.FooterContainer className="flex-column-center pt-4 pb-4">

					<div>Copyright &copy; {new Date().getFullYear()} · Election App {new Date().getFullYear()}</div>

					<div className="flex-row-center">

						<Styles.SvgFooterHeadphones>svgFooterHeadphones</Styles.SvgFooterHeadphones>
						<Styles.FooterHeadphones>Footer Headphones</Styles.FooterHeadphones>

					</div>

					<Styles.FooterBlurd>Don't Forget To Vote!</Styles.FooterBlurd>

				</Styles.FooterContainer>

			</div>
		</Styles.FooterStyled>
	);
}
