let currentslide = 0;
const slides = document.querySelectorAll('.slide')
const totalslide = slides.length;
const prevb = document.querySelector('.prevbtn')
const nextb = document.querySelector('.nextbtn')

function showslide(index){
    if(index < 0){
        currentslide = totalslide -1
    }
    else if( index >= totalslide){
        currentslide = 0
    }
    else{
        currentslide = index;
    }
    document.querySelector('.slider').style.transform = `translateX(-${currentslide * 100}%)`
}
prevb.addEventListener('click',()=>{
    showslide(currentslide -1)
})
nextb.addEventListener('click',()=>{
    showslide(currentslide + 1)
})
showslide(currentslide)


let icon = document.getElementById('menu-icon')
let link = document.getElementsByClassName('nav1')[0]

icon.onclick= ()=>{
    icon.classList.toggle('bx-x')
    link.classList.toggle('nav1')
}
window.onscroll= ()=>{
    icon.classList.remove('bx-x')
    link.classList.remove('nav1')
}