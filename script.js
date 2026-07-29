// =======================================
// 0XFORD Portfolio Script
// =======================================

// ---------------------------
// Typing Animation
// ---------------------------

document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector("#typing")) {

        new Typed("#typing", {
            strings: [
                "Advanced Roblox Script Developer",
                "LuaU Programmer",
                "UI Designer",
                "Automation Developer",
                "Performance Optimizer"
            ],
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 1800,
            loop: true
        });

    }

});

// ---------------------------
// Navbar Scroll Effect
// ---------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(5,8,22,.92)";
        header.style.boxShadow = "0 10px 35px rgba(0,245,255,.08)";

    } else {

        header.style.background = "rgba(5,8,22,.6)";
        header.style.boxShadow = "none";

    }

});

// ---------------------------
// Active Navigation
// ---------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ---------------------------
// Counter Animation
// ---------------------------

const counters = document.querySelectorAll(".stat h2");

let started = false;

function runCounter() {

    if (started) return;

    const stats = document.querySelector("#stats");

    if (!stats) return;

    const trigger = stats.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text.replace(/\D/g, ""));

            let current = 0;

            const speed = number / 80;

            const update = () => {

                current += speed;

                if (current < number) {

                    counter.innerText =
                        Math.floor(current) +
                        text.replace(/[0-9]/g, "").replace("+","");

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", runCounter);

// ---------------------------
// Reveal Animation
// ---------------------------

const revealItems = document.querySelectorAll(
".about-card,.skill-card,.project-card,.stat,.contact-card"
);

const reveal = () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ---------------------------
// Mouse Glow
// ---------------------------

document.addEventListener("mousemove",(e)=>{

document.documentElement.style.setProperty(
"--mouseX",
e.clientX+"px"
);

document.documentElement.style.setProperty(
"--mouseY",
e.clientY+"px"
);

});

// ---------------------------
// Smooth Scroll
// ---------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

// ---------------------------
// Tilt Effect
// ---------------------------

const cards=document.querySelectorAll(
".project-card,.skill-card,.profile-card"
);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;
const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// ---------------------------
// Particles.js
// ---------------------------

if(typeof particlesJS !== "undefined"){

particlesJS("particles-js",{

particles:{

number:{
value:80
},

color:{
value:"#00F5FF"
},

shape:{
type:"circle"
},

opacity:{
value:0.35
},

size:{
value:3
},

line_linked:{
enable:true,
distance:150,
color:"#00F5FF",
opacity:.2,
width:1
},

move:{
enable:true,
speed:2
}

},

interactivity:{

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
}

},

modes:{

grab:{
distance:170
},

push:{
particles_nb:4
}

}

},

retina_detect:true

});

}

console.log("%c0XFORD Portfolio Loaded",
"color:#00F5FF;font-size:18px;font-weight:bold;");
