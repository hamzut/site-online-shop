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
    If (clickTarget.classList.contains("btn") && !clickTarget.ClassList.cantains("active")){
        clickTarget.classList.add("active");
        activeButton.classList.remove("active");
    }
})