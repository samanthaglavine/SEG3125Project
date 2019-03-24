var profileBtn;
var statusTable;
var datePicker;
var statusFilter;
var today;
var tableHeaders = "<tr><th>Name</th><th>Status</th><th>Return Date</th></tr>";

var todayTableRows = ["<tr class=\"in-office\"><td>Astley, Rick</td><td>In-Office</td><td></td></tr>"
, "<tr class=\"in-office\"><td>Doe, Jane</td><td>In-Office</td><td></td></tr>"
, "<tr class=\"in-office\"><td>Raynor, Rick</td><td>In-Office</td><td></td></tr>"];

var tomorrowTableRows = ["<tr class=\"in-office\"><td>Astley, Rick</td><td>In-Office</td><td></td></tr>"
, "<tr class=\"in-office\"><td>Doe, Jane</td><td>In-Office</td><td></td></tr>"
, "<tr class=\"in-office\"><td>Raynor, Rick</td><td>In-Office</td><td></td></tr>"];

var currentTableRows;

function start(){
	profileBtn = document.getElementById("profileBtn");
	profileBtn.addEventListener("click", onProfileBtnClick);
	
	//set the date pickers default value to today
	datePicker = document.getElementById("datePicker");
	today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;
	datePicker.value = today;
	datePicker .onchange = datePickerOnChange;
	
	statusFilter = document.getElementById("statusFilter");
	statusFilter.onchange = statusFilterOnChange;
	
	var leave = getCookie("leave");
	if(leave == "true"){
		todayTableRows[0] = "<tr class=\"sick\"><td>Astley, Rick</td><td>Sick</td><td>2019-04-03</td></tr>";
	}
	
	currentTableRows = todayTableRows;
	
	statusTable = document.getElementById("statusTable");
	
	var deleted = getCookie("deleted").split("/");
	if(deleted[0] != ""){
		for(var j = 0; j < deleted.length; ++j){
			for(var i = 0; i < todayTableRows.length; ++i){
				if(todayTableRows[i].includes(deleted[j])){
					todayTableRows[i]="";
					tomorrowTableRows[i]="";
					
				}
			}
		}
	}
	
	statusTable.innerHTML += todayTableRows.join('');
}

function statusFilterOnChange(){
	var newTableInnerHTML = tableHeaders;
	if(statusFilter.value != "All"){
		for(var i = 0; i < currentTableRows.length; ++i){
			if(currentTableRows[i].includes(statusFilter.value)){
				newTableInnerHTML += currentTableRows[i];
			}
		}
	}else{
		newTableInnerHTML += currentTableRows.join('');
	}
	statusTable.innerHTML = newTableInnerHTML;
}

function datePickerOnChange(){
	if(datePicker.value > today){
		currentTableRows = tomorrowTableRows;
		statusTable.innerHTML = tableHeaders + currentTableRows.join('');
	}else{
		currentTableRows = todayTableRows;
		statusTable.innerHTML = tableHeaders + currentTableRows.join('');
	}
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

function setCookie(cname,cvalue) {
	document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function onProfileBtnClick(){
	document.getElementById("profileDropdown").classList.toggle("show");
}

window.onload = start;