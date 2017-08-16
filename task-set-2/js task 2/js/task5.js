var btn_insert = document.getElementById("btn_insert");
var btn_delete = document.getElementById("btn_delete");
var btn_show = document.getElementById("btn_show");
var i_value = document.getElementById("insert");
var d_value = document.getElementById("delete");
var output = document.getElementById("output");

function Container(){
	this.length = 0;
	this.items = [];
	
	this.add = function(value){
		this.items.push(value);
		this.length++;
	}
	
	this.remove = function(value){
		for(var i=0;i<this.items.length;i++){
			if(this.items[i]==value){
				this.items.splice(i,1);
				this.length--;
				return;
			}
		}
	alert("this element is not present in data........");		
	}

}

var myContainer = new Container();

btn_insert.onclick = function(){
	var value = i_value.value;
	myContainer.add(value);
	i_value.value="";
}

btn_delete.onclick = function(){
	var value = d_value.value;
	myContainer.remove(value);
	d_value.value="";
}

btn_show.onclick = function(){
	var data = "length = "+myContainer.length+"<br>";
	for(var i=0;i<myContainer.items.length;i++)
		data += myContainer.items[i] + ", ";

	output.innerHTML = "Data present in object is : <br>"+data;
}