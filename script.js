// Main compute function
function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
	
	if (principal <= 0) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}
	
    var rate = parseFloat(document.getElementById("rate").value);
	var years = parseInt(document.getElementById("years").value);
	
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
