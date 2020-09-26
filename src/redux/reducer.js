import device from './modules/device';
import info from './modules/info';
import infoAlert from './modules/infoAlert';
import infoAlertThree from './modules/infoAlertThree';
import toggleTheme from './modules/toggleTheme';


export default function rootReducer() {
	return {
		online: (v = true) => v,
    device,
		info,
		infoAlert,
		infoAlertThree,
		toggleTheme,
	};
}
