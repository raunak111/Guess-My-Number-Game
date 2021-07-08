'use strict';

const number = Math.trunc(Math.random()*20 + 1);

document.querySelector('.check').addEventListener('click',
function (){
    
    const guess = Number(document.querySelector('.guess').value);
    let high = Number(document.querySelector('.highscore').value);
    let score = Number(document.querySelector('.score').textContent);

    console.log("button was clicked");

    if(!guess){document.querySelector('.message').textContent = '🙄 please input something!';}

    if(score>1){
        if(guess>number){document.querySelector('.message').textContent = '↘ its lower than that';}
        
        if(guess<number){document.querySelector('.message').textContent = '↗ its higher than that';}

        if(guess == number){
            document.querySelector('.message').textContent = '🎉 correct!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = number;
            document.querySelector('.number').style.width = '60rem';
            if(score>high){document.querySelector('.highscore').textContent = score;}
        }
        document.querySelector('.score').textContent = score = Number(document.querySelector('.score').textContent) - 1;
    }
    else{
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
    }   

});

console.log(number);