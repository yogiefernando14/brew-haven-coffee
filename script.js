// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

reveals.forEach(item => {

const top = item.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {

item.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

navbar.classList.add("scrolled");

} else {

navbar.classList.remove("scrolled");

}

});


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

document.querySelectorAll("#navMenu a").forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("active");

});

});


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");

function openModal(title, price, desc, image){

modal.style.display = "flex";

modalTitle.textContent = title;
modalPrice.textContent = price;
modalDesc.textContent = desc;
modalImg.src = image;

}

function closeModal(){

modal.style.display = "none";

}

window.addEventListener("click",(e)=>{

if(e.target === modal){

closeModal();

}

});
