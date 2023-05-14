const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop')
}

refs.openModalBtn.addEventListener('click', onOpenModal);

refs.closeModalBtn.addEventListener('click', onCloseModal);

refs.backdrop.addEventListener('click', onBackdropClick);



function onOpenModal () {
    window.addEventListener('keydown', onPressEscClick)
   document.body.classList.add('show-modal')
};
function onCloseModal () {
    window.removeEventListener('keydown', onPressEscClick)
    document.body.classList.remove('show-modal')
}
function onPressEscClick(event) {
    if(event.code === 'Escape'){
    onCloseModal()
    }
};

function onBackdropClick(event) {
    
    if (event.currentTarget === event.target) {
         onCloseModal()
    }
}

