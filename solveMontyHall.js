const fs = require('fs')
const readLine = require('readline-sync')
const { randomInt } = require('crypto')
const chalk = require('chalk')

let keep = 0
let change = 0
let i = 0

// KEEP
while (i < 1000000){

//creation des 3 portes
const tab = [['Porte 1', 'Porte 2', 'Porte 3'],['chevre', 'chevre', 'chevre']]

// on met une ferrari (aleatoirement s'il vous plait) dans une de ces trois portes 
const n = randomInt(0,3) 
tab[1][n] = 'ferrari'           // on met la fefe dans l'une des 3 portes, biensure de manièere aleatoir






//-------2 EME ÉTAPE---------------------------START GAME------------------------------------//

// le presentateur nous pose une question (readlineSync) et on donne une reponse qui sera stocké dans une variable

let playerChoice = 0

// Nous avons choisis une porte maintenant le présentateur veut nous révéler une porte contenant une chèvre (il y en aura forcemment une)
const revealedDoor = (tab, playerChoice) => {
  for (let i = 0; i < tab[0].length; i++) {
    if (tab[1][i] !== 'ferrari' && i !== playerChoice) {
      return (i)
    }
  }
} 


let playerChange = false





//--------3 EME ÉTAPE--------------------------END GAME----------------------------------------------//

// a t'il gagné ? a t'il perdu ?
switch (playerChange) {
  case true :
    if (tab[1][playerChoice] === 'ferrari') {
    } else {
    }
    break
  case false :
    if (tab[1][playerChoice] === 'ferrari') {
      keep++
    } else {
    }
    break
  default :
    console.log(chalk.bgBlackBright('\nFelicitation vous avez ni*** mon code !!!!\n'))
}


// try again ?
  i++
} 



// CHANGE
i = 0
while (i < 1000000){
//-------1 ERE ÉTAPE-------------------------INITIALISATION-------------------------------------//

//creation des 3 portes
const tab = [['Porte 1', 'Porte 2', 'Porte 3'],['chevre', 'chevre', 'chevre']]

// on met une ferrari (aleatoirement s'il vous plait) dans une de ces trois portes 
const n = randomInt(0,3) 
tab[1][n] = 'ferrari'           // on met la fefe dans l'une des 3 portes, biensure de manièere aleatoir






//-------2 EME ÉTAPE---------------------------START GAME------------------------------------//

// le presentateur nous pose une question (readlineSync) et on donne une reponse qui sera stocké dans une variable

let playerChoice = 0

// Nous avons choisis une porte maintenant le présentateur veut nous révéler une porte contenant une chèvre (il y en aura forcemment une)
const revealedDoor = (tab, playerChoice) => {
  for (let i = 0; i < tab[0].length; i++) {
    if (tab[1][i] !== 'ferrari' && i !== playerChoice) {
      return (i)
    }
  }
} 


let playerChange = true





//--------3 EME ÉTAPE--------------------------END GAME----------------------------------------------//

// a t'il gagné ? a t'il perdu ?
switch (playerChange) {
  case true :
    if (tab[1][playerChoice] === 'ferrari') {
      change++
    } else {
    }
    break
  case false :
    if (tab[1][playerChoice] === 'ferrari') {
      
    } else {
    }
    break
  default :
    console.log(chalk.bgBlackBright('\nFelicitation vous avez ni*** mon code !!!!\n'))
}


// try again ?
  i++
} 

console.log(`Le joueur garde sa porte  : ${keep}`)
console.log(`Le joueur change de porte : ${change}`)