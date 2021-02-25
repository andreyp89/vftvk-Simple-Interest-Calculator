// Main compute function
function compute() {
	var p = document.getElementById("principal");
    var principal = parseFloat(p.value);
	
	if (principal <= 0 || p.value == "") {
		alert("Enter a positive number");
		p.focus();
		return;
	}
	
    var rate = parseFloat(document.getElementById("rate").value);
	
	var y = document.getElementById("years");
	var years = parseInt(y.value);
	
	if (years <= 0 || y.value == "") {
		alert("Enter a positive number of years");
		y.focus();
		return;
	}
	
	var interest = principal * years * rate / 100;
	
	var year = (new Date()).getFullYear();
	year += years
	
	var resultHtml = "If you deposit <mark>" + principal + "</mark>,<br/>";
	resultHtml += "at an interest rate of <mark>" + rate + "%</mark>.<br/>";
	resultHtml += "You will receive an amount of <mark>" + interest + "</mark>,<br/>";
	resultHtml += "in the year <mark>" + year + "</mark>";
	
	document.getElementById("result").innerHTML = resultHtml;
}

// Rate slider handler
function rateChange(e) {
	document.getElementById("rateDisplay").innerHTML = e.target.value + " %";
}