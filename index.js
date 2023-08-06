//Setting variables for use 
const textArea = document.getElementById("textarea")
const getMonsterButtonInput = document.getElementsByClassName("creatures")
const getUrbanLegendsButtonInput = document.getElementsByClassName("")
const displayText = document.getElementsByClassName("textarea")

//<p tags>
const pCreatureName = document.getElementById('creaturename')
//Function to fetch ALL monster data
function generateCreatures(){
    //fetching all the quote data 
   fetch('http://localhost:3000/supernaturalCreatures/')
   .then(response => response.json()) 
   .then(creatureData => creatureData.forEach(creature => displayAllMonsters(creature)))
    //generateCreatureOptions(creatures.supernaturalCreatures))
   .catch()
}

generateCreatures();
function displayAllMonsters(creature){
    //bracket notation to access data
    //issue is how to access the array to display all monsters
    pCreatureName.innerText = `Creature: ${creature.name}`
    
    

}
//Generating randomized Monster entries

function generateCreatureOptions(creatures){
//Need to access the individual properties of the returned array of objects
    console.log(creatures);
}
//Generating randomized urbanLegends entries


const generateUrbanLegends = ()=> {
    //access data to display urban legends
    alert("yay you clicked me")
    

}



const displayMonster = () => {
    monsterName();
    urbanLegends();
    //Will display monster on screen
};

function monsterEvent(){
    const monsterInput = document.getElementsByClassName('monsters')
    monsterInput.addEventListener('click', displayMonsters)
}

function ubranLegendsEvent(){
    const urbanLegengsInput = document.getElementsByClassName('urbanlegends');
    urbanLegengsInput.addEventListener('click', displayMonsters);
}

function scrollScreen(){ 
    let scrollPosition = 0;
    scrollBar = document.getElementById('scrollarea')
    scrollbar.addEventListener('scroll', (event) =>{ scrollPosition=window.scrollY})

}