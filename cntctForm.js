//Accessing elements
let body = document.querySelector("body");
let form = document.querySelector("#contact-form");

let input = document.querySelectorAll("input");
let textA = document.querySelector("textarea");

let GEbox = document.querySelector("#ge-box");
let SRbox = document.querySelector("#sr-box");
let radio = document.querySelectorAll(".radio");
let radioBtn = document.querySelectorAll(".radio-btns");

let consentBox = document.querySelector("#consent-box");
let consentTickBox = document.querySelector("#consent");
let consentImg = document.querySelector("#check-btn");

let error = document.querySelectorAll(".error");
let emailerr = document.querySelector("#emailerr");

let submit = document.querySelector("button");
let cnfrmBox = document.querySelector("#after-submit");



//On click query select
let Qselect = [false, false];
GEbox.addEventListener("click", () => {
    if (Qselect[0] == false) {
        Qselect = [true, false];
        onClickQS();
    } else {
        Qselect = [false, false];
        onClickQS();
    }
});
SRbox.addEventListener("click", () => {
    if (Qselect[1] == false) {
        Qselect = [false, true];
        onClickQS();
    } else {
        Qselect = [false, false];
        onClickQS();
    }
});
function onClickQS() {
    for (let i = 0; i <= 1; i++) {
        if (Qselect[i] == true) {
            radio[i].style.height = "15px";
            radio[i].style.width = "15px";
            radio[i].style.border = "none";
            radioBtn[i].style.opacity = "1";
        } else {
            radio[i].style.height = "14px";
            radio[i].style.width = "14px";
            radio[i].style.border = "1px solid var(--lgrey)";
            radioBtn[i].style.opacity = "0";
        }
    }
}


//On click consent button
let consentBtn = false;
consentBox.addEventListener("click", () => {
    if (consentBtn == false) {
        consentBtn = true;
        consentTickBox.style.height = "17px";
        consentTickBox.style.width = "17px";
        consentTickBox.style.border = "none";
        consentImg.style.opacity = "1";
    } else {
        consentBtn = false;
        consentTickBox.style.height = "16px";
        consentTickBox.style.width = "16px";
        consentTickBox.style.border = "1px solid var(--lgrey)";
        consentImg.style.opacity = "0";
    }
});


submit.addEventListener("click", () => {
    let submitCheck = 0;
    if (input[0].value == "") {
        error[0].style.display = "block";
    } else {
        error[0].style.display = "none";
        submitCheck++;
    }

    if (input[1].value == "") {
        error[1].style.display = "block";
    } else {
        error[1].style.display = "none";
        submitCheck++;
    }

    if (input[2].value == "") {
        error[2].style.display = "block";
    } else {
        error[2].style.display = "none";
        submitCheck++;
    }

    if (input[2].value.slice(-10) != "@gmail.com" && input[2].value.length != 0) {
        emailerr.style.display = "block";
    } else {
        emailerr.style.display = "none";
        submitCheck++;
    }

    if (Qselect[0] == false && Qselect[1] == false) {
        error[3].style.display = "block";
    } else { 
        error[3].style.display = "none";
        submitCheck++;
    }

    if (textA.value == "") {
        error[4].style.display = "block";
    } else {
        error[4].style.display = "none";
        submitCheck++;
    }

    if (consentBtn == false) {
        error[5].style.display = "block";
    } else {
        error[5].style.display = "none";
        submitCheck++;
    }


    if (submitCheck == 7) {
        for (let i = 0; i <= 2; i++) {
            input[i].value = "";
        }
        Qselect = [false, false];
        onClickQS();
        textA.value = "";
        consentBtn = false;
        consentTickBox.style.height = "16px";
        consentTickBox.style.width = "16px";
        consentTickBox.style.border = "1px solid var(--lgrey)";
        consentImg.style.opacity = "0";

        window.scrollTo({ top: 0, behavior: 'smooth' });
        cnfrmBox.style.top = "20px";
        setTimeout(() => {
            cnfrmBox.style.top = "-100px";
        }, 4000);
    }
});


//To width default action of the form
form.addEventListener("submit", (event) => {
    event.preventDefault();
});