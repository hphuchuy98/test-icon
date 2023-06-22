const btnShowLss = document.querySelectorAll('.js-show-lesson');
const modalLs = document.querySelector('.part-detail-course__lesson');
const closeLs = document.querySelector('.part-detail-course__drop-button');

console.log(modalLs)

function showLesson() {
    modalLs.classList.add('open');
}

function hideLesson() {
    modalLs.classList.remove('open');
}

for (const btnShowLs of btnShowLss ) {
    btnShowLs.addEventListener('click', showLesson)
}

closeLs.addEventListener('click', hideLesson)