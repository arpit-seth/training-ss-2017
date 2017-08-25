var btn_alert = document.getElementById("btn_alert");
var alert_type = document.getElementById("alert_type");
var alert_msg = document.getElementById("alert_msg");
var btn_alert_popup = document.getElementById("btn_alert_popup");
var alert_heading = document.getElementById("alert_heading");
var alert_body = document.getElementById("alert_body");
var btn_prompt = document.getElementById("btn_prompt");
var a_heading = document.getElementById("a_heading");
var a_body = document.getElementById("a_body");
var p_heading = document.getElementById("p_heading");
var p_body = document.getElementById("p_body");


btn_alert.onclick = function(){

	var type = alert_type.value;
	var msg = alert_msg.value;

	myAlert(type,msg);
}

btn_alert_popup.onclick = function(){

	var heading = alert_heading.value;
	var body = alert_body.value;

	myPopupAlert(heading,body);
}

btn_prompt.onclick = function(){

	var heading = "Ask Your Query";
	var body = '<form method="POST" action="#">\
    				<div class="form-group">\
      					<label for="title">Title :</label>\
      					<input type="text" class="form-control" id="title" placeholder="Title for Query :" name="title">\
    				</div>\
    				<div class="form-group">\
      					<label for="description">Description :</label>\
      					<textarea id="description" class="form-control" placeholder="Description for Query :"></textarea>\
    				</div>\
    				<button type="submit" class="btn btn-default">Ask Query</button>\
				</form>';

	myPrompt(heading,body);
}


function myAlert(type,msg){
	var alert_class = "alert alert-dismissable fade in alert-";
	
	switch(type)
	{
		case 's':
			alert_class += "success";
			break;
		case 'i':
			alert_class += "info";
			break;
		case 'w':
			alert_class += "warning";
			break;
		case 'd':
			alert_class += "danger";
			break;
		default:
			alert("plz, enter valid alert type.");
			return;				
	}

	var alert_div = document.createElement("div");
	alert_div.setAttribute("class", alert_class);
	alert_div.innerHTML = '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+msg;
	btn_alert.parentNode.appendChild(alert_div);
}

function myPopupAlert(heading,body){

	a_heading.innerHTML = heading;
	a_body.innerHTML = body;
}

function myPrompt(heading,body){

	p_heading.innerHTML = heading;
	p_body.innerHTML = body;	
}