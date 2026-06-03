const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

item.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});
