const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
/*const button = document.querySelector("button");
function randomColor(){
    let color = Math.floor(Math.random()*256);
    return color;
}
button.onclick = function(){
    const background = 'rgb( ' + randomColor + ','  + randomColor + ',' + randomColor + ')';
    document.body.style.backgroundColor = background;
}*/