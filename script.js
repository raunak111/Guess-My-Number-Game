'use strict';

let number = Math.trunc(Math.random()*20 + 1);

document.querySelector('.check').addEventListener('click',
function (){
    
    let guess = Number(document.querySelector('.guess').value);
    let high = Number(document.querySelector('.highscore').textContent);
    let score = Number(document.querySelector('.score').textContent);

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
            document.querySelector('.score').textContent = score = Number(document.querySelector('.score').textContent) + 1;
        }
        document.querySelector('.score').textContent = score = Number(document.querySelector('.score').textContent) - 1;
    }
    else{
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
    }   

});

document.querySelector('.again').addEventListener('click', function(){
    number = Math.trunc(Math.random()*20 + 1);
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});