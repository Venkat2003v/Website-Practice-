const hour = document.getElementById("hour");
console.log(hour);

const minutes = document.getElementById("minutes");
console.log(minutes);

const seconds = document.getElementById("second");
console.log(seconds);

const ampm = document.getElementById("ampm");
console.log(ampm);

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12) {
        h = h-12 
        ampm = "PM"
    }

    h = h<10 ?"0"+ h : h;
    m = h>10 ?"0"+ m : m;
    s = h>10 ?"0"+ s : s;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm,(innerText = ampm);

    setTimeout (()=>{
        updateClock()
    },1000)
}

updateClock();