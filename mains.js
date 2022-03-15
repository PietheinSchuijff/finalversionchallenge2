const updateTimer= () => {

	var currentTime = new Date()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()
	var seconds = currentTime.getSeconds()

	if (minutes < 10){
	    minutes = "0" + minutes
	}
	if (hours < 10){
	    hours = "0" + hours;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var t_str = hours + ":" + minutes + ":" + seconds;
	document.getElementById('clock').innerHTML = t_str;

}
var today = new Date();
var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december', );
document.getElementById('date').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];
setInterval(updateTimer, 1000);



