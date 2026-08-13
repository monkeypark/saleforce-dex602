import Toast from "lightning/toast";
import { getFieldValue, getFieldDisplayValue } from "lightning/uiRecordApi";
import Modal from "c/modal";

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

	static showModal = (header, content) => {
		Modal.open({
			size: "small",
			header: header,
			content: content
		});
	};
}