var table = document.getElementById("table");
var btn_add_more = document.getElementById("btn_add_more");
var btn_push = document.getElementById("btn_push");
var btn_pop = document.getElementById("btn_pop");
var btn_show_value = document.getElementById("btn_show_value");
var btn_length = document.getElementById("btn_length");
var btn_delete = document.getElementById("btn_delete");
var display_value = document.getElementById("display_value");

var id_no=0;
var selected_rows = [];
var container = [];
var table_rows_count=0;

btn_add_more.onclick = function(){
	table_rows_count++;
	id_no++;
	var cb_id = "cb"+id_no;
	var tb_id = "tb"+id_no;

	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "<input type='checkbox' id='cb_new' onchange=check_selected(this,'"+tb_id+"')>";
	cell2.innerHTML = "<input type='text' id='tb_new'>";
	cell3.innerHTML = "<BUTTON onclick=delete_row(this,'"+tb_id+"')><img src='images/cancel icon.png'></BUTTON>";
	
	(function(){
		document.getElementById("cb_new").id = cb_id;
		document.getElementById("tb_new").id = tb_id;
	})();
}

function check_selected(cb_ref,tb_id){
	if(cb_ref.checked)
		selected_rows.push(tb_id);
	else
		selected_rows.splice(selected_rows.indexOf(tb_id),1);
}

function delete_row(ref,tb_id){

	var index = container.indexOf(document.getElementById(tb_id).value);
	if(index!=-1)
		container.splice(index,1);

	var row_index = ref.parentNode.parentNode.rowIndex;
	table.deleteRow(row_index);
	table_rows_count--;
}

btn_push.onclick = function(){
	for(var i=0;i<selected_rows.length;i++)
		container.push(document.getElementById(selected_rows[i]).value);
	if(i==0)
		alert("plz, select atleast one row.");
}

btn_pop.onclick = function(){
	for(var i=0;i<selected_rows.length;i++){
		var tb_value = document.getElementById(selected_rows[i]).value;
		var index = container.indexOf(tb_value);
		if(index==-1)
			alert("Plz, first PUSH the value '"+tb_value+"' then you can POP it.");
		else
		container.splice(index,1);
	}
	if(i==0)
		alert("plz, select atleast one row.");
}

btn_show_value.onclick = function(){
	var str = "";
	if(container.length==0)
		str = "Database is empty!!!!";
	else{
		for(var i=0;i<container.length-1;i++)
			str += (container[i] + " | ");
		str += container[i];
	}
	display_value.innerHTML = "Values present in Database, are : <br>"+str;
}

btn_length.onclick = function(){
	alert("Total no of rows in Database : "+container.length+"\nTotal no of rows in Table on your screen : "+table_rows_count);
}

btn_delete.onclick = function(){
	for(var i=0;i<selected_rows.length;i++)
		delete_row(document.getElementById(selected_rows[i]),selected_rows[i]);
	if(i==0)
		alert("plz, select atleast one row.");
	selected_rows=[];
}