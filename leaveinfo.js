var profileBtn;

function start(){
	profileBtn = document.getElementById("profileBtn");
	profileBtn.addEventListener("click", onProfileBtnClick);
}

//Close all open dropdown menus when the user clicks elsewhere on the page
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; ++i) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function onProfileBtnClick(){
	document.getElementById("profileDropdown").classList.toggle("show");
}

function validateDateAndTime(){
	var startDate = document.getElementById("startDate");
	var endDate = document.getElementById("endDate");
	var startTime = document.getElementById("startTime");
	var endTime = document.getElementById("endTime");
	if (!(startDate.value > endDate.value) && !(startDate.value < endDate.value)) {
		if (startTime.value > endTime.value) {
			startTime.setCustomValidity("Leave start time occurs after end time");
			endTime.setCustomValidity("Leave end time occurs before start time");
		} else {
			startTime.setCustomValidity("");
			endTime.setCustomValidity("");
		}
	} else if (startDate.value > endDate.value) {
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

window.onload = start;