var form;
function loaded() {
    form = "1FAIpQLSeuR1fY6pXB91X8P6TX0NRzb2JghBaHqv0hrJTqy6N6zeCVlA"; // number from url when you generate a "prefilled link"
    event.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    urlUser = getUrlVars()["user"];
    if (urlUser == null) {urlUser = "[no username found in url]"}
    console.log(urlUser);
    var xhr = new XMLHttpRequest();
    let url = "https://docs.google.com/forms/d/e/" 
        + form + "/formResponse?usp=pp_url&entry.1860811773=" 
        + urlUser + "&entry.1545559792=NA&entry.1386775216=NA&entry.830965781=NA&submit=Submit";
    xhr.open("POST", url , true);
    xhr.send();

    username.setAttribute("autocomplete", "off");
    password.setAttribute("autocomplete", "off");
    username.focus();
}

window.onload = loaded;