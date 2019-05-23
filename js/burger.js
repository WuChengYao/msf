//id跟class寫法


// who
var all = document.querySelector('#burger')
var line1 = document.querySelector('#burger_1')
var line2 = document.querySelector('#burger_2')
var line3 = document.querySelector('#burger_3')

var burger_onin = document.querySelector('#burger_onin')
// console.log(burger_onin)

// when
all.addEventListener('click', navBtnHandler)

// what
function navBtnHandler() {
    line1.classList.toggle('burger_1a')
    line2.classList.toggle('burger_2a')
    line3.classList.toggle('burger_3a')

    if (burger_onin.classList.contains('burger_onin_2') == true) {

        burger_onin.classList.remove('burger_onin_2')
    } else {

        burger_onin.classList.add('burger_onin_2')
    }

    // burger_onin.classList.toggle('aaaaaa')
    // if (burger_onin.style.dispaly == "block") {
    //     burger_onin.style.dispaly = "none"
    // }
    // else {
    //     burger_onin.style.dispaly = "block"
    // }
}  
