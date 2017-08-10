var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var op = document.getElementById("opt");
var check_btn = document.getElementById("check_btn");
var reset_btn = document.getElementById('reset_btn');
var output = document.getElementById('output');

check_btn.onclick = function(){
	
	var ans=null;
	var num1 = n1.value;
	var num2 = n2.value;
	var opt = op.value;
	
	if(isNaN(num1))
		alert("sorry!!!  first value is not number");
	else{
		if(isNaN(num2))
			alert("sorry!!!  second value is not number");
		else{
			switch(opt){
				case '+' :
						ans = Number(num1) + Number(num2);
						break;
				case '-' :
						ans = num1 - num2;
						break;
				case '*' :
						ans = num1 * num2;
						break;		
				case '/' :
						ans = num1 / num2;
						break;		
				default : 
						alert("plz, enter the correct operator (+ - * /)");
			}
		}
	}			


	alert('Answer is = ' + ans);
	output.innerHTML = 'Answer is = ' + ans;
};

reset_btn.onclick = function(){
	num1.value="";
	num2.value="";
	opt.value="";
};