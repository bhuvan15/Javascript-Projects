//Selectors
const name = document.getElementById('inputName');
const btn = document.querySelector('.btn');
const story = document.querySelector('.para');

//Randon Function
function randomArrayFuntion(array){
    let randomArray = Math.floor(Math.random() * array.length);
    return array[randomArray];
}
let storyText = 'It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

btn.addEventListener('click', finalStory);
function finalStory(){
let newStory = storyText;
let insertA = randomArrayFuntion(insertX);
let insertB = randomArrayFuntion(insertY);
let insertC = randomArrayFuntion(insertZ);

newStory = newStory.replace('insertx',insertA);
newStory = newStory.replace('insertx',insertA);
newStory = newStory.replace('inserty',insertB);
newStory = newStory.replace('insertz',insertC);

if(name.value !==''){
    const customName = name.value;
     newStory = newStory.replace('Bob',customName);
}
else{
    alert("enter name please");
    
}
if(document.getElementById('UK').checked){
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
}
story.textContent = newStory;
story.style.visibility = "visible";

}