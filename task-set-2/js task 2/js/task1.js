var btn_submit = document.getElementById("btn_submit");
var btn_reset = document.getElementById("btn_reset");
var output = document.getElementById("output");
var input_array = document.getElementById("input_array");
var input_n = document.getElementById("input_n");

btn_submit.onclick = function(){

	var arrayData = (input_array.value).split(" ");

	var n = input_n.value;
	output.innerHTML = n +"th element in input array : "+arrayData[n-1];

}
btn_reset.onclick = function(){
	output.value = "";
	input_array = "";
	input_n = "";
}