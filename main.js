setTimeout(() => {
  game = new Game({
    _coin: document.getElementById("coins"),
  })
}, 0)

const bought = (builidng) => {
  if (game.coin >= eval(`${builidng.split("_")[0]}.price`)) {
    eval(`${builidng.split("_")[0]}.bought()`)
  } else {
    console.log("not have money")
  }
}
