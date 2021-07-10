//DOM

//For the opening and closing of the rules

let btnRules = document.querySelector('.rules-btn');
let btnClose = document.querySelector('.close-btn');
let popupRules = document.querySelector('.popup');

//To be used to decide who wins

let CHOICES = [{
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

let choiceButtons = document.querySelectorAll('.choice-btn');
let gameDiv = document.querySelector('.game');
let resultsDiv = document.querySelector('.results');
let resultDivs = document.querySelectorAll('.results-result');

//Game logic
//Will loop through the choice array above and return the choice name that matches
//the one selected

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        let choiceName = button.dataset.choice;
        let choice = CHOICES.find(choice => choice.name === choiceName);
        choose(choice);
    });
});

//Create function for choose and display both user and computer choice

function choose(choice) {
    let compchoice = compChoose();
    displayResults([choice, compchoice]);
}

//To give random choice for computer
function compChoose() {
    let rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
}

//Loop through the 2 results Div's and add the icon images
//with a delay on the computer's choice

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
                <div class="choice ${results[idx].name}">
                    <i class="far fa-hand-${results[idx].name}" alt="${results[idx].name}"/>
                </div>
            `;
        }, idx * 1000);    
    });
}

//Show/hide rules when rules/close buttons are clicked

btnRules.addEventListener('click', () => {
    popupRules.classList.toggle('show-popup');
});

btnClose.addEventListener('click', () => {
    popupRules.classList.toggle('show-popup');
});