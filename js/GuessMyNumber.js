'use strict'
let randomNumber=Math.trunc(Math.random()*20)+1;
let score=document.querySelector('.score').textContent;
let highScore=Number(document.querySelector('.highScore').textContent);
// When the user click the check button.
document.querySelector('.check').addEventListener('click',function(){
    let guessedNumber=document.querySelector('.number').value;
    /*  everytime the user re-enter a number the input's bg will be white by deleting the 2 css classes
    of red and green color. */
    document.querySelector('.number').addEventListener('input',function(){
        document.querySelector('.number').classList.remove('true-number','false-number');
    })
    if(score-guessedNumber<=0){
     /*  when the score is equale to zero a 'GAME OVER' message will be printed
     (the user have no more score to calculate) and the 'check' button will be hidden. */
        document.querySelector('.message').textContent='GAME OVER';
        document.querySelector('.score').textContent='0';
        document.querySelector('.check').classList.add('hide');
    }else{
        // if the score is over than 0.
        if(guessedNumber<1 || guessedNumber>20){
            // if the user enter a number which is not in [1..20] an ERROR message will be printed.
            document.querySelector('.message').textContent='Please enter a number between 1 and 20 .';
        }else if(guessedNumber>randomNumber){
            /* if the user enter a number > the random number, a 'Too high' message will be printed,
               that wrong number will be subtracted from the score and the input's bg will be red (wrong) */
            score-=guessedNumber;
            document.querySelector('.score').textContent=score;
            document.querySelector('.message').textContent='Too high..';
            document.querySelector('.number').classList.add('false-number');
        }else if(guessedNumber<randomNumber){
             /* if the user enter a number > the random number, a 'Too high' message will be printed,
                that wrong number will be subtracted from the score and the input's bg will be red (wrong) */
            score-=guessedNumber;
            document.querySelector('.score').textContent=score;
            document.querySelector('.message').textContent='Too low';
            document.querySelector('.number').classList.add('false-number');
        }
            /* if the user enter the right number (number=random number ), a 'Bravo' message will be printed,
               the 'check' button will be hidden and the input's bg will be green (correct) */
        else if(guessedNumber==randomNumber){
            document.querySelector('.message').textContent='Bravoooooooo';
            document.querySelector('.check').classList.add('hide');
            document.querySelector('.number').classList.add('true-number');
            /* everytime the user enter the correct number, the high score will get the value of the current score
               only when the current score is over than high score (current score > high score) */
            if(score>highScore){
                document.querySelector('.highScore').textContent=score;
            }
        }
    }
})
/* everytime the user click th 'again' button, this funtion will reset everything, score will be 100, a new random
   number will be generated and the 'check' button will be displayed again*/
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').value=null;
    document.querySelector('.score').textContent='100';
    document.querySelector('.message').textContent='Guess the number';
    document.querySelector('.number').classList.remove('true-number','false-number');
    randomNumber=Math.trunc(Math.random()*20)+1;
    score=document.querySelector('.score').textContent;
    highScore=Number(document.querySelector('.highScore').textContent);
    document.querySelector('.check').classList.remove('hide');
})