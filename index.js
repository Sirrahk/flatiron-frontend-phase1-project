//Function to fetch ALL monster data
function generateCreatures(){
    //fetching all the quote data 
   fetch('http://localhost:3000/supernaturalCreatures/')
   .then(response => response.json()) 
   .then(creatures => console.log(creatures))
    //generateCreatureOptions(creatures.supernaturalCreatures))
   .catch()
}

//Generating randomized Monster entries

/*function generateCreatureOptions(creatures){
    console.log(creatures.name)
   
}*/
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