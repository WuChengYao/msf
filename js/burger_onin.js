//id寫法

var burger = document.querySelector('#burger')
var burger_onin = document.querySelector('#burger_onin')

console.log(burger_onin)

function openburger() {
    if (burger_onin.style.dispaly === "block") {
        console.log(122314)
        burger_onin.style.dispaly = "none"
    }
    else {
        burger_onin.style.dispaly = "block"
        console.log(5555555)
    }
}

burger.addEventListener('click',openburger)