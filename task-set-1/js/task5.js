var check_btn = document.getElementById('check_btn');
var output = document.getElementById('output');

check_btn.onclick = function(){	

	var d = new Date();
	var day = d.getDay();
	var hours = d.getHours();
	var min = d.getMinutes();
	var date = d.getDate();
	var month = (d.getMonth())+1;
	var year = d.getFullYear();
		
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	var period = "AM";
	if(hours>12){
		hours-=12;
		period = "PM";
	}
	else if(hours==12)
		period = "PM";

	output.innerHTML = 'a) Today is <u>'+days[day]+'</u>.<br>b) Current time is : <u>'+hours+' : '+min+period+'</u>.<br>c) Date is(dd-mm-yyyy) : <u>'+date+' - '+month+' - '+year+'</u>.';
};
