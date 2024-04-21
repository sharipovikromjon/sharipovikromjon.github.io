let tabLinks = document.querySelectorAll('.tab-links');
// console.log(tabLinks);

tabLinks.forEach((item, index) => {
    // console.log(item);
});

let tabContents = document.querySelectorAll('.tab-contents');
// console.log(tabContents);

tabContents.forEach((value, idx) => {
    // console.log(value);
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


