        let input;
        let a;
        let all = document.querySelector('body');

        let answer = document.querySelector(".answer");
        
        let rock = document.querySelector('#button1');
        let paper = document.querySelector('#button2');
        let scissors = document.querySelector('#button3');

        let button = document.querySelectorAll('button');
        let result = document.querySelector('.result');

        let count = 0;

        let winner;
        let loser;

        let compScore = 0;
        let userScore = 0;

        let game = 0;
        

        button.forEach(button => button.addEventListener('click', () => {
            input = button.textContent;
            result.textContent = (comparison(computerAnswer(), input));

            count++;
            console.log(count + `, computer; ${compScore}, user: ${userScore}`);
            answer.textContent = (`Computer score: ${compScore} \n User score:${userScore}`);

            if(count === 5) {
                answer.textContent = (`Computer score: ${compScore} \n User score:${userScore}`);
                if (compScore > userScore) {
                    result.textContent = (`Computer has won the game!`);
                    result.style.backgroundColor = "red";
                }else if (compScore < userScore) {
                    result.textContent = (`User has won the game!`);
                    result.style.backgroundColor = "green";
                }else {
                    result.textContent = (`Tie!`);
                    result.style.backgroundColor = "yellow";
                }
                game++;
                

                const newGame = document.createElement('button');
                newGame.textContent = 'new game';
                all.appendChild(newGame);
                newGame.addEventListener('click', () => {
                    count = 0;
                    compScore = 0;
                    userScore = 0;
                    all.removeChild(newGame);
                    result.style.backgroundColor = "white";
                    result.textContent = "";
                });
                
                answer.textContent = (`Computer score: ${compScore} \n User score:${userScore}`);
            }
        }));

        function computerAnswer() {
            let x = Math.ceil(Math.random()*3);
            if(x == 1)
                a = 'rock';
            else if(x == 2) 
                a = 'paper';
             else
                a = 'scissors';
            return a;
        }

        let m = "Computer wins!";
        let n = "User wins!";
        let o = 'Tie!';
        let p = 'Invalid input';


        function comparison (compAnswer, userAnswer) {
            

            if (userAnswer == compAnswer){
                console.log(o);
                return(o);
                }
            else if (userAnswer =='rock')
                if (compAnswer == 'scissors'){
                    console.log(n);
                    winner = userAnswer;
                    loser = compAnswer;
                    userScore++;
                    return(`${n} ${winner} beats ${loser}.`);
                }
                else {
                    console.log(m);
                    winner = compAnswer;
                    loser = userAnswer;
                    compScore++;
                    return(`${m} ${winner} beats ${loser}.`);
                }
            else if (userAnswer == 'scissors')
                 if (compAnswer == 'paper'){
                    console.log(n);
                    winner = userAnswer;
                    loser = compAnswer;
                    userScore++;
                    return(`${n} ${winner} beats ${loser}.`);
                    }
                else {
                    console.log(m);
                    winner = compAnswer;
                    loser = userAnswer;
                    compScore++;
                    return(`${m} ${winner} beats ${loser}.`);                    
                    }
            else if (userAnswer == 'paper') 
                 if (compAnswer == 'rock'){
                     console.log(n);
                     winner = userAnswer;
                     loser = compAnswer;
                     userScore++;
                     return(`${n} ${winner} beats ${loser}.`);                    
                 }
                else {
                    console.log(m);
                    winner = compAnswer;
                    loser = userAnswer;
                    compScore++;
                    return(`${m} ${winner} beats ${loser}.`);                   
                }
            else {
                console.log(p);
                return(p);
            }
        } 

     
            

        answer.textContent = (`Computer score: ${compScore} \n User score:${userScore}`);
        
