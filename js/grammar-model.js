const openVideos = document.querySelectorAll('.js-icon-question');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');


function showVideo_grammar () {
    modal.classList.add('open')
}

function hideVideo_grammar () {
    modal.classList.remove('open');
}

for (const openVideo of openVideos ) {
    openVideo.addEventListener('click', showVideo_grammar)
}

modalClose.addEventListener('click', hideVideo_grammar)

modal.addEventListener('click', hideVideo_grammar)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation() 
})

