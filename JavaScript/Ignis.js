function nav_toggle() {
    const x = document.getElementById("navv");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else{
        x.style.display = "block";
    }
}

function home_on() {
    const home = document.getElementById("home_container");
    const menu = document.getElementById("menu_container");
    const form = document.getElementById("form_container");
    const nav = document.getElementById("navv");
    // const message = document.getElementById("welcome_page");
    // const welcome = document.getElementById("welcome_message");
    // const assist = document.getElementById("assist_message");

    home.style.display = "block";
    menu.style.display = "none";
    form.style.display = "none";
    nav.style.display = "none";
    // message.style.display = "inline-block"
    // assist.style.display = "none"
    // welcome.style.display = "block"
}

function menu_on() {
    const home = document.getElementById("home_container");
    const menu = document.getElementById("menu_container");
    const form = document.getElementById("form_container");
    const nav = document.getElementById("navv");
    // const message = document.getElementById("welcome_page");

    home.style.display = "none";
    menu.style.display = "flex";
    form.style.display = "none";
    nav.style.display = "none";
    // message.style.display = "none";
    

}

function form_on() {
    const home = document.getElementById("home_container");
    const menu = document.getElementById("menu_container");
    const form = document.getElementById("form_container");
    const nav = document.getElementById("navv");
    // const message = document.getElementById("welcome_page");
    // const welcome = document.getElementById("welcome_message")
    // const assist = document.getElementById("assist_message")

    home.style.display = "none";
    menu.style.display = "none";
    form.style.display = "block";
    nav.style.display = "none";
    // message.style.display = "inline-block"
    // assist.style.display = "block"
    // welcome.style.display = "none"
}

function firstItem() {
    const first = document.getElementById("featured_items0");
    const second = document.getElementById("featured_items1");
    const third = document.getElementById("featured_items2");

    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";
}

function secondItem() {
    const first = document.getElementById("featured_items0");
    const second = document.getElementById("featured_items1");
    const third = document.getElementById("featured_items2");

    first.style.display = "none";
    second.style.display = "block";
    third.style.display = "none";
}

function thirdItem() {
    const first = document.getElementById("featured_items0");
    const second = document.getElementById("featured_items1");
    const third = document.getElementById("featured_items2");

    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "block";
}

function enter() {

const welcomePage = document.getElementById("welcome_page");

welcomePage.style.display = "none"


}




    



