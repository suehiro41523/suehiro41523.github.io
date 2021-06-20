"use strict";

const help = document.getElementById('help').getElementsByClassName('help')[0]
const discription = document.getElementById('discription');
const background = document.getElementsByClassName('background')[0]

help.addEventListener('click', function () {
    discription.classList.toggle('hidden');
    background.classList.toggle('hidden');
})


document.addEventListener('click', (e) => {
    console.log(e.path);
    if (e.path.includes(discription) || e.path.includes(help)) {
        console.log(discription.className.includes('hidden'));
    }
    else {
        discription.classList.add('hidden')
        background.classList.add('hidden')
    }
})



