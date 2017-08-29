var btn_submit = document.getElementById("btn_submit");
var btn_reset = document.getElementById("btn_reset");
var output = document.getElementById("output");
var input_array = document.getElementById("input_array");

btn_submit.onclick = function(){

    var str = input_array.value;
	var arrayData = str.split(" ");
	var result_array = [];

	for(i in arrayData){
		switch(arrayData[i]){

			case 'null':
			case '0':
			case '"':
			case 'false':
			case 'undefined':
			case 'NaN':
				continue;
			default :
				result_array.push(arrayData[i]);		
		}
	}

	output.innerHTML ="Resultant array is : "+result_array;

}
btn_reset.onclick = function(){
	output.innerHTML = "";
	input_array.value = "";
}