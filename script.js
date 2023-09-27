const toggle = document.querySelector(".toggle")
const nav = document.querySelector(".navigation")

toggle.addEventListener('click',()=>{
    // console.log('hello')
    nav.classList.toggle('mobile')
})