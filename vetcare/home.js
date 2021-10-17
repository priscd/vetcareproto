const crsImages = document.querySelector('.images');
const crsButtons = document.querySelectorAll('.crs_button');
const totalImg = document.querySelectorAll('.images img').length;

let i = 1;
let translateX = 0;

crsButtons.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.id == 'prev'){
            if(i != 1){
                i--;
                translateX += 300;
            }
        }else{
            if(i != totalImg){
                i++;
                translateX -= 300;
            }
        }

        crsImages.style.transform = 'translateX(${translateX}px)'
    });
});
