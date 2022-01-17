
const navbar = document.querySelector('.navbar')
let zero = 40;
window.addEventListener('scroll',function(){
    if(window.scrollY > 0 ){
    navbar.style.position ='fixed'
    navbar.classList.toggle('transition',window.scrollY > 40)
    zero = window.scrollY
}else{
container.style.position ='relative'  

}

})