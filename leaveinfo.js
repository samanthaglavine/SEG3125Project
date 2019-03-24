var profileBtn;
var startDate;
var endDate;
var startTime;
var endTime;

function start(){
	profileBtn = document.getElementById("profileBtn");
	profileBtn.addEventListener("click", onProfileBtnClick);
	
	startDate = document.getElementById("startDate");
	startDate.onchange = validateDateAndTime;
	
	endDate = document.getElementById("endDate");
	endDate.onchange = validateDateAndTime;
	
	startTime = document.getElementById("startTime");
	startTime.onchange = validateDateAndTime;
	
	endTime = document.getElementById("endTime");
	endTime.onchange = validateDateAndTime;
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
	if (startDate.value > endDate.value) {
		startDate.setCustomValidity("Leave start date occurs after end date");
		endDate.setCustomValidity("Leave end date occurs before start date");
	} else {
		startDate.setCustomValidity("");
		endDate.setCustomValidity("");
		if (startTime.value > endTime.value) {
			startTime.setCustomValidity("Leave start time occurs after end time");
		} else {
			startTime.setCustomValidity("");
		}
	}
}

function goBack() {
	window.history.back();
}

window.onload = start;