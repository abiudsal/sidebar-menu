let btn = document.querySelector("#toggle");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = () =>{
    sidebar.classList.toggle("active");
}

searchBtn.onclick = () =>{
    sidebar.classList.toggle("active");
}