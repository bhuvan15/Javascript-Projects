let string1= document.getElementById('enter');
string1.oninput = function(){
let output = document.getElementById('out');
let string2 = string1.value;
output.innerHTML = string2.length;
}