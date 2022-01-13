
"use strict";

const banner = document.getElementsByClassName("banner")[0];
const blocks = document.getElementsByClassName("blocks");

for(let i = 1; i < 400; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    const duration = Math.random() * 10;
    blocks[i].style.animationDuration = 1 + duration + 's';
    // blocks[i].style.animationDelay = `${i * 0.05}s`;
    blocks[i].style.animationDelay = duration + 's';
}

setTimeout(() => {
    location.reload();
}, 23000);