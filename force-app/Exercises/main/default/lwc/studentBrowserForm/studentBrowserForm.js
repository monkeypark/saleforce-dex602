import { LightningElement, wire } from "lwc";
import getInstructors from "@salesforce/apex/StudentBrowserForm.getInstructors";
import getDeliveriesByInstructor from "@salesforce/apex/StudentBrowserForm.getDeliveriesByInstructor";

export default class StudentBrowserForm extends LightningElement {
	instructors = [];
	error;
	selectedInstructorId = "";
	deliveries = [];
	selectedDeliveryId = "";

	@wire(getInstructors)
	wired_getInstructors({ error, data }) {
		if (data) {
			const options = data.map((instructor) => ({
				value: instructor.Id,
				label: instructor.Name
			}));

			this.instructors = [{ value: "", label: "Select an instructor" }, ...options];
			this.error = undefined;
		} else if (error) {
			this.error = error;
			this.instructors = [];
		}
	}

	@wire(getDeliveriesByInstructor, { instructorId: "$selectedInstructorId" })
	wired_getDeliveriesByInstructor({ error, data }) {
		if (data && data.length) {
			this.deliveries = data.map((delivery) => ({
				value: delivery.Id,
				label: `${delivery.Start_Date__c} ${delivery.Location__c} ${delivery.Attendee_Count__c} students`
			}));

			this.deliveries.unshift({
				value: "",
				label: "Any Delivery"
			});
		} else if (error) {
			this.error = error;
		}
	}

	handleInstructorChange(event) {
		this.selectedInstructorId = event.target.value;
		this.selectedDeliveryId = "";
		this.notifyParent();
	}

	handleDeliveryChange(event) {
		this.selectedDeliveryId = event.target.value;
		this.notifyParent();
	}

	notifyParent() {
		const evt = new CustomEvent("filterchange", {
			detail: {
				instructorId: this.selectedInstructorId,
				deliveryId: this.selectedDeliveryId
			}
		});
		this.dispatchEvent(evt);
	}
}