

// function playSound_vi(audioName) {
//     document.getElementById('sound_1').play();
// }


// function playSound_en(audioName) {
//     document.getElementById('sound_2').play();
// }




// const showSound = document.querySelector(".js-show-sound-vn");
// const showSound2 = document.querySelector(".js-show-sound-en");

// function playSound_vi(audioName) {
//     document.addEventListener("click", e => {
//         // e.preventDefault();
//         if(document.getElementById('audio-vn') && showSound.classList.contains("opacity-1")){
//             document.getElementById('audio-vn').classList.remove('opacity-1');
//         } else{
//             document.getElementById('audio-vn').classList.add('opacity-1');
//             document.getElementById('sound_1').play();
//         }
//     })
// }

// function playSound_en(audioName) {
//     document.addEventListener("click", e => {
//         // e.preventDefault();
//         if(document.getElementById('audio-en') && showSound.classList.contains("opacity-1")){
//             document.getElementById('audio-en').classList.remove('opacity-1');
//         } else{
//             document.getElementById('audio-en').classList.add('opacity-1');
//             document.getElementById('sound_2').play();
//         }
//     })
// }
const toggle_en = document.querySelector('.toggle-en')


function playSound_en() {
        if (toggle_en.classList.contains("opacity-1")) {
            document.getElementById('audio-en').classList.remove("opacity-1")
        } else {
            document.getElementById('audio-en').classList.add("opacity-1");
            document.getElementById('sound_2').play();

        }
}

const toggle_vi = document.querySelector('.toggle-vi')

function playSound_vi() {
        if (toggle_vi.classList.contains("opacity-1")) {
            document.getElementById('audio-vn').classList.remove("opacity-1")
        } else {
            document.getElementById('audio-vn').classList.add("opacity-1");
            document.getElementById('sound_1').play();

        }
}