

function validateDateAndTime(){
	var startDate = document.getElementById("startDate");
	var endDate = document.getElementById("endDate");
	var startTime = document.getElementById("startTime");
	var endTime = document.getElementById("endTime");
	if (startDate.value > endDate.value) {
		startDate.setCustomValidity("Leave start date occurs after end date");
		endDate.setCustomValidity("Leave end date occurs before start date");
	} else {
		startDate.setCustomValidity("");
		endDate.setCustomValidity("");
	}
	
}

function goBack() {
	window.history.back();
}
