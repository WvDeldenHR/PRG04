//
// vis element
//
let fish = document.createElement("fish")
fish.style.transform = "translate(500px, 500px)"
fish.style.filter = "hue-rotate(150deg)"

//
// bubble element
//
let bubble = document.createElement("bubble")
bubble.style.transform = "translate(30vw, 50vh)"

let game = document.getElementsByTagName("game")[0]
game.appendChild(fish)
game.appendChild(bubble)