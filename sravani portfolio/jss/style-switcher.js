
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("cilck", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternative = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach(style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.removeAttribute("disabled","true");
        }
    }
}
