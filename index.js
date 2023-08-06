//Setting variables for use 
const textArea = document.getElementById("textarea")
const getMonsterButtonInput = document.getElementById("")
const getUrbanLegendsButtonInput = document.getElementsByClassName("")

//Function to fetch ALL monster data
function generateCreatures(){
    //fetching all the quote data 
   return fetch('http://localhost:3000/supernaturalCreatures/')
   .then(response => response.json()) 
   .then(creatures => console.log(creatures))
    //generateCreatureOptions(creatures.supernaturalCreatures))
   .catch()
}

//Generating randomized Monster entries

function generateCreatureOptions(creatures){
//Need to access the individual properties of the returned array of objects
    //forEach(?) to loop through the returned creatures data
    for (const key in creatures){
        console.log(creature[key])
    }
    }
   
//Generating randomized urbanLegends entries


const generateUrbanLegends = ()=> {
    alert("yay you clicked me")
    

}



const displayMonster = () => {
    monsterName();
    urbanLegends();
    //Will display monster on screen
};

function monsterEvent(){
    const monsterInput = document.getElementsByClassName('monsters')
    monsterInput.addEventListener('click', monsterName)
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