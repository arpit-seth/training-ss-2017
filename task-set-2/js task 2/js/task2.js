var btn_submit = document.getElementById("btn_submit");
var btn_reset = document.getElementById("btn_reset");
var output = document.getElementById("output");
var input_array = document.getElementById("input_array");

btn_submit.onclick = function(){

	var arrayData = (input_array.value).split(" ");

	for(var i=0;i<arrayData.length;i++){
		if(isNaN(arrayData[i])||arrayData[i]==""||arrayData[i]=="false"||arrayData[i]==0)
		arrayData.splice(i,1);	
	}
	output.innerHTML = "Resultant array is : "+arrayData;

}
btn_reset.onclick = function(){
	output.value = "";
	input_array = "";
}