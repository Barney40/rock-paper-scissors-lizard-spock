//DOM

//For the opening and closing of the rules

const btnRules = document.querySelector('.rules-btn');
const popupRules = document.querySelector('.popup');

//To be used to decide who wins

const CHOICES = [{
        name: "rock",
        beats: "scissors"
    },
    {
        name: "rock",
        beats: "lizard"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "paper",
        beats: "spock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "scissors",
        beats: "lizard"
    },
    {
        name: "lizard",
        beats: "paper"
    },
    {
        name: "lizard",
        beats: "spock"
    },
    {
        name: "spock",
        beats: "scissors"
    },
    {
        name: "spock",
        beats: "rock"
    },
];

//To show what you pick and also what the computer picks

const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll('.results-result');

const resultWinner = document.querySelector(".results-winner");
const resultText = document.querySelector(".result-text");

const playAgain = document.querySelector(".play-again");

const scoreNumber = document.querySelector(".score-number");
let score = 0;


//Game logic
//Will loop through the choice array above and return the choice name that matches
//the one selected

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find(choice => choice.name === choiceName);
        choose(choice);
    });
});

//function to display results and also winner

function choose(choice) {
    const compchoice = compChoose();
    displayResults([choice, compchoice]);
    displayWinner([choice, compchoice]);

}

//To give random choice for computer
function compChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
}

//Loop through the 2 results Div's and add the icon images
//with a delay on the computer's choice

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
                <div class="choice ${results[idx].name:}">
                    <i class="far fa-hand-${results[idx].name:}" alt="${results[idx].name:}"/>
                </div>
            `;
        }, idx * 1000);    
    });
}

function displayWinner(results) {
    setTimeout(() => {
        const userWins = isWinner(results);
        const compWins = isWinner(results.reverse());

        if(userWins) {
            resultText.innerText = "You Win";
            resultDivs[0].classList.toggle("winner");
            keepScore(1);
        }   else if(compWins) {
            resultText.innerText = "You Lose";
            resultDivs[1].classList.toggle("winner");
            keepScore(-1);
        }   else {
            resultText.innerText = "Draw";
        } 
        resultWinner.classList.toggle('hidden');
        resultsDiv.classList.toggle('show-winner');
    }, 1000);
}
 
function isWinner(results) {
    return results[0].beats === results[1].name;
}

function keepScore(point) {
    score += point;
    scoreNumber.innerText = score;
}

//play again button to reset all to original state

playAgain.addEventListener('click', () => {
    gameDiv.classList.toggle('hidden')
    resultsDiv.classList.toggle('hidden')

    resultDivs.forEach(resultDiv => {
        resultDiv.innerHTML = ""
        resultDiv.classList.remove('winner')
    })

    resultText.innerText = "";
    resultWinner.classList.toggle('hidden')
    resultsDiv.classList.toggle('show-winner')    
})

//Show/hide rules when rules/close buttons are clicked

btnRules.addEventListener('click', () => {
    popupRules.classList.toggle('show-popup');
});

