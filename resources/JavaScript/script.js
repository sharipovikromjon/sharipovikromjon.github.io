let tabLinks = document.querySelectorAll('.tab-links');

tabLinks.forEach((item, index) => {
});

let tabContents = document.querySelectorAll('.tab-contents');

tabContents.forEach((value, idx) => {
})

function openTab(tabName) {
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}


