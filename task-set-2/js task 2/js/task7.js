var btn_submit = document.getElementById("btn_submit");
var btn_reset = document.getElementById("btn_reset");
var output = document.getElementById("output");
var name1 = document.getElementById("name1");
var dob = document.getElementById("dob");
var email = document.getElementById("email");
var phone = document.getElementById("phone");

btn_submit.onclick = function(){

    output.innerHTML="";
	
	var Name = name1.value;
	var Dob = dob.value;
	var Email = email.value;
	var Phone = phone.value;

	var name_patt = /[A-Za-z]+/g;
	var dob_patt = /[0-9]{4}[-][0-9]{2}[-][0-9]{2}/g;
	var email_patt = /[A-Za-z0-9]+[@][A-Za-z]+[.][A-Za-z]+/g;
	var phone_patt = /[0-9]{10}/g;

	if(!name_patt.test(Name)){
		alert("plz, enter valid name");
	}
	else if(!dob_patt.test(Dob)){
		alert("plz, enter valid date");
	}
	else if(!email_patt.test(Email)){
		alert("plz, enter the email in correct format. (foe ex:  username123@gmail.com)");
	}
	else if(!phone_patt.test(Phone)){
		alert("plz enter the valid phone no of 10 digits.");
	}
	
	else
	output.innerHTML = "Good, Your form is submitted successfully.";

}

btn_reset.onclick = function(){
	name1.value="";
	dob.value="";
	email.value="";
	phone.value="";
	output.innerHTML="";
}