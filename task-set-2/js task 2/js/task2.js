var btn_submit = document.getElementById("btn_submit");
var btn_reset = document.getElementById("btn_reset");
var output = document.getElementById("output");
var input_array = document.getElementById("input_array");

btn_submit.onclick = function(){

    var str = input_array.value;
	var arrayData = str.split(" ");
	var result_array = [];

	for(var i=0;i<arrayData.length;i++){
		if(!isNaN(arrayData[i])&&arrayData[i]!=0)
		result_array.push(arrayData[i]);	
	}

	output.innerHTML ="Resultant array is : "+result_array;

}
btn_reset.onclick = function(){
	output.innerHTML = "";
	input_array.value = "";
}