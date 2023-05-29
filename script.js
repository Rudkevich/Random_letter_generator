let container =  document.querySelector('.main');
let darkCollor = document.querySelector('.dark-change');
let btn = document.querySelector('.btn');
let containerGen = document.querySelector('.conteiner_generation');

darkCollor.addEventListener('click', ()=>{
    darkCollor.classList.toggle('active');
    container.classList.toggle('active');
    btn.classList.toggle('active');
    containerGen.classList.toggle('active');
})

let letter = ['A','Ā','B','C','Č','D','E','Ē','F','G','Ģ','H','I','Ī','J','K','Ķ','L','Ļ','M','N','Ņ','O','P','R','S','Š','T','U','Ū','V','Z','Ž'];
let letterGeneration = document.querySelector('.generation_letter');
let number = document.querySelector('.subtitle_number');
let counter = 0;

btn.addEventListener('click',()=>{
    letterGeneration.innerHTML = letter[Math.floor(Math.random() * letter.length)];
    counter ++;
    number.innerHTML = counter;
})


