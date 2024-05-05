    let tabLinks = document.querySelectorAll(".tab-links");
    let tabContents = document.querySelectorAll('.tab-contents');

function openTab(tabName) {
    for(tabLink of tabLinks){
        tabLink.classList.add("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// For side menu
let sidemenu = document.getElementById('sidemenu');

function open_menu() {
    sidemenu.style.right = "0";
}

function close_menu() {
    sidemenu.style.right = "-200px";
}






