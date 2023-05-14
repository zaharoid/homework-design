const refs = {
    button: document.querySelector('.js-button'),
    checkbox: document.querySelector('.checkbox'),
}
// console.log(refs.button);

refs.checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange (event) {
refs.button.disabled = !event.currentTarget.checked
}

