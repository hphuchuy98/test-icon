const toggle = document.querySelector(".container-main-vocabulary-tooltip");

document.addEventListener("keydown", e => {
    e.preventDefault();
    if (toggle.classList.contains("opacity-1") && e.key.toLocaleLowerCase() === "x") {
        document.getElementById('synonym').classList.remove('opacity-1')
    } else {
        document.getElementById('synonym').classList.add('opacity-1')

    }
})


let iconbook = document.getElementById('dvobjsynonym');
let showTooltip = document.querySelector('.container-main-vocabulary-tooltip');

// Biến để lưu trữ trạng thái chuột
let isMouseInside = false;

iconbook.addEventListener("mouseenter", () => {
    isMouseInside = true;
});

  iconbook.addEventListener("mouseleave", () => {
    isMouseInside = false;
    showTooltip.style.opacity = 0;
  });

function show_Tooltip() {
    showTooltip.style.opacity = 1;
    showTooltip.style.top = '52%';

}

iconbook.addEventListener("mouseover", show_Tooltip)