const output = document.querySelector('div');

for(let i = 10 ; i>=0 ; i--){
  
      let para = document.createElement('p');
      if(i==10){
          para.textContent = 'Countdown ' + i;
      }
      else if(i==0){
          para.textContent = "blast off";
      }
      else{
          para.textContent = i;
      }
      output.appendChild(para);
  }
