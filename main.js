let red = 255;
let green = 255;
let blue = 255;
let percent = 0;
let interval = null;
let intervalRepeat = null;
const WHOLE_ITERATION = 255;

const circle = document.getElementById('circle');

function gradient() {
    if (red === 255 && green === 0, blue === 0) {
        clearInterval(interval);
        setTimeout(() => {
            green = 255;
            blue = 255;
            percent = 0;
            clearInterval(interval);
            interval = setInterval(gradient, 100);
        }, 10 * 1000)
    } else {
        percent = Math.floor(((WHOLE_ITERATION - green) / WHOLE_ITERATION) * 100);
        green--;
        blue--;
        circle.setAttribute(
            'style',
            `background: rgb(${red}, ${green}, ${blue});`
        );
        circle.innerText = `${percent + 1}%`;
    }
}

interval = setInterval(gradient, 100);

const title = document.getElementById('title');
title.addEventListener('click', function () {
    title.setAttribute(
        'style',
        'opacity: 0.2;'
    );
})