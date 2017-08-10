var input = document.getElementById("input");
var check_btn = document.getElementById("check_btn");
var reset_btn = document.getElementById('reset_btn');
var output = document.getElementById('output');

check_btn.onclick = function(){
	
	var msg;
	var value = input.value;
	
	if(isNaN(value))
		msg = "NOT a ";
	
	else
	{
		if((value%2)==0)
			msg = "an even ";
		else
			msg = "an odd ";
	}

	alert('Entered value is ' + msg + 'number.');
	output.innerHTML = 'Entered value is ' + msg + 'number.';
};

reset_btn.onclick = function(){
	input.value="";
}