// this opens and closes the nav 
// in mobile view 
// attached to the mobile nav only
function nav_toggle() {
    const x = document.getElementById("navv");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else{
        x.style.display = "block";
    }
}

// this has ONLY the home container display
// and closes the menu, form, and the nav itself 
// or else it(nav) will remain open
function home_on() {
    const home = document.getElementById("home_container");
    const menu = document.getElementById("menu_holder");
    const form = document.getElementById("form_container");
    const nav = document.getElementById("navv");

    home.style.display = "block";
    menu.style.display = "none";
    form.style.display = "none";
    nav.style.display = "none";
}

// this has ONLY the menu container display
// and closes the home, form, and the nav itself 
// or else it(nav) will remain open
function menu_on() {
    const home = document.getElementById("home_container");
    const menu = document.getElementById("menu_holder");
    const form = document.getElementById("form_container");
    const nav = document.getElementById("navv");

    home.style.display = "none";
    menu.style.display = "flex";
    form.style.display = "none";
    nav.style.display = "none";
}

// this has ONLY the form container display
// and closes the menu, home, and the nav itself 
// or else it(nav) will remain open
function form_on() {
    const home = document.getElementById("home_container");
    const menu = document.getElementById("menu_holder");
    const form = document.getElementById("form_container");
    const nav = document.getElementById("navv");

    home.style.display = "none";
    menu.style.display = "none";
    form.style.display = "block";
    nav.style.display = "none";
}

// this is for the featured items 
// clicking on each circle displays a new 
// featured item and gets rid of the old
// featured item
// firstItem, seconditem, thirditem
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

// this closes the welcome page 
// that covers the home page
function enter() {
    const welcomePage = document.getElementById("welcome_page");

    welcomePage.style.display = "none";
}

// this toggles the transitions back and forth
// everytime it is clicked on (menu_text).
// remember that the function always returns something back 
// (according to someone from discord)
// so "return" wasnt needed
let menu = true;
function menu_toggle() {
    menu = !menu;

    if (menu === false){
        document.getElementById("menu_cover_left").classList.add("mc_left_transition");
        document.getElementById("menu_cover_right").classList.add("mc_right_transition");
        document.getElementById("menu_holder").classList.add("menu_flip");
    } else {
        document.getElementById("menu_cover_left").classList.remove("mc_left_transition");
        document.getElementById("menu_cover_right").classList.remove("mc_right_transition");
        document.getElementById("menu_holder").classList.remove("menu_flip"); 
    }
}





    



