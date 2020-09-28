const h1 = document.querySelector('h1');
const select = document.querySelector('select');

select.onchange = change;
function change(){
    const choice = select.value;
    if(choice === "black"){
        h1.style.color = "white";
        document.body.style.backgroundColor = "black";
    }
    if(choice === "purple"){
        h1.style.color = "white";
        document.body.style.backgroundColor = "purple";
    }
    if(choice === "green"){
        h1.style.color = "white";
        document.body.style.backgroundColor = "green";
    }
    if(choice === "yellow"){
        h1.style.color = "grey";
        document.body.style.backgroundColor = "yellow";
    }
}
document.body.style.backgroundColor = "white";
h1.style.color = "black"

    