document.addEventListener("DOMContentLoaded", function () { //DOM esté completamente cargado antes de acceder a los elementos
    //Se accede al dom para escuchar el evento click
    const modal1 = document.querySelector('#modal-1'); 
    const modal2 = document.querySelector('#modal-2');
    const modal3 = document.querySelector('#modal-3');
    //Close Button
    const closeButton1= document.querySelector('.modal-content--close-1');
    const closeButton2= document.querySelector('.modal-content--close-2');
    const closeButton3= document.querySelector('.modal-content--close-3');
    //Se accede al dom para saber que modal mostrar / ocultar
    let modalAboutMe = document.querySelector('.modal-aboutme');
    let modalEducation = document.querySelector('.modal-education');
    let modalWork = document.querySelector('.modal-work');
    //Modal 1
    modal1.addEventListener('click', () => {
        modalAboutMe.classList.remove('hidden');
        modalAboutMe.classList.add('visible');
    });

    closeButton1.addEventListener('click', () => {
        modalAboutMe.classList.add('hidden');
        modalAboutMe.classList.remove('visible');
    });
    //Modal 2
    modal2.addEventListener('click', () => {
        modalEducation.classList.remove('hidden');
        modalEducation.classList.add('visible');
    });

    closeButton2.addEventListener('click', () => {
        modalEducation.classList.add('hidden');
        modalEducation.classList.remove('visible');
    });
    //Modal 3
    modal3.addEventListener('click', () => {
        modalWork.classList.remove('hidden');
        modalWork.classList.add('visible');
    });

    closeButton3.addEventListener('click', () => {
        modalWork.classList.add('hidden');
        modalWork.classList.remove('visible');
    });
});
