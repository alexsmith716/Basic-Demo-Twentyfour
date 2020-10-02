import React from 'react';

export type ButtonProps = {
	className?: any;
	onClick?: any;
	type?: any;
	children?: any;
};

//  export const Button: React.FC = ({
//  	className = 'btn-primary',
//  	onClick,
//  	type = 'button',
//  	children,
//  }: ButtonProps) => {
export const Button: React.FC<ButtonProps> = ({ className = 'btn-primary', onClick, type = 'button', children }) => {
	return (
		<button className={`btn ${className}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};
