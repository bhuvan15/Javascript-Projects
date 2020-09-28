//Selectors
const select = document.querySelector('select');
const head = document.querySelector('h1');
const list = document.querySelector('ul');
select.onchange = change;
function change(){
        const choice = select.value;
        let days = undefined;
        if(choice === "February"){
             days = 28;
        }
        else if(choice === "January"|| choice==="March" || choice === "May" ||  choice === "July" || choice === "August" || choice === "October"||choice==="December"){
              days = 31;
        }   
        else{
             days = 30;
        }
        calender(days, choice);
}
function calender(days, choice){
    head.textContent = choice;
    list.innerHTML='';
    for(let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
        }
    
}
calender(31,'January');
