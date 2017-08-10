var check_btn = document.getElementById('check_btn');
var output = document.getElementById('output');

check_btn.onclick = function(){	

	var msg;
	var numRandom = Math.floor(Math.random()*11);
	var numGuess = prompt("Guess a number between 1 to 10 : ","");
	if(numGuess==numRandom)
		msg = "Good Work !!!!!!!!";
	else
		msg = "Sorry, Not matched !!!!!!!!"; 	

	output.innerHTML = msg;
};
