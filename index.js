

const monsterName = () => {
    alert("yay you clicked me")
    

}

const urbanLegends = ()=> {
    alert("yay you clicked me")
    

}

const biblicalCreatures = () => {
    alert("yay you clicked me")
}


const displayMonster = () => {
    monsterName();
    urbanLegends();
    biblicalCreatures();
    //Will display monster on screen
};

function monsterEvent(){
    const monsterInput = document.getElementsByClassName('monsters')
    monsterInput.addEventListener('click', displayMonster)
}

function biblicalEvent(){
    const biblicalInput = document.getElementsByClassName('biblical');
    biblicalInput.addEventListener('click', biblicalCreatures);
}

function ubranLegendsEvent() {

}
function scrollScreen(){ 
    scrollBar = document.getElementsById('scrollarea')

}