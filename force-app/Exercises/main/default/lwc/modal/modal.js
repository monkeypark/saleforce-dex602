import { api } from "lwc";
import LightningModal from "lightning/modal";

export default class Modal extends LightningModal {
	@api header;
	@api content;

	handleClose() {
		this.close();
	}
}
