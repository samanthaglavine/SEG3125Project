var profileBtn;
var employeeList;
var teamList;
var team1Options = ["<option></option>"
,"<option>Collette, Ben</option>"
,"<option>Eilenburg, Dave</option>"
,"<option>Korrick, Ava</option>"
,"<option>Parzen, Taylor</option>"
,"<option>Romer, Carl</option>"
,"<option>Smith, John</option>"
,"<option>Kelly, Veeh</option>"];

var team2Options = ["<option></option>"
,"<option>Doe, Jane</option>"
,"<option>Raynor, Jim</option>"];

function start(){
	profileBtn = document.getElementById("profileBtn");
	profileBtn.addEventListener("click", onProfileBtnClick);
	employeeList = document.getElementById("employeeList");
	teamList = document.getElementById("teamList");
	teamList.onchange = teamListChange;
	
	var deleted = getCookie("deleted").split("/");
	if(deleted[0] != ""){
		for(var j = 0; j < deleted.length; ++j){
			for(var i = 1; i < team1Options.length; ++i){
				if(team1Options[i].includes(deleted[j])){
					team1Options[i] = "";
				}
			}
			for(var i = 1; i < team2Options.length; ++i){
				if(team2Options[i].includes(deleted[j])){
					team2Options[i] = "";
				}
			}
		}
	}
}

function teamListChange(){
	if(teamList.value == "CYGNUS"){
		employeeList.innerHTML = team1Options.join("");
	}
	else if(teamList.value == "AQUILA"){
		employeeList.innerHTML = team2Options.join("");
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

function onProfileBtnClick(){
	document.getElementById("profileDropdown").classList.toggle("show");
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

function onSumbit(){
	var deleted = getCookie("deleted");
	if(deleted == ""){
		document.cookie = "deleted" + "=" + employeeList.value + ";";
	}else{
		document.cookie = "deleted" + "=" + deleted + "/" + employeeList.value + ";";
	}
}

function goBack() {
  window.history.back();
}

window.onload = start;