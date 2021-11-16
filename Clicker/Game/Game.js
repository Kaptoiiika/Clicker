class Game {
  constructor(option) {
    this._coin = option._coin
    this.coin = 0
  }

  coinUpdate(change) {
    this.coin += change
    this._coin.innerText = this.coin
  }
  kapiClick() {
    this.coinUpdate(1)
  }
}
