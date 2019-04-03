var profileBtn;
var newPassword;
var confirmNewPassword;

function start(){
	profileBtn = document.getElementById("profileBtn");
	profileBtn.addEventListener("click", onProfileBtnClick);
	
	newPassword = document.getElementById("newPassword");
	confirmNewPassword = document.getElementById("confirmNewPassword");
	newPassword.onchange = validatePassword;
	confirmNewPassword.onkeyup = validatePassword;
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

function validatePassword(){
  if(newPassword.value != confirmNewPassword.value) {
    confirmNewPassword.setCustomValidity("Passwords don't match.");
  } else {
    confirmNewPassword.setCustomValidity('');
  }
}

function onProfileBtnClick(){
	document.getElementById("profileDropdown").classList.toggle("show");
}

window.onload = start;