<<<<<<< HEAD

// console.log(displayClock);

let displayClock = document.querySelector(".digitalClock span");

let dClock = () => {
    let date = new Date();

    let hour = date.getHours();
    let hourType = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12; // 0 ko 12 bana do

    let currentHour = hour < 10 ? "0" + hour : hour;
    let currentMin = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let currentSec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    displayClock.innerHTML = `${currentHour} : ${currentMin} : ${currentSec} ${hourType}`;
};

setInterval(dClock, 1000);

// For Mobile Menu
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// For FAQ Section
let questions = document.querySelectorAll(".faqInner h2");

questions.forEach(function(question){

    question.addEventListener("click", function(){

        let paragraph = this.nextElementSibling;
        let icon = this.querySelector("span");

        // Check karo ye already open hai ya nahi
        let isOpen = paragraph.classList.contains("faq-Show");

        // Sab close karo
        document.querySelectorAll(".faqInner p").forEach(function(p){
            p.classList.remove("faq-Show");
        });

        document.querySelectorAll(".faqInner h2 span").forEach(function(s){
            s.classList.remove("span-show");
        });

        // Agar pehle open nahi tha to open karo
        if(!isOpen){
            paragraph.classList.add("faq-Show");
            icon.classList.add("span-show");
        }

    });

});
=======
// alert("Js file loaded successfully");
// console.log(displayClock);

let displayClock = document.querySelector(".digitalClock span");

let dClock = () => {
    let date = new Date();

    let hour = date.getHours();
    let hourType = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12; // 0 ko 12 bana do

    let currentHour = hour < 10 ? "0" + hour : hour;
    let currentMin = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let currentSec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    displayClock.innerHTML = `${currentHour} : ${currentMin} : ${currentSec} ${hourType}`;
};

setInterval(dClock, 1000);


>>>>>>> 429913c5d84ad836bd7832120e1634854af4db1a
