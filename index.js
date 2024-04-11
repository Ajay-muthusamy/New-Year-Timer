function CountNewyear() {

    const date = document.querySelector("#Days");
    const hour = document.querySelector("#hour");
    const minutes = document.querySelector("#Minutes");
    const second = document.querySelector("#Seconds");

    const currentyear = new Date().getFullYear();
    const newyear = new Date(`January 1 ${currentyear + 1} 00:00:00`);
    const currentDate = new Date();
    const diff = newyear - currentDate;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    date.innerHTML = d<10?"0"+d:d;
    const h = Math.floor((diff / 1000 / 60 / 60) % 24)
    hour.innerHTML = h<10? "0"+h:h;
    const m = Math.floor((diff / 1000 / 60) % 60)
    minutes.innerHTML = m<10? "0"+m:m;
    const s = Math.floor((diff / 1000) % 60)
    second.innerHTML = s<10? "0"+s:s;
}

setInterval(CountNewyear, 1000);