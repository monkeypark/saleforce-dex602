import Toast from "lightning/toast";
import { getFieldValue, getFieldDisplayValue } from "lightning/uiRecordApi";

export default class Utils {
	static showToast = (firingComponent, toastTitle, toastBody, variant, mode) => {
		const config = {
			label: toastTitle,
			message: toastBody,
			variant: variant,
			mode: mode
		};
		Toast.show(config, firingComponent);
	};

	static getDisplayValue = (data, field) => {
		return getFieldDisplayValue(data, field) ? getFieldDisplayValue(data, field) : getFieldValue(data, field);
	};
}
