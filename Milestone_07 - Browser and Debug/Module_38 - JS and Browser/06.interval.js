let seconds = 0;

const time = setInterval(() => {
    seconds++;
    console.log(seconds);
    if (seconds >= 10) {
        clearInterval(time);
    }
},1000)