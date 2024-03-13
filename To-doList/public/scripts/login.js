
let loginBox = document.getElementById("loginBox");

function login(){

    if (loginBox.value == ""){
        return;
    }

    let currentURL = window.location.href;
    currentURL = currentURL + 'users/' + loginBox.value;
    window.location.href = currentURL;
}

// Configure user login box
loginBox.addEventListener("keypress", e => {
    if(e.key == "Enter"){
        e.preventDefault();
        login();
    }
});

let enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", login);