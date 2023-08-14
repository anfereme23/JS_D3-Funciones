const color= document.querySelector("#key")
const container=document.querySelector(".container")

    document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a":
            color.style.backgroundColor = "pink"
            break
        case "s":
            color.style.backgroundColor = "orange"
            break
        case "d":
            color.style.backgroundColor = "skyblue"
            break
        case "q":
            newDiv('purple')
            break
        case "w":
            newDiv('gray')
            break
        case "e":
            newDiv('brown')
            break
        default:
            color.style.backgroundColor = "white"  
    }
})

function newDiv(col){
    let div= document.createElement ("div")
    div.style.backgroundColor=col
    div.style.height="200px"
    div.style.width="200px"
    container.appendChild(div)
}

function pintar(elementID) {
    const ele=document.querySelector("#" + elementID)
    ele.style.backgroundColor = "black"
    }
    ele.addEventListener("click", pintar)