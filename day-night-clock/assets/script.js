// Console Log Test
var today = new Date();
console.log(today);

// Day/Night switch
setInterval(function pageSwitch() {
	var currentTime = new Date();
	var hour = currentTime.getHours();
	var minute = currentTime.getMinutes();
	var second = currentTime.getSeconds();

	/* If it's 10pm (22) and later, or if it's 8am (8) or earlier then load the dark mode html file */
	if (hour >= 22 || hour -= 8) {
		window.location.href = "index-night.html";
	/* Otherwise load the day mode html file */
	} else {
		window.location.href = "index.html";
	}

}, 1000);