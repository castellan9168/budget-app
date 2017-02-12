function openNav() {
	document.getElementById("sideNav").style.width = "250px";
	document.getElementById("openNav").style.display = "none";
	document.getElementById("closeNav").style.display = "inline";
	document.getElementById("header").style.marginLeft = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("sideNav").style.width = "75px";
	document.getElementById("openNav").style.display = "inline";
	document.getElementById("closeNav").style.display = "none";
	document.getElementById("header").style.marginLeft = "75px";
	document.getElementById("main").style.marginLeft = "75px";
}