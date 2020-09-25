import React from 'react';
import { useSelector } from 'react-redux';
import * as Styles from './styles';

//  interface StateInfo {
//    info: any
//  }

export const DeviceState = () => {

  //  const online = useSelector((state: StateInfo) => state.online);
	const online = useSelector(state => state.online);
	const userAgent = useSelector(state => state.device.userAgent);
	const isBot = useSelector(state => state.device.isBot);

	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > online    ????: ', online);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > userAgent ????: ', userAgent);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> DeviceState > isBot     ????: ', isBot);


	return (

		<div className="container">
			<div className="flex-column-center mb-5">
				<Styles.DeviceStateStyled className="flex-column-center">

					<Styles.StoreStateOnline>{`'online' store state is ${online} !`}</Styles.StoreStateOnline>

					<Styles.StoreStateUserAgent>{`device 'userAgent' store state is ${userAgent} !`}</Styles.StoreStateUserAgent>

					<Styles.StoreStateIsBot>{`device 'bot' store state is ${isBot} !`}</Styles.StoreStateIsBot>

					<Styles.StoreStateBlurb>DeviceStateStyled!</Styles.StoreStateBlurb>

				</Styles.DeviceStateStyled>
			</div>
		</div>
	);
}
