//DOM

const btnRules = document.querySelector('.rules-btn')
const btnClose = document.querySelector('.close-btn')
const popupRules = document.querySelector('.popup')

//Show/hide rules when rules/close buttons are clicked

 btnRules.addEventListener('click', () => {
     popupRules.classList.toggle('show-popup')
 });

 btnClose.addEventListener('click', () => {
    popupRules.classList.toggle('show-popup')
});


