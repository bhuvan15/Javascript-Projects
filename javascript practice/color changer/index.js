/*//Selectors
const color = document.getElementById('color');
const btn = document.querySelector('button');

//Functions

function random(number){
 return Math.floor(Math.random()*(number+1));
}
//Events
btn.onclick = function(){
    const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = randomColor;
}
*/

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
  var color = document.querySelector('span').textContent = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

}