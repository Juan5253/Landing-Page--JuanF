document.addEventListener("DOMContentLoaded", function () { //DOM esté completamente cargado antes de acceder a los elementos
    const button1 = document.querySelector('#button1');
    const closeButton = document.querySelector('.modal-content--close');
    let modal = document.querySelector('.modal');

    button1.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    });

    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    });
});
