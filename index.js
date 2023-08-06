// defining elements
const getMonsterInputButton = document.getElementsByClassName('creaturesbutton')
const pCreatureName = document.getElementById('creaturename')
const pLore = document.getElementById('lore')
const pAbilities = document.getElementById('strengths')
const pWeaknesses = document.getElementById('weaknesses')
const pAppearance = document.getElementById('episodefeatured')



//Function to fetch ALL monster data
function generateCreatures(){
    //fetching all the quote data 
   fetch('http://localhost:3000/supernaturalCreatures/')
   .then(response => response.json()) 
   .then(creatureData => creatureData.forEach(creature => displayAllMonsters(creature)))
    //generateCreatureOptions(creatures.supernaturalCreatures))
   .catch()
}


//displaying monster data 
function displayAllMonsters(creature){
    pCreatureName.innerText = `Creature: ${creature.name}`
    pLore.innerText = `Lore: ${creature.lore}`
    pAbilities.innerText = `Strengths: ${creature.abilities}`
    pWeaknesses.innerText = `Weaknesses: ${creature.weakness}`
    pAppearance.innerText = `Episode: ${creature.appearance}`
     
}

//Function call 
generateCreatures()

 
function creatureEvent(){
    document.getElementsByClassName('creaturesbutton').addEventListener('click', generateCreatures)
}





