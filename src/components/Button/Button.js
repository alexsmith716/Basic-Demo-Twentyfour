import React from "react";

const Button = ({ children, className='btn-primary', onClick, type='button' }) => {

	return (
		<button 
			className={`btn ${className}`} 
			onClick={onClick} 
			type={type}>
				{children}
		</button>
	);
}

export default Button;