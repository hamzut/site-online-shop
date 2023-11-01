let user = prompt("как твоё имя?")
alert("Привет! " + user)

const iPhone = document.querySelector(".iPhone");
const samsung = document.querySelector(".samsung");

iPhone.addEventListener("click", function (event){
    let clicktarget = event.target;
    let activeButton = iPhone.querySelector(".active");
    let priceItem = iPhone.querySelector(".price");
    let currentPrice;
    let activeButtoncolor = iPhone.querySelector(".active-border");
    if (clicktarget.classList.contains("color-btn") && !clicktarget.classList.contains("active-border")){
        clicktarget.classList.add("active-border");
        activeButtoncolor.classList.remove("active-border");
    }
    if (clickTarget.classList.contains("btn") && !clickTarget.ClassList.cantains("active")){
        clickTarget.classList.add("active");
        activeButton.classList.remove("active");
    }
})
samsung.addEventListener("click", function (event){
    let clicktarget = event.target;
    let activeButton = samsung.querySelector(".active");
    let priceItem = samsung.querySelector(".price");
    let currentPrice;
    let activeButtoncolor = samsung.querySelector(".active-border");
    if (clicktarget.classList.contains("color-btn") && !clicktarget.classList.contains("active-border")){
        clicktarget.classList.add("active-border");
        activeButtoncolor.classList.remove("active-border");
    }
    if (clickTarget.classList.contains("btn") && !clickTarget.ClassList.cantains("active")){
        clickTarget.classList.add("active");
        activeButton.classList.remove("active");
    }
})