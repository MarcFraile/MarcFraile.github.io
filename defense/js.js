const MS_IN_A_DAY    = 24 * 60 * 60 * 1000;
const MS_IN_AN_HOUR  =      60 * 60 * 1000;
const MS_IN_A_MINUTE =           60 * 1000;
const MS_IN_A_SECOND =                1000;

const splitMillis = (millis) => {
    const days  = Math.floor(millis / MS_IN_A_DAY);
    millis -= days * MS_IN_A_DAY;

    const hours = Math.floor(millis / MS_IN_AN_HOUR);
    millis -= hours * MS_IN_AN_HOUR;

    const minutes = Math.floor(millis / MS_IN_A_MINUTE);
    millis -= minutes * MS_IN_A_MINUTE;

    const seconds = Math.floor(millis / MS_IN_A_SECOND);
    millis -= hours * MS_IN_AN_HOUR;

    return [ days, hours, minutes, seconds, millis ];
};

window.onload = () => {
    const timerDiv = document.getElementById("timer");

    const updateTime = () => {
        const defenseDate = new Date("November 22, 2024 09:15:00")
        const now = new Date();

        const totalRemainingMs = defenseDate - now;
        [ days, hours, minutes, seconds, _ ] = splitMillis(totalRemainingMs);

        timerDiv.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
    };

    updateTime();
    setInterval(updateTime, 1000);
};
