function loaded() {
    event.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    username.setAttribute("autocomplete", "off");
    password.setAttribute("autocomplete", "off");
    username.focus();

}

window.onload = loaded;