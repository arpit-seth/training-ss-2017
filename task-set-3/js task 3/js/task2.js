function validateForm() {
	var form1 = document.forms["form1"];
	var output = document.getElementById("output");
	output.innerHTML = Validation.validateForm(form1);
}	