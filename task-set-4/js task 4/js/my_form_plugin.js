var pattern="";
var title="";

function myForm(jsonString){
	this.jsonString = jsonString;

	this.createForm = function(){
		var form_ref = document.createElement("form");
		form_ref.setAttribute("action","#");

		var jsonArray = JSON.parse(this.jsonString);
		for(i in jsonArray){
			var div_input = document.createElement("div");
			div_input.setAttribute("class","form-group");
			var label = document.createElement("label");
			label.innerHTML = jsonArray[i].label;
			if(jsonArray[i].type=="textarea"){
				var input = document.createElement("textarea");
			}else{
			var input = document.createElement("input");
			input.setAttribute("type",jsonArray[i].type);
			}
			input.setAttribute("name",jsonArray[i].name);
			input.setAttribute("class","form-control");
			input.setAttribute("required","true");
			makePattern(jsonArray[i].validate);
			input.setAttribute("pattern",pattern);
			input.setAttribute("title",title);
			div_input.appendChild(label); 
			div_input.appendChild(input);
			form_ref.appendChild(div_input); 
		}

		var btn = document.createElement("button");
		btn.setAttribute("type","submit");
		btn.setAttribute("class","btn btn-primary");
		btn.innerHTML = "Submit";
		form_ref.appendChild(btn);
			
		return form_ref;
	}

}

function makePattern(validate){

	switch (validate.allow)
	{
		case "alphabet":
			pattern = "[a-zA-Z]{"+validate.minLength+","+validate.maxLength+"}";
			title = "Length should be  "+validate.minLength+"  to  "+validate.maxLength+"  &  only "+validate.allow+" is allowed.";
			break;
		case "any":
			pattern = ".{"+validate.minLength+","+validate.maxLength+"}";
			title = "Length should be  "+validate.minLength+"  to  "+validate.maxLength+" .";
			break;
		case "number":
			pattern = "[0-9]{"+validate.length+"}";
			title = "Length should be  "+validate.length+"  &  only "+validate.allow+" is allowed.";
			break;
		case "email":
			pattern = "[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+";
			title = "Format of Email is : aBcd123@gmail.com";
			break;	
	}

	return pattern;
}