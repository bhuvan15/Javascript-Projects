const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector('button');

function random(){
    return Math.floor(Math.random()* hexValues.length);
}

btn.onclick = function(){
   let hex = '#'
    for(let i = 0; i < 6; i++){
       hex += hexValues[random()];
    }
    document.body.style.backgroundColor = hex;
    let color = document.getElementById("Color").textContent = hex;
}
