let container = document.getElementById ("container");
let textOfWeb = document.getElementById ("text_of_web");
let boxLogin = document.getElementById ("box_Login");
let boxTextTop = document.querySelectorAll ("#box_text_top>span");
let boxInputCenterSpan = document.querySelectorAll ("#box_input_center>span");
let boxInputPassword = document.querySelector ("#box_input_password>input");
let boxInputCenter = document.querySelector ("#box_input_center>input");
let boxBtnButtom = document.querySelectorAll ("#box_link>a");

let toggleTheme = document.getElementById("toggle-theme");
let flagTheme = true;

function lightMode () {
    localStorage.setItem("theme" , "light");
    flagTheme = true;

    container.style.backgroundImage = "url(img/background.png)";
    textOfWeb.style.color = "var(--colorText)";
    boxLogin.style.backgroundColor = "#fff";

    boxTextTop.forEach ((item) => {
        item.style.color = "var(--colorText)"
    });

    boxInputCenterSpan.forEach ((item) => {
        item.style.color = "var(--colorTextTwo)"
    });

    boxInputPassword.style.border = "1.5px solid #1d20434e";
    boxInputCenter.style.border = "1.5px solid #1d20434e";
    
    boxBtnButtom.forEach ((item) => {
        item.style.color = "var(--colorTextTwo)";
    });
}

function darkMode () {
    localStorage.setItem("theme" , "dark");
    flagTheme = false;

    container.style.backgroundImage = "url(img/background-2.png)";
    textOfWeb.style.color = "#fff";
    boxLogin.style.backgroundColor = "#2d31649a";

    boxTextTop.forEach ((item) => {
        item.style.color = "#fff"
    });

    boxInputCenterSpan.forEach ((item) => {
        item.style.color = "#fff"
    });
    
    boxInputPassword.style.border = "1.5px solid #fff";
    boxInputCenter.style.border = "1.5px solid #fff";
    boxBtnButtom.forEach ((item) => {
        item.style.color = "#fff";
    });
}

toggleTheme.addEventListener ("click" , () => {
    if (flagTheme) {
        darkMode();
    }else {
        lightMode();
    }
});

window.addEventListener ("load" , () => {
    let saveValueLS = localStorage.getItem("theme");
    if (saveValueLS == null) {
        lightMode();
    }else if (saveValueLS === "dark") {
        darkMode();
    }else {
        lightMode();
    }
});