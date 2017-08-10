var check_btn = document.getElementById('check_btn');
var output = document.getElementById('output');

check_btn.onclick = function(){	

	var john = { name: "John Smith", age: 23 }
	var mary = { name: "Mary Key", age: 18 }
	var bob = { name: "Bob-small", age: 6 }
	var people = [ john, mary, bob ]

	for(var i=0;i<people.length-1;i++){
		for(var j=i+1;j<people.length;j++){
			if(people[i].name[0]>people[j].name[0]){
				var temp = people[i];
				people[i] = people[j];
				people[j] = temp;
				}	
		}
	}

	var result="";
	for(var i=0;i<people.length;i++)
		result = result+"<br>"+people[i].name;
	
	output.innerHTML = "Sorted People : "+result;
};