const saveBtn = document.getElementById("saveBtn");
let savedTime = "";

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const miliseconds = now.getMilliseconds().toString().padStart(3, '0');

    const timeString = `${hours}:${minutes}:${seconds}:${miliseconds}`
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 10);

function saveTime() {
    savedTime = document.getElementById("clock").textContent;
    document.getElementById("savedTime").textContent = `Hora guardada: ${savedTime}`;
}
document.getElementById("saveBtn").addEventListener("click", saveTime);
