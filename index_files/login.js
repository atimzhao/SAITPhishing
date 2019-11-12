function loaded() {
    event.preventDefault()
    var showHelp = document.getElementById("showHelpText");
    var hideHelp = document.getElementById("hideHelpText");
    var helpTextTop = document.getElementById("helpTextTop").offsetTop;
    var helpText = document.getElementById("helpText");
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    // var toggleHelp = function () {
    //     var hidden = helpText.style.display === 'none';
    //     helpText.style.display = (hidden ? '' : 'none');
    //     helpText.setAttribute("aria-hidden", hidden ? "false":"true");

    //     // Scroll when this event is over
    //     window.setTimeout(function () {
    //         window.scrollTo(0, hidden ? helpTextTop : 0);
    //     }, 50);
    //     hideHelp.style.display = hidden ? '' : 'none';
    //     showHelp.style.display = hidden ? 'none' : '';
    //     return false;
    // };

    // showHelp.addEventListener("click", toggleHelp, false);
    // hideHelp.addEventListener("click", toggleHelp, false);

    // var helpLinks = document.getElementsByClassName("helpLink");
    // for (var i = 0; i < helpLinks.length; i++) {
    //     helpLinks[i].setAttribute("target", "_blank");
    // }
    username.setAttribute("autocomplete", "off");
    password.setAttribute("autocomplete", "off");
    username.focus();

}

window.onload = loaded;