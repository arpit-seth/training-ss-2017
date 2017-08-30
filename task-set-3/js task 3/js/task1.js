var table = document.getElementById("table");
var btn_add_more = document.getElementById("btn_add_more");
var btn_show_value = document.getElementById("btn_show_value");
var btn_length = document.getElementById("btn_length");
var btn_delete = document.getElementById("btn_delete");
var display_value = document.getElementById("display_value");

var id_no = 0;
var selected_rows = [];
var container = [];
var table_rows_count = 0;

btn_add_more.onclick = function() {
	table_rows_count++;
	id_no++;
	var cb_id = "cb" + id_no;
	var tb_id = "tb" + id_no;

	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "<input type='checkbox' id='" + cb_id + "' onchange=check_selected(this,'" + tb_id + "')>";
	cell2.innerHTML = "<input type='text' id='" + tb_id + "'>";
	cell3.innerHTML = "<BUTTON onclick=delete_row(this,'" + tb_id + "')><img src='images/cancel icon.png'></BUTTON>";
	
}

function check_selected(cb_ref, tb_id) {
	var tb_value = document.getElementById(tb_id).value;
	if(cb_ref.checked) {
		selected_rows.push(tb_id);
		container.push(tb_value);
	}
	else {
		selected_rows.splice(selected_rows.indexOf(tb_id), 1);
		var index = container.indexOf(tb_value);
		if(index == -1) {
			alert("Please, first PUSH that value before Popping it.");
		} else {
			container.splice(index, 1);
		}
	}
}

function delete_row(ref, tb_id) {

	var index1 = selected_rows.indexOf(tb_id);
	if(index1 != -1) {
		selected_rows.splice(index1, 1);
	}

	var index2 = container.indexOf(document.getElementById(tb_id).value);
	if(index2 != -1) {
		container.splice(index2, 1);
	}

	table.deleteRow(ref.parentNode.parentNode.rowIndex);
	table_rows_count--;
}

btn_show_value.onclick = function() {
	var str = "";

	if(container.length == 0)
		str = "Database is empty!!!!";
	else {
		for(var i = 0; i < container.length - 1; i++) {
			str += (container[i] + " | ");
		}
		str += container[i];
	}

	display_value.innerHTML = "Values present in Database, are : <br>" + str;
}

btn_length.onclick = function() {
	alert("Total no of rows in Database : " + container.length + "\nTotal no of rows in Table on your screen : "+table_rows_count);
}

btn_delete.onclick = function() {

	for(i in selected_rows) {
		
		var tb_ref = document.getElementById(selected_rows[i]);
		var index = container.indexOf(tb_ref.value);
		
		if(index != -1) {
		container.splice(index, 1);
		}

		table.deleteRow(tb_ref.parentNode.parentNode.rowIndex);
		table_rows_count--;
	}

	selected_rows = [];

}