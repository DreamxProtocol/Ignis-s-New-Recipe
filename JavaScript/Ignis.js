function toggle() {
    const x = document.getElementById("navv");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
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



    



