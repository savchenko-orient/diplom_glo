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

const topMenu = () => {
	const menu = document.querySelector('.top-menu'),
		menuItems = menu.querySelectorAll('ul>li>a');

	for (const anchor of menuItems) {
		anchor.addEventListener('click', event => {
			event.preventDefault();

			const blockID = anchor.getAttribute('href');
            
			document.querySelector(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}
};
topMenu();

const slider = () => {
    const sliderItems = document.querySelectorAll('.item');
    
    let slideIndex = 0,
        interval,
        slide = sliderItems[slideIndex];
    
    const prevSlide = () => {
        slide.style.display = 'none';  
    };

    const nextSlide = () => {
        slide.style.display = 'block'; 
    };

    const autoPlay = () => {
        prevSlide();
        slideIndex++;
        if (slideIndex >= sliderItems.length) {
            slideIndex = 0;
        }
        slide = sliderItems[slideIndex];
        nextSlide();
    };
    
    const runSlider = (time = 3000) => {
        interval = setInterval(autoPlay, time);
    };
    runSlider();
};
slider();

const serviseCarousel = () => {
    const container = document.querySelectorAll('.container')[5],
        elements = document.querySelectorAll('.col-sm-6.col-md-4');
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
    
    container.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
        if (target.classList.contains('fancyboxModal')) {
            showModal();
	modalClose.addEventListener('click', closeModal);
	modalOverlay.addEventListener('click', closeModal);
        }
        
    });
    
};
serviseCarousel();


