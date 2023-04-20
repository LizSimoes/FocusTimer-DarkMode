let timerId;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    timerId = setInterval(updateTimer, 1000);
    document.getElementById("button").disabled = true;
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById("span").textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return String(number).padStart(2, '0');
}

function pauseTimer() {
    clearInterval(timerId);
    document.getElementById("button").disabled = false;
}

function resetTimer() {
    clearInterval(timerId);
    document.getElementById("span").textContent = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("button").disabled = false;
}


const lareira = document.getElementById('lareira')

lareira.addEventListener('click',() =>{
    const music = new Audio('Lareira.wav')
    music.play();
})

const chuva = document.getElementById('chuva')

chuva.addEventListener('click', () => {
    const music = new Audio('Chuva.wav')
    music.play();

})

const cafeteria = document.getElementById('cafeteria')

cafeteria.addEventListener('click', () => {
    const music = new Audio('Cafeteria.wav')
    music.play();
})

const floresta = document.getElementById('floresta')

floresta.addEventListener('click', () => {
    const music = new Audio('Floresta.wav')
    music.play();
})


