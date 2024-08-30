let intervalId;
let timeLeft;

document.getElementById('start-btn').addEventListener('click', startCountdown);
document.getElementById('reset-btn').addEventListener('click', resetCountdown);

function startCountdown() {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert('Please enter valid numbers');
        return;
    }

    timeLeft = hours * 3600 + minutes * 60 + seconds;

    document.getElementById('start-btn').disabled = true;
    document.getElementById('reset-btn').disabled = false;

    intervalId = setInterval(countdown, 1000);
}

function countdown() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    document.getElementById('timer').innerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(intervalId);
        document.getElementById('timer').innerText = 'Time\'s up!';
        document.getElementById('start-btn').disabled = false;
        document.getElementById('reset-btn').disabled = true;
    }
}

function resetCountdown() {
    clearInterval(intervalId);
    document.getElementById('timer').innerText = '00:00:00';
    document.getElementById('start-btn').disabled = false;
    document.getElementById('reset-btn').disabled = true;
}

function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}