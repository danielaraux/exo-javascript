// La variable est de type string car son contenu "mot de passe" est une chaine de caractères
let secret = "mot de passe"

console.log("La variable secret est de type " + (typeof secret))

// On affiche le type de la variable dans la page du navigateur, visible en F12 dans la console




// on change la valeur
secret = 777


console.log("La variable secret est de type : " + (typeof secret))
// On affiche le type de la variable dans la page du navigateur, visible en F12 dans la console




// On déclare nos variables : (si possible en trouve des explicites)
let chaineNom = "Je m'appelle BOND"
let trueorFalse = "true"
let nb = 85
let pi = 3.14
let date = new Date()


// On affiche le type des variables :

console.log("La variable chaineNom est de type : " + (typeof chaineNom))
console.log("La variable trueorFalse est de type : " + (typeof trueorFalse))
console.log("La variable nb est de type : " + (typeof nb))
console.log("La variable pi est de type : " + (typeof pi))
console.log("La variable date est de type : " + (typeof date))


let varIndefinie

console.log("La variable varIndefinie est de type : " + (typeof varIndefinie))



// Test de changement de la valeur de incorruptible (cela reste en type string malgré le changement, visible en F12 sur le navigateur)
const incorruptible = "777"

console.log("La variable incorruptible est de type : " + (typeof incorruptible))


