/* ========= Toogle style switcher ======== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        } 
})

/* ======== Theme colors ======== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

/* ======== Theme Light and Dark ======== */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");

    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }

})




const quoteBox = document.getElementById("quoteBox");
const qpbox = document.getElementById("qpbox")
const qpDiv = document.querySelector(".qp");
const authorText = document.getElementById("author"); 

const themeButtons = document.querySelectorAll(".theme-btn");


themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        const theme = button.getAttribute("data-theme");
        console.log(theme)

        
        if (theme) {
            
            quoteBox.className = "quote padd-15";
            qpDiv.className = "qp";

            
            quoteBox.classList.add(theme);
            qpDiv.classList.add(theme);

            const styles = getComputedStyle(quoteBox);

            quoteBox.style.borderColor = styles.getPropertyValue("--border-color");
            quoteBox.style.fontFamily = styles.getPropertyValue("--font-family");
            quoteBox.style.fontSize = styles.getPropertyValue("--font-size");
            qpDiv.style.fontSize = styles.getPropertyValue("--font-size");
            qpDiv.style.backgroundColor = styles.getPropertyValue("--qp-bg-color");
            qpDiv.style.color = styles.getPropertyValue("--font-color");
            authorText.style.color = styles.getPropertyValue("--author-color");
        }
    });
});
