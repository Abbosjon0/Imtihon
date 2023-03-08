const elRow = document.querySelector(".row")

for (let pokemon of pokemons){
    const newimg = document.createElement("img")
    const newimg2 = document.createElement("img")
    const newH1 = document.createElement("h5")
    const newP = document.createElement("p")
    const height = document.createElement("h5")
    const weight = document.createElement("h5")
    const newDiv1 = document.createElement("div")
    const newDiv2 = document.createElement("div")
    const newDiv3 = document.createElement("div")
    const newDiv4 = document.createElement("div")
    const newDiv5 = document.createElement("div")
    const newHr = document.createElement("hr")
   

    newimg.setAttribute("src", `${pokemon.img}`)
    newDiv1.setAttribute("class", "col-3 rounded-5")
    newDiv2.setAttribute("class", "card")
    newDiv3.setAttribute("class", "card-body")
    newDiv4.setAttribute("class", "d-flex")
    weight.setAttribute("class", "ms-3")

    newH1.textContent = pokemon.name
    newP.textContent = pokemon.candy
    height.textContent = pokemon.height
    weight.textContent = pokemon.weight
   
    
    elRow.appendChild(newDiv1)
    newDiv1.appendChild(newDiv2)
    newDiv2.appendChild(newimg)
    newDiv2.appendChild(newHr)
    newDiv2.appendChild(newDiv3)
    newDiv3.appendChild(newDiv5)
    newDiv5.appendChild(newH1)
    newDiv5.appendChild(newP)
    newDiv3.appendChild(newDiv4)
    newDiv4.appendChild(height)
    newDiv4.appendChild(weight)
}