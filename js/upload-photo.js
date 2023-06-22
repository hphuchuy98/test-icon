const imgDiv = document.querySelector('.img-info__ava');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadbtn = document.querySelector('#uploadbtn');

file.addEventListener('change', function() {
    const chosedfile = this.files[0];
    if(chosedfile) {
        const reader = new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        })
        reader.readAsDataURL(chosedfile);
    }
})