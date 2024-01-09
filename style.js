const dropdown1 = document.querySelector(".dropdown1");
dropdown1.onclick=()=>{
    const menu = document.querySelector("ul");
    menu.classList.toggle("showdropdown1");
}

const dropdown2 = document.querySelector(".dropdown2");
dropdown2.onclick=()=>{
    const menu = document.querySelector("input");
    menu.classList.toggle("showdropdown2");
}