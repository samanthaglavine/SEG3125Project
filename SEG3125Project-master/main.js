var profileBtn;
var team2;
var newBtn;

function start(){
	profileBtn = document.getElementById("profileBtn");
	profileBtn.addEventListener("click", onProfileBtnClick);
	team2 = document.getElementById("team2");
	
	var confirmed = getCookie("confirmed");
	if(confirmed == ""){
		setCookie("confirmed","false");
		newBtn = document.createElement("a");
		newBtn.classList.add('btn');
		newBtn.classList.add('btn-secondary');
		newBtn.classList.add('confirm');
		newBtn.innerHTML = "Confirm Team Request &raquo;";
		newBtn.href="#";
		newBtn.role = "button";
		team2.appendChild(newBtn);
	}
	else if(confirmed == "true"){
		newBtn = document.createElement("a");
		newBtn.classList.add('btn');
		newBtn.classList.add('btn-secondary');
		newBtn.classList.add('navy-background');
		newBtn.classList.add('white');
		newBtn.classList.add('btn-hover');
		newBtn.innerHTML = "View dashboard &raquo;";
		newBtn.href = "team2dashboard.html";
		newBtn.role = "button";
		team2.appendChild(newBtn);
	}
	else if(confirmed == "false"){
		newBtn = document.createElement("a");
		newBtn.classList.add('btn');
		newBtn.classList.add('btn-secondary');
		newBtn.classList.add('confirm');
		newBtn.innerHTML = "Confirm Team Request &raquo;";
		newBtn.href="#";
		newBtn.role = "button";
		team2.appendChild(newBtn);
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
	if (event.target.matches('.confirm')) {
		newBtn = document.createElement("a");
		newBtn.classList.add('btn');
		newBtn.classList.add('btn-secondary');
		newBtn.classList.add('navy-background');
		newBtn.classList.add('white');
		newBtn.classList.add('btn-hover');
		newBtn.innerHTML = "View dashboard";
		newBtn.href = "team2dashboard.html";
		newBtn.role = "button";
		var parent = event.target.parentNode;
		parent.removeChild(event.target);
		parent.appendChild(newBtn);
		setCookie("confirmed","true");
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