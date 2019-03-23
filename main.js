var profileBtn;
var confirmBtn;
var team2Div;

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
	if (event.target.matches('.confirm')) {
		var newBtn = document.createElement("a");
		newBtn.classList.add('btn');
		newBtn.classList.add('btn-secondary');
		newBtn.classList.add('navy-background');
		newBtn.classList.add('white');
		newBtn.classList.add('btn-hover');
		newBtn.innerHTML = "View dashboard";
		newBtn.href = "signin.html";
		newBtn.role = "button";
		var parent = event.target.parentNode;
		parent.removeChild(event.target);
		parent.appendChild(newBtn);
	}
}

function onProfileBtnClick(){
	document.getElementById("profileDropdown").classList.toggle("show");
}

function confirmTeamRequest(){
	/*alert("Hey");
	confirmBtn.classList.remove('confirm');
	confirmBtn.classList.toggle('navy-background');
	confirmBtn.classList.toggle('white');
	confirmBtn.classList.toggle('btn-hover');
	confirmBtn.innerHTML = "View dashboard";
	confirmBtn.href = "";
	confirmBtn.removeEventListener("click", confirmTeamRequest);*/
	
}

window.onload = start;