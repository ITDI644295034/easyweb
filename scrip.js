const prgressEL = document.querySelector('.progress')
const navbar = document.querySelector('nav')
// window.onscroll = () => slzk()
window.onscroll = () => scrollProgress()

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercefntage = (scrollTop / pageHeight) * 100
    prgressEL.style.visibility = 'visible';
    prgressEL.style.width = scrollPercefntage + "%"
    console.log(scrollPercefntage);

    if (scrollPercefntage >= 10) {
        navbar.classList.add('activ')
    } else {
        navbar.classList.remove('activ')
    }
}

function slzk() {
    let top = scrollY
    if (top >= 200) {
        navbar.classList.add('activ')
    } else {
        navbar.classList.remove('activ')
        
    }

    console.log(top);
}