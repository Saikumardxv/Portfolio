// ==============================
// Theme Toggle (Dark / Light Mode)
// ==============================

const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    if(themeToggle) themeToggle.className = "fas fa-sun";
}

if(themeToggle){
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
        themeToggle.className = "fas fa-sun";
    }
    else{
        localStorage.setItem("theme","dark");
        themeToggle.className = "fas fa-moon";
    }

});
}


// ==============================
// Typing Animation
// ==============================

const typing = document.querySelector(".typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Full Stack Learner",
    "JavaScript Enthusiast",
    "Python Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }

    else{

        typing.textContent = current.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex===words.length){
                wordIndex=0;
            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const id=this.getAttribute("href");

document.querySelector(id).scrollIntoView({

behavior:"smooth"

});

});

});


// ==============================
// Active Navigation
// ==============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==============================
// Scroll Reveal Animation
// ==============================

const reveal=document.querySelectorAll(".about-card,.skill,.project,.hero-image,.hero-text");

function revealElements(){

const height=window.innerHeight;

reveal.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<height-100){

el.style.opacity="1";
el.style.transform="translateY(0)";

}

});

}

reveal.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="1s";

});

window.addEventListener("scroll",revealElements);

revealElements();


// ==============================
// Skill Hover Animation
// ==============================

document.querySelectorAll(".skill").forEach(skill=>{

skill.addEventListener("mouseenter",()=>{

skill.style.transform="scale(1.08)";

});

skill.addEventListener("mouseleave",()=>{

skill.style.transform="scale(1)";

});

});


// ==============================
// Project Card Animation
// ==============================

document.querySelectorAll(".project").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(56,189,248,.25),
rgba(255,255,255,.08))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="#111";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ==============================
// Contact Form
// ==============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}