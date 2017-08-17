var btn_submit = document.getElementById("btn_submit");
var btn_reset = document.getElementById("btn_reset");
var output = document.getElementById("output");
var phone = document.getElementById("phone");
var ip = document.getElementById("ip");
var err_phone = document.getElementById("err_phone");
var err_ip = document.getElementById("err_ip");

btn_submit.onclick = function(){

    output.innerHTML="";
	err_phone.innerHTML="";
	err_ip.innerHTML="";

	var phone_str = phone.value;
	var ip_str = ip.value;

	var phone_patt = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/g;
	var ip_patt = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[.][0-9]{3}/g;

	var error = 0;

	if(!phone_patt.test(phone_str)){
		err_phone.innerHTML = "plz, enter the value in format of 000-000-0000";
		error++;
	}
	if(!ip_patt.test(ip_str)){
		err_ip.innerHTML = "plz, enter the value in format of 000.000.000.000";
		error++;
	}
	
	if(error==0)
	output.innerHTML = "Good, You entered the values in correct format.";

}

btn_reset.onclick = function(){
	phone.value="";
	ip.value="";
	output.innerHTML="";
	err_phone.innerHTML="";
	err_ip.innerHTML="";
}