let itemsTop = document.querySelector(".items-top")
let bottom = document.querySelector(".items-bottom")
let menu = document.querySelector(".menu")
let doubleLine = document.querySelector("#line")
let croie = document.querySelector("#croie")
console.log(menu.children[1].style);
//les requets

croie.addEventListener("click", actionDeCroix)
doubleLine.addEventListener("click", actionDeLine)

function actionDeCroix() {
    menu.style.width = "10%"
    menu.style.transition = "all .5s ease-in-out"
    menu.children[0].style.display = "flex"
    menu.children[0].style.textAlign = "center"
    menu.children[0].style.marginLeft = "2.5rem"
    menu.children[0].style.fontSize = "40px"
    menu.children[1].style.display = "none"
    menu.children[2].style.display = "none"
    menu.children[3].style.display = "none"
    menu.children[4].style.display = "none"
    menu.children[5].style.display = "none"
        // gestion des élements en haut et en bas
    bottom.style.width = "40%"
    bottom.style.transition = "all .5s ease-in-out"
    itemsTop.style.width = "40%"
    itemsTop.style.transition = "all .5s ease-in-out"
}

function actionDeLine() {
    menu.style.transition = "all .5s ease-in-out"
    menu.style.width = "34%"
    menu.children[0].style.display = "none"
    menu.children[0].style.textAlign = "none"
    menu.children[0].style.marginLeft = "none"
    menu.children[0].style.cursor = "pointer"
    menu.children[1].style.display = "inline-block"
    menu.children[2].style.display = "inline-block"
    menu.children[3].style.display = "inline-block"
    menu.children[4].style.display = "inline-block"
    menu.children[5].style.display = "inline-block"
        // gestion des élements en haut et en bas
    bottom.style.width = "60%"
    bottom.style.transition = "all .5s ease-in-out"
    itemsTop.style.width = "60%"
    itemsTop.style.transition = "all .5s ease-in-out"
}