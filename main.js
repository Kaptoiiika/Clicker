function allReady() {
  game = new Game({
    _coin: document.getElementById("coins"),
  })
  inputs()
}

function save() {
  const savedata = JSON.stringify({
    coin: game.coin,
    buildings: Building.iter,
    enchanteds: Enchanted.iter,
  })
  localStorage.setItem("GameSaveData", savedata)
  return savedata
}

function load() {
  const data = JSON.parse(localStorage.getItem("GameSaveData"))
  game.coin = data.coin
  data.buildings.map((build) => {
    for (var member in window) {
      if(window[member] instanceof Building && window[member].name ===build.name ){
        window[member].price = build.price
        window[member].count = build.count
      }
    }
  })
  data.enchanteds.map((build) => {
    for (var member in window) {
      if(window[member] instanceof Enchanted && window[member].name ===build.name ){
        window[member].bought(true)
      }
    }
  })
}
