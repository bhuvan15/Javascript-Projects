//Selectors
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const count = document.getElementById("counter");
var c = 0;
increase.addEventListener('click',function(){
  c++;
  count.textContent = c;
  if(c==0){
    count.style.color = 'black';
}
if(c>0){
    count.style.color = 'green';
}
if(c<0){
    count.style.color = 'tomato';
}
})
decrease.addEventListener('click',function(){
    c--;
    count.textContent = c;
    if(c==0){
        count.style.color = 'black';
    }
    if(c>0){
        count.style.color = 'green';
  }
    if(c<0){
        count.style.color = 'tomato';
    }
  })
  reset.addEventListener('click',function(){
    c = 0;
    count.textContent = c;
    if(c==0){
        count.style.color = 'black';
    }
    if(c>0){
        count.style.color = 'green';
  }
    if(c<0){
        count.style.color = 'tomato';
    }
  })
  