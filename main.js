const fs = require('fs')
const readLine = require('readline-sync')
const { randomInt } = require('crypto')
const chalk = require('chalk')

do {
//-------1 ERE ÉTAPE-------------------------INITIALISATION-------------------------------------//

//creation des 3 portes
const tab = [['Porte 1', 'Porte 2', 'Porte 3'],['chevre', 'chevre', 'chevre']]

// on met une ferrari (aleatoirement s'il vous plait) dans une de ces trois portes 
const n = randomInt(0,3) 
tab[1][n] = 'ferrari'           // on met la fefe dans l'une des 3 portes, biensure de manièere aleatoir


console.log(chalk.bold('BOONjour BONjour tout le monde et bienvenue dans le jeu du FEFE GAME !!!!!!!\n\n'))

// recuperer le nom du joueur
let player = readLine.question('Quelle est votre nom ? : ')
while (player.length < 1 || player.length > 20) {
  player = readLine.question(`\nNope ! entre 1 et 20 charactères\n${chalk.yellow('votre nom: ')}`)
}









//-------2 EME ÉTAPE---------------------------START GAME------------------------------------//

// le presentateur nous pose une question (readlineSync) et on donne une reponse qui sera stocké dans une variable
console.log(`\n\nBien Bien Bien ${chalk.yellow(player)}, tu as maintenant 3 portes devant toi avec une fefe derriere l\'une d'entre elles !
Choissis 1 porte, MAIS ATTENTION !!!! choissis la bonne ;)`)

let playerChoice = readLine.keyInSelect(tab[0], `Votre Choix : `)

// Nous avons choisis une porte maintenant le présentateur veut nous révéler une porte contenant une chèvre (il y en aura forcemment une)
const revealedDoor = (tab, playerChoice) => {
  for (let i = 0; i < tab[0].length; i++) {
    if (tab[1][i] !== 'ferrari' && i !== playerChoice) {
      return (i)
    }
  }
} 

// Le presentateur nous montre une porte qui cache une chèvre (évidemment pas la notre si elle en contenait une)
console.log(`Très bien tu as choisi la ${tab[0][playerChoice]}. Maintenant laisse moi te dire que dans la ${tab[0][revealedDoor(tab, playerChoice)]} il y avait une ${tab[1][revealedDoor(tab, playerChoice)]}`)

// derniere chance pour le joueur
let playerChange = readLine.keyInYN('\nVoulez changer votre choix ? derniere chance ! : ')

switch (playerChange) {
  case true :
    if (tab[1][playerChoice] === 'ferrari') {
      console.log('\nOHHHHHH quelle dommage ! vous aviez la bonne porte au début mais vous avez changé pour une belle chèvrette x)\n')
    } else {
      console.log('\nomg full chance gg vous gagnez la fefe !!!!!\n')
    }
    break
  case false :
    if (tab[1][playerChoice] === 'ferrari') {
      console.log('\nOui vous êtes un homme sage et n\'aviez pas été tenté par la tention du stress d\'un retournement de situation dus à l\'accumulation d\émotion incertaine, bref vous avez la fefe\n')
    } else {
      console.log('\nVoici votre nouvelle femme "Madame chevre"\n')
    }
    break
  default :
    console.log('\nFelicitation vous avez ni*** mon code !!!!\n')
}

console.log(chalk.bgBlack(`      Le tableau !       \n ${tab[0]} \n    ↓      ↓      ↓      \n ${tab[1]}   \n`))
console.log(`Choix initiale du joueur : ${tab[0][playerChoice]}\n`)
console.log(`Le joueur a t'il changé son premier choix ? : ${!!playerChange ? 'oui' : 'non'}\n`)


//--------3 EME ÉTAPE--------------------------END GAME----------------------------------------------//

} while (readLine.keyInYN('Voulez vous rejouer ? : '))