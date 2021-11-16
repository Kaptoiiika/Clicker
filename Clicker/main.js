setTimeout(() => {
  game = new Game({
    _coin: document.getElementById("coins"),
  })
}, 0)

const bought = (builidng) => {
  eval(`${builidng.split("_")[0]}.bought()`)
}
