"use strict";

const help = document.getElementById('help').getElementsByClassName('help')[0]
const discription = document.getElementById('discription');

help.addEventListener('click', function () {
    discription.classList.toggle('hidden')
})

console.log(help);