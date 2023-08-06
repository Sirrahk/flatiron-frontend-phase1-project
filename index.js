

const generateMonsters = () => {
    //fetching all the quote data 
   fetch('http://localhost:3000/supernaturalCreatures/')
   .then(response => response.json()) 
   .then(json=>console.log(json))
}


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
    scrollBar = document.getElementsById('scrollarea')

}