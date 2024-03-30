(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    // Add event listener to div for navigating to portfolio section
    document.getElementById("projects-div").addEventListener("click", function() {
        // Update the sidebar to reflect the portfolio section
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector(".control[data-id='portfolio']").classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById("portfolio").classList.add("active");
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons
    const everythingBtn = document.getElementById("everything-btn");
    const mobileBtn = document.getElementById("mobile-btn");
    const webBtn = document.getElementById("web-btn");

    // Add click event listeners to the buttons
    everythingBtn.addEventListener("click", function() {
        const everythingSection = document.querySelector(".portfolios[data-id='Everything']");
        everythingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    mobileBtn.addEventListener("click", function() {
        const mobileSection = document.querySelector(".portfolios[data-id='Mobile']");
        mobileSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    webBtn.addEventListener("click", function() {
        const webSection = document.querySelector(".portfolios[data-id='Web']");
        webSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 200, fill: "forwards" });

});
