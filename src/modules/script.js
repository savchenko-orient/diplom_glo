'use strict';
const modalWindow = () => {
    
    const modalCallback = document.querySelector('#callback'),
        modalClose = document.querySelector('.modal-close'),
        modalOverlay = document.querySelector('.modal-overlay'),
        callbackBtn = document.querySelectorAll('.callback-btn')[1];

    const showModal = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    };

    const closeModal = () => {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    callbackBtn.addEventListener('click', showModal);
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    
    
};

modalWindow();