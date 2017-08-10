var check_btn = document.getElementById('check_btn');
var output = document.getElementById('output');

check_btn.onclick = function(){	

 	var total=0;
	var result="";
	for(var i=2014;i<=2050;i++){
		var date = new Date(i,0,1);
		if(date.getDay()==0){
			total++;
			result = result + "<br>" +i;
		}
	}
	alert('Total years having "1 jan" as "Sunday" , is =  ' + total);
	output.innerHTML = 'Total years having "1 jan" as "Sunday" , is =  ' + total + '<br>' + result;
};
