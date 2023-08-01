let character = document.getElementById('character');
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'));
let ground = document.getElementById('ground');
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue('bottom'));
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue('height'));
let isJumping = false;
let upTime;
let downTime;

function jump(){
    if(isJumping) return;
    upTime = setInterval(() =>{
        characterBottom += 10;
        character.style.bottom = characterBottom + 'px';  
        isJumping = true;
    }, 20);
}

function control(e){
    if(e.key == 'ArrowUp' || e.key == ' '){
        jump();
    }
}

document.addEventListener('keydown', control);