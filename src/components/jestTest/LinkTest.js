import React, { useState, useEffect } from 'react';

//	https://github.com/facebook/jest/blob/master/docs/TutorialReact.md

const LinkTest = (props) => {

	const { page, children } = props;
	const [onMouseHoverStatus, setOnMouseHoverStatus] = useState('normal');

	useEffect(() => {
			// componentDidMount
			// console.log('>>>>>>>>>>>>>> LinkTest > useEffect() > componentDidMount > onMouseHoverStatus: ', onMouseHoverStatus);

			// componentDidUpdate
			if (onMouseHoverStatus) {
				// console.log('>>>>>>>>>>>>>> LinkTest > useEffect() > componentDidUpdate > onMouseHoverStatus: ', onMouseHoverStatus);
			}

			// componentWillUnmount
			return () => {
				// some effects might require cleanup
				// console.log('>>>>>>>>>>>>>> LinkTest > useEffect() > componentWillUnmount > cleanup phase');
			};
		},
		[onMouseHoverStatus] // only re-run the effect if an array item changes
	);

	return (

		<div className="container">

			<h2>LinkTest</h2>

			<div className="row">
				<div className="col-lg-12 mb-4">
					<div className="bg-color-ivory container-padding-border-radius-1 text-break">

						<div>
							{onMouseHoverStatus && (
								<p>
									state variable "onMouseHoverStatus" state: {onMouseHoverStatus}
								</p>
							)}
						</div>

						<div>
							<a
								data-testid='hover-anchorlink'
								className={onMouseHoverStatus}
								href={page || '#'}
								onMouseEnter={() => setOnMouseHoverStatus('hovered')}
								onMouseLeave={() => setOnMouseHoverStatus('normal')}
							>
								{children}
							</a>
						</div>

					</div>
				</div>
			</div>

		</div>
	);
}

export default LinkTest;
