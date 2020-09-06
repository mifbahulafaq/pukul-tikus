const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const score = document.querySelector('.score');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let skore;

function random(tanah){
    const tRandom = tanah[Math.floor(Math.random() * tanah.length)];
    if(tanahSebelumnya==tRandom){
        random(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}
//floor untuk membulatkan kebawah
//round
//ceil
function randomWaktu(min,max){
    //jadi ini rumus : menentukan bilangan random dari berapa sampai berapa
    return Math.round(Math.random() * (max - min) + min);
}
function munculkanTikus(){
    const tanahR = random(tanah);
    const wRandom = randomWaktu(300,1500);
    
    // tanah.forEach(e=>{
    //     if(e.getAttribute('class')==='tanah muncul'){
    //         e.classList.remove('muncul');
    //     }
    // })
    tanahR.classList.add('muncul');
    setTimeout(function(){
    tanahR.classList.remove('muncul');
    if(!selesai){
        munculkanTikus();
    }
    
    },wRandom);
    // setInterval(() => {
//     munculkanTikus();
// }, 400);
    
    
}
function mulai(){
    skore=0;
    selesai = false;
    munculkanTikus()
    setTimeout(function(){
        selesai = true;
    },10000)
    
}

function pukul(){
    skore++;
    score.textContent = skore;
    pop.play();
    this.classList.remove('muncul');
}

tikus.forEach(function(t){
    t.addEventListener('click',pukul);
});
