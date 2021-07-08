'use strict';

let number = Math.trunc(Math.random()*20 + 1);

const display = (message) => document.querySelector('.message').textContent = message;

document.querySelector('.check').addEventListener('click',
function (){
    
    let guess = Number(document.querySelector('.guess').value);
    let high = Number(document.querySelector('.highscore').textContent);
    let score = Number(document.querySelector('.score').textContent);

    if(!guess){display('🙄 please input something!');}

    if(score>1){
        if(guess>number){display('↘ its lower than that');}
        
        if(guess<number){display('↗ its higher than that');}

        if(guess == number){
            display('🎉 correct!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = number;
            document.querySelector('.number').style.width = '60rem';
            if(score>high){document.querySelector('.highscore').textContent = score;}
            document.querySelector('.score').textContent = score = Number(document.querySelector('.score').textContent) + 1;
        }
        document.querySelector('.score').textContent = score = Number(document.querySelector('.score').textContent) - 1;
    }
    else{
        display('You lost the game!');
        document.querySelector('.score').textContent = 0;
    }   

});

document.querySelector('.again').addEventListener('click', function(){
    number = Math.trunc(Math.random()*20 + 1);
    document.querySelector('.score').textContent = 20;
    display('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});