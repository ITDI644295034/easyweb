const prgressEL = document.querySelector('.progress')
window.onscroll = () => scrollProgress()
const home = document.querySelector('.home-text')

function scrollProgress() {
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercefntage = (scrollTop / pageHeight) * 100
    prgressEL.style.visibility = 'visible';
    prgressEL.style.width = scrollPercefntage + "%"
}

function cha() {
}