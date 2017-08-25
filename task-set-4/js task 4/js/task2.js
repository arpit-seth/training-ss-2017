var btn_show = document.getElementById("btn_show");
var json_string = document.getElementById("json_string");
var div_form = document.getElementById("div_form");

btn_show.onclick = function(){

	var jsonString = json_string.value;
	var form1 = new myForm(jsonString);
	var form_ref = form1.createForm();
	div_form.innerHTML = "";
	div_form.appendChild(form_ref);
}