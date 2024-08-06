let updateClock = () => {
    const date = new Date();
    let hours = date.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours.toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);
    const strTime = `${meridiem} ${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = strTime;
}

updateClock();
setInterval(updateClock, 1000);