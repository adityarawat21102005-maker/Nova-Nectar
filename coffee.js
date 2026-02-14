alert("Js file loaded successfully");
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

