const toggle = document.querySelector(".toggle")
const nav = document.querySelector(".navigation")

toggle.addEventListener('click',()=>{
    nav.classList.toggle('mobile')
})

let cur = document.querySelector('.cur')

document.addEventListener('mousemove' , function jkl(e){
    cur.style.left= e.pageX + 'px';
    cur.style.top= e.pageY + 'px';
})

