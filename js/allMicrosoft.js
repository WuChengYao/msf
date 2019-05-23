//class寫法
// who
var all = document.querySelector('.wfmen_1')
var wfmen_1_in = document.querySelector('.wfmen_1_in')


// when
all.addEventListener('click', openwfmen_1_in)

// what
function openwfmen_1_in() {

    if (wfmen_1_in.classList.contains('wfmen_1_none') == true) {
        wfmen_1_in.classList.toggle('wfmen_1_block')
        wfmen_1_in.classList.toggle('wfmen_1_none')
    } else {
        wfmen_1_in.classList.toggle('wfmen_1_block')
        wfmen_1_in.classList.toggle('wfmen_1_none')
    }
}

    // line1.classList.toggle('burger_1a')
    // if (wfmen_1_in.classList.contains('wfmen_2_in') == true) {

    //     wfmen_1_in.classList.remove('wfmen_2_in')
    // } else {

    //     wfmen_1_in.classList.add('wfmen_2_in')
    // }