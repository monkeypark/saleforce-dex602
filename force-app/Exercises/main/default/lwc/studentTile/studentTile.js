import { LightningElement, api } from "lwc";

export default class StudentTile extends LightningElement {
	@api student = {};

	@api isSelected = false;

	get tileSelected() {
		return this.isSelected ? "tile selected" : "tile";
	}

	handleStudentClick() {
		alert(this.student.Name + " ==> " + this.student.Id);
	}
}
