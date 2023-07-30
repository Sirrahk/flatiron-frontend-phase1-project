console.log("Hello World")


//Event listener for monster button
//Event listener for urban legends button
//Event listener for demons button

const monsterName = () => {
    alert("yay you clicked me")
    

}

const urbanLegends = ()=> {
    alert("yay you clicked me")
    

}

const demonsName = () => {
    alert("yay you clicked me")
}


const displayMonster = () => {
    monsterName();
    urbanLegends();
    demonsName();
    //Will display monster on screen
};

const monsterEvent=() => {
    const input = document.getElementsByClassName(button)
    input.addEventListener('click', displayMonster)
}

const demonsEvent = () => {
    const demonInput =  document.getElementsByClassName('demons')
    demonInput.addEventListener('click', demonsName)
}

const scrollScreen = () => { 
    scrollBar = document.getElementsById('scrollarea')

}