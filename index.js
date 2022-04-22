function getSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString ('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const timerHora = document.querySelector('.timer-hora');
const iniciar = document.querySelector('.btn-1');
const pausar = document.querySelector('.btn-2');
const zerar = document.querySelector('.btn-3');
const espaco = document.querySelector('#espaco')
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
    segundos++;
    timerHora.innerHTML = getSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(e){
    clearInterval(timer);
    iniciaRelogio();
    espaco.classList.remove('red');
    espaco.classList.remove('blue');
    espaco.classList.add('gren');    
});

pausar.addEventListener('click', function(e){
    clearInterval(timer);
    espaco.classList.remove('red');
    espaco.classList.remove('gren');
    espaco.classList.add('blue');
});

zerar.addEventListener('click', function(e){
    clearInterval(timer);
    timerHora.innerHTML = '00:00:00';
    segundos = 0;
    espaco.classList.remove('blue');
    espaco.classList.remove('gren');
    espaco.classList.add('red');
});
