const mainContainer = document.querySelector('.box-container'); 

// creo la griglia
for (let i = 0; i < 20; i++) {
    const content = document.createElement('div'); 
    content.classList.add('box');
    mainContainer.appendChild(content); 
}

// prendo le classi dei colori
const yellow = document.querySelector('.yellow-box');
const green = document.querySelector('.green-box');
const blue = document.querySelector('.blue-box');
const black = document.querySelector('.black-box');
// classe delle box
const box = document.querySelectorAll('.box');


let num = 0;
// colore giallo
yellow.addEventListener('click', function(){

    for(let i = 0; i < 20; i++){
        box[i].addEventListener('mouseover', function(){

            box[i].classList.remove('green-box');
            box[i].classList.remove('blue-box');
            box[i].classList.remove('black-box');

            box[i].classList.add('yellow-box');
    });
    }
});

// colore verde
green.addEventListener('click', function(){

        for(let i = 0; i < 20; i++){
            box[i].addEventListener('mouseover', function(){

                box[i].classList.remove('blue-box');
                box[i].classList.remove('yellow-box');
                box[i].classList.remove('black-box');

                box[i].classList.add('green-box');
        });
        }
});

// colore blue
blue.addEventListener('click', function(){

        for(let i = 0; i < 20; i++){
            box[i].addEventListener('mouseover', function(){

                box[i].classList.remove('green-box');
                box[i].classList.remove('yellow-box');
                box[i].classList.remove('black-box');

                box[i].classList.add('blue-box');
                   
        });
        }
});

// colore black
black.addEventListener('click', function(){
        for(let i = 0; i < 20; i++){
            box[i].addEventListener('mouseover', function(){
                box[i].classList.remove('green-box');
                box[i].classList.remove('yellow-box');
                box[i].classList.remove('blue-box');

                box[i].classList.add('black-box');
                   
        });
        }
});



