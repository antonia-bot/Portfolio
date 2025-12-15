// BURGER MENU - OUVERTURE / FERMETURE SIDEBAR

const burger = document.getElementById("burger");
const sidebar = document.querySelector(".sidebar");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    sidebar.classList.toggle("open");
});



window.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector("#competences");

    const barHtmlCss = document.querySelector(".skills-htmlcss");
    const barJs = document.querySelector(".skills-js");
    const barPhp = document.querySelector(".skills-php");

    let animationDone = false; 

    function animateBars() {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 150 && !animationDone) {
            barHtmlCss.style.width = "90%";
            barJs.style.width = "70%";
            barPhp.style.width = "85%";

            animationDone = true;
        }
    }

    window.addEventListener("scroll", animateBars);
    animateBars(); 
});
