var btn_submit = document.getElementById("btn_submit");
var btn_reset = document.getElementById("btn_reset");
var output = document.getElementById("output");
var input_array1 = document.getElementById("input_array1");
var input_array2 = document.getElementById("input_array2");

btn_submit.onclick = function(){

	var array1 = (input_array1.value).split(" ");
	var array2 = (input_array2.value).split(" ");
	var array3=[];
	var array4=[];
	
	for(var i=0;i<array1.length;i++){
		if(array2.indexOf(array1[i])==-1)
		array3.push(array1[i]);	
	}

	for(var i=0;i<array2.length;i++){
		if(array1.indexOf(array2[i])==-1)
		array4.push(array2[i]);	
	}

	output.innerHTML = "array1 difference array2 : <br>"+array3+"<br>array2 difference array1 : <br>"+array4;

}
btn_reset.onclick = function(){
	output.value = "";
	input_array1 = "";
	input_array2 = "";
}