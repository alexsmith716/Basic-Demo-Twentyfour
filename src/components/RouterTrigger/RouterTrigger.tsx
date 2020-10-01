import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

type RouterTriggerProps = {
	triggerProp?: any;
	children?: any;
};

//	const RouterTrigger: React.FC<{triggerProp?:any}> = ({children, triggerProp}) => {
const RouterTrigger: React.FC = ({ triggerProp, children }: RouterTriggerProps) => {
	const location = useLocation();
	const [needTrigger, setNeedTrigger] = useState(false);
	const [locationState, setLocationState] = useState(location);
	const [prevLocationState, setPreviousLocationState] = useState(location);

	const navigated =
		!locationState ||
		`${location.pathname}${location.search}` !== `${locationState.pathname}${locationState.search}`;

	if (navigated) {
		console.log('>>>>>>>>>>>>>>>>>>>>>>>> RouterTrigger > navigated ?????????????!: ', navigated);
		setLocationState(location);
		setPreviousLocationState(locationState || location);
		// initiate an effect on 'needTrigger'
		setNeedTrigger(true);
	}

	useEffect(() => {
		if (needTrigger) {
			setNeedTrigger(false);
		}

		if (!needTrigger) {
			triggerProp(location.pathname)
				.catch((error: Error) =>
					console.log(
						'>>>>>>>>>>>>>>>>>>>>>>>> RouterTrigger useEffect() > (componentDidUpdate) > triggerProp > ERROR:',
						error
					)
				)
				.then(() => {
					// clear previousLocation so the next screen renders
					setPreviousLocationState(locationState);
				});
		}

		return () => {
			console.log(
				'>>>>>>>>>>>>>>>>>>>>>>>> RouterTrigger useEffect() > (componentWillUnmount) > cleanup phase'
			);
		};
	}, [needTrigger, location.pathname, locationState, triggerProp]);

	return <Route location={prevLocationState || location} render={() => children} />;
};

export default RouterTrigger;
