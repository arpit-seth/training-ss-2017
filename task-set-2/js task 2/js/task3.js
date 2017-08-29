var btn_submit = document.getElementById("btn_submit");
var output = document.getElementById("output");
var input_date = document.getElementById("input_date");
var today_date = document.getElementById("today_date");

var todayDate = new Date();
today_date.innerHTML = todayDate;

btn_submit.onclick = function(){

	output.innerHTML = "";

	var str = input_date.value;
	if(str==""){
		alert("Please, enter the valid Date & Time.");
		return;
	}

	var year = str.slice(0,str.indexOf("-"));
	if(year<1000||year>5000){
		alert("Please, enter the YEAR between 1000 to 5000 only.");
		return;
	}

	var mon = str.slice(5,7);
	var day = str.slice(8,10);
	var hour = str.slice(11,13);
	var min = str.slice(14,16);

	var inputDate = new Date(year,mon-1,day,hour,min);

	var time1 = todayDate.getTime();
	var time2 = inputDate.getTime();				
					
	var days = Math.floor(Math.abs(time1-time2)/86400000);				
	
	output.innerHTML = "Difference between entered date & today's date :  "+days+" days";;

}