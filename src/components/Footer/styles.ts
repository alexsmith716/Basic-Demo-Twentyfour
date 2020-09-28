import styled from 'styled-components';
import { AppColors } from '../../styled';
import { SvgHeadphones } from '../../assets/svg';

export const FooterStyled = styled.div`
	background-color: ${AppColors.colors.syracuseOrange};
`;

export const FooterContainer = styled.div`
	color: ${AppColors.colors.white};
	font-family: 'LobsterV20LatinRegular';
`;

export const FooterHeadphones = styled.span`
	color: ${AppColors.colors.gold};
	font-family: 'Norwester';
`;

export const StyledSvgHeadphones = styled(SvgHeadphones)`
	height: 16px;
	padding-right: .25rem;
	padding-left: .25rem;
	vertical-align: middle;
`;

export const SvgFooterHeadphones = styled.span`
	color: ${AppColors.colors.gold};
`;

export const FooterBlurd = styled.div`
	font-family: 'Norwester';
`;
