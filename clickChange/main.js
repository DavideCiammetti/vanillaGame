const mainContainer = document.querySelector('.box-container'); 

// creo la griglia
for (let i = 0; i < 2000; i++) {
    const content = document.createElement('div'); 
    content.classList.add('box');
    mainContainer.appendChild(content); 
}

// prendo le classi dei colori
const yellow = document.querySelector('.yellow-box');
const green = document.querySelector('.green-box');
const blue = document.querySelector('.blue-box');
// classe delle box
const box = document.querySelectorAll('.box');


let num = 0;
// colore giallo
yellow.addEventListener('click', function(){
   num = 1;
   let j = false;
    for(let i = 0; i < 2000; i++){
        let j = false;
        box[i].addEventListener('click', function(){

            box[i].classList.remove('green-box');
            box[i].classList.remove('blue-box');

            j = !j;
            if(j === true){
                box[i].classList.add('yellow-box');
                console.log('yellow');
            }else if(j === false){
                box[i].classList.remove('yellow-box');
            }
    });
    }
});

// colore verde
green.addEventListener('click', function(){
    num = 2; 
    let j = false;

        for(let i = 0; i < 2000; i++){
            let j = false;
            box[i].addEventListener('click', function(){
                box[i].classList.remove('blue-box');
                box[i].classList.remove('yellow-box');
            j = !j;
                if(j === true){
                    box[i].classList.add('green-box');
                    console.log('yellow');
                }else if(j === false){
                    box[i].classList.remove('green-box');
                }
        });
        }
});

// colore blue
blue.addEventListener('click', function(){
    num = 3;  
    let j = false;
    
 
        for(let i = 0; i < 2000; i++){
            let j = false;
            box[i].addEventListener('click', function(){
                box[i].classList.remove('green-box');
                box[i].classList.remove('yellow-box');
            j = !j;
                if(j === true){
                    box[i].classList.add('blue-box');
                    console.log('yellow');
                }else if(j === false){
                    box[i].classList.remove('blue-box');
                }
        });
        }
});








