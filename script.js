const container = document.createElement("div")
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
container.style.background = 'linear-gradient(to right, #ff0000, #00ff00)'

for (let i = 1; i <= 8; i++){

  for(let k = 1; k <=8; k++){
    const tile = document.createElement("div")
    tile.style.width = "12.5%"
    tile.style.height = "12.5%"
    if (i%2===0){
      if (k%2===0){
        tile.style.backgroundColor = rgba(0,0,0,0.5)"
      }else{
        tile.style.backgroundColor = rgba(255,0,0,0.5)"
      }
    }else{
      if (k%2===0){
        tile.style.backgroundColor = rgba(255,0,0,0.5)"
      }else{
        tile.style.backgroundColor = rgba(0,0,0,0.5)"
      }
    }
    container.appendChild(tile)
  }

}
document.body.appendChild(container);