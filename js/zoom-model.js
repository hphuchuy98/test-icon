const openZooms = document.querySelectorAll('.js-open-zoom');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');


function showZoom_grammar () {
    modal.classList.add('open')
}

function hideZoom_grammar () {
    modal.classList.remove('open');
}

for (const openZoom of openZooms ) {
    openZoom.addEventListener('click', showZoom_grammar)
}

modalClose.addEventListener('click', hideZoom_grammar)

// modal.addEventListener('click', hideZoom_grammar)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation() 
});
