class Building {
  constructor(option) {
    this.price = option.price
    this.production = option.production
    this.delayProduction = option.delayProduction
    this.cps = this.production / this.delayProduction
    this.count = 0
  }
  update() {
    game.coinUpdate(this.production)
  }

  bought(amount) {
    this.count++
    this.price *= 1.2

    if (this.count > 0) {
      setInterval(() => {
        this.update()
      }, this.delayProduction * 1000)
    }
  }
}

farm = new Building({ price: 50, production: 5, delayProduction: 3 })
factory = new Building({ price: 150, production: 15, delayProduction: 3 })
