// Digital Clock
let displayClock = document.querySelector(".digitalClock span");

function dClock() {
    let date = new Date();

    let hour = date.getHours();
    let hourType = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12;

    let currentHour = hour < 10 ? "0" + hour : hour;
    let currentMin = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let currentSec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    displayClock.innerHTML = `${currentHour} : ${currentMin} : ${currentSec} ${hourType}`;
}

setInterval(dClock, 1000);


// Mobile Menu
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// FAQ Section
let questions = document.querySelectorAll(".faqInner h2");

questions.forEach(function (question) {
    question.addEventListener("click", function () {

        let paragraph = this.nextElementSibling;
        let icon = this.querySelector("span");

        let isOpen = paragraph.classList.contains("faq-Show");

        document.querySelectorAll(".faqInner p").forEach(function (p) {
            p.classList.remove("faq-Show");
        });

        document.querySelectorAll(".faqInner h2 span").forEach(function (s) {
            s.classList.remove("span-show");
        });

        if (!isOpen) {
            paragraph.classList.add("faq-Show");
            icon.classList.add("span-show");
        }
    });
});
