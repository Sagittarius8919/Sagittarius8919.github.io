let red = 255;
let green = 255;
let blue = 255;
let percent = 0;
let interval = null;
let intervalRepeat = null;
const WHOLE_ITERATION = 255;
const CURRENT_POSITION = 235;
const START_DATE = {
    day: 11,
    month: 11,
    year: 2018,
};
const START_YEAR_DATE = {
    day: 1,
    month: 1,
};
const END_YEAR_DATE = {
    day: 31,
    month: 12,
};
const DAYS_IN_MONTH = 30;
const DAYS_IN_YEAR = 365;

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
});

function getTodaysDate() {
    const now = new Date().toLocaleDateString();
    const day = Number(now.slice(0, 2));
    const month = Number(now.slice(3, 5));
    const year = Number(now.slice(6));
    return {
        day,
        month,
        year,
    };
}

(function getCurrentPosition() {
    let currGreen, currBlue, duration;
    const firstDuration = DAYS_IN_MONTH - start.day;
    const nextDuration = today.day;
    const start = JSON.parse(JSON.stringify(START_DATE));
    const today = getTodaysDate();
    if (start.year === today.year) {
        if (start.month === today.month) {
            duration = today.day - start.day;
        } else if (start.month < today.month) {
            let numberOfFullMonths = today.month - start.month > 1 ? (today.month - start.month - 1) : 0;
            duration = firstDuration + numberOfFullMonths * DAYS_IN_MONTH + nextDuration; 
        }
    } else if (start.year < today.year) {
        if (START_YEAR_DATE.month === today.month) {
            duration = today.day;
        } else if (START_YEAR_DATE.month < today.month) {
            let numberOfFullYears = today.year - start.year > 1 ? (today.month - start.month - 1) : 0;
            let numberOfFullMonthsInPrevYear = END_YEAR_DATE.month - start.month;
            let numberOfFullMonthsInCurrYear = today.month - START_YEAR_DATE.month;
            const totalNumberOfFullMonths = numberOfFullMonthsInPrevYear + numberOfFullMonthsInCurrYear;
            duration = firstDuration + numberOfFullYears * DAYS_IN_YEAR + totalNumberOfFullMonths * DAYS_IN_MONTH + nextDuration;
        }
    }

    currGreen = CURRENT_POSITION - duration;
    currBlue = CURRENT_POSITION - duration;
    const currentCircle = document.getElementById('current-position-color');
    currentCircle.setAttribute(
        'style',
        `background: rgb(255, ${currGreen}, ${currBlue});`
    );
})();

const todayTitle = document.getElementById('date');
const date = document.createElement('DIV');
const now = new Date().toLocaleDateString();
date.innerText = now;
date.setAttribute(
    'style',
    'text-align: center;'
);
todayTitle.appendChild(date);