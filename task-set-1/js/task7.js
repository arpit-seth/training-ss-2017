var input = document.getElementById('input');
var check_btn = document.getElementById('check_btn');
var reset_btn = document.getElementById('reset_btn');
var output = document.getElementById('output');

check_btn.onclick = function(){	

	var i;
	var total=0;
	var result="";
	var str = input.value;
	var arr = [];

	for(i=0;i<128;i++)
		arr[i]=0;

	for(i=0;i<str.length;i++)
		arr[str.charCodeAt(i)]++;

	for(i=0;i<128;i++){
		if(arr[i]==1){
			total++;
			result=result+"<br>"+String.fromCharCode(i);
		}
	}

	output.innerHTML = "Total Unique Characters in String are : "+total+"<br>"+result;
};

reset_btn.onclick = function(){
	input.value="";
	output.innerHTML = "";
};