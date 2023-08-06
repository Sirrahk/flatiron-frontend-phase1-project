

const generateMonsters = () => {
   fetch('http://localhost:3000/supernaturalCreatures/')
   .then(function (response) { console.log(response);
    return response.json();
   }).then(function (data){ 
    console.log(data);
   }) 

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