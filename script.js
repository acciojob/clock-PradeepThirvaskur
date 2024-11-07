setInterval(() => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; // months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    const d1 = document.querySelector("#date");
    d1.innerText = `${month}/${day}/${year}`;

    const t1 = document.querySelector("#time");
    t1.innerText = `${hour}:${minutes}:${seconds}`;
}, 1000);