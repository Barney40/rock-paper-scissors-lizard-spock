//DOM

//For the opening and closing of the rules

const btnRules = document.querySelector('.rules-btn')
const btnClose = document.querySelector('.close-btn')
const popupRules = document.querySelector('.popup')

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
]

//Show/hide rules when rules/close buttons are clicked

btnRules.addEventListener('click', () => {
    popupRules.classList.toggle('show-popup')
});

btnClose.addEventListener('click', () => {
    popupRules.classList.toggle('show-popup')
});