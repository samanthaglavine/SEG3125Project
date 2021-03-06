var profileBtn;
var startDate;
var endDate;
var startTime;
var endTime;
var typeSelector;
var reoccuranceSelector;

function start(){
	profileBtn = document.getElementById("profileBtn");
	profileBtn.addEventListener("click", onProfileBtnClick);
	
	startDate = document.getElementById("startDate");
	today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;
	startDate.value = today;
	startDate.onchange = validateDateAndTime;
	
	endDate = document.getElementById("endDate");
	today = new Date();
	var dd = String(today.getDate()+1).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;
	endDate.value = today;
	endDate.onchange = validateDateAndTime;
	
	startTime = document.getElementById("startTime");
	startTime.value = "08:00:00";
	startTime.onchange = validateDateAndTime;
	
	endTime = document.getElementById("endTime");
	endTime.value = "08:00:00";
	endTime.onchange = validateDateAndTime;
	
	typeSelector = document.getElementById("typeSelector");
	typeSelector.onchange = typeChanged;
	
	reoccuranceSelector = document.getElementById("reoccuranceSelector");
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

function typeChanged(){
	if(typeSelector.value == "Training" || typeSelector.value == "Working from home"){
		reoccuranceSelector.disabled = false;
	}else{
		reoccuranceSelector.disabled = true;
		reoccuranceSelector.value = "Never";
	}
}

function onSubmit(){
	document.cookie = "leave=true;";
}

function goBack() {
	window.history.back();
}

window.onload = start;