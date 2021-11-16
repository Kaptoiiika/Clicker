class Game {
  constructor(option) {
    this._coin = option._coin
    this.coin = 10000
  }

  coinUpdate(change) {
    this.coin += change
    this._coin.innerText = this.coin.toFixed(0)
  }
  kapiClick() {
    this.coinUpdate(1)
  }
}
