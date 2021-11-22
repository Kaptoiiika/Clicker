class Building {
  static iter = []
  static getCountOf() {
    let obj = this.iter.map((name) => {})
    return JSON.stringify(obj)
  }

  constructor(option) {
    this.name = option.name
    this.price = option.price
    this.production = option.production
    this.delayProduction = option.delayProduction
    this.cps = this.production / this.delayProduction
    this.img = option.img

    this.count = 0
    Building.iter.push(this)
  }
  update() {
    game.coinUpdate(this.production)
  }

  bought(amount,isload = false) {
    if (game.coin >= this.price) {
      this.count+=amount
      if(!isload){
      game.coinUpdate(-this.price)
      }
      this.price *= Math.pow(1.2,amount)
      if (this.count > 0) {
        setInterval(() => {
          this.update()
        }, this.delayProduction * 1000)
      }

      document.getElementById(`${this.name}_count`).innerText = this.count
      document.getElementById(
        `${this.name}_button`
      ).innerText = `${this.price.toFixed(0)}`
    }
  }
}

farm = new Building({
  name: "farm",
  price: 50,
  production: 5,
  delayProduction: 3,
  img: "img/FarmIcon.png"
})
factory = new Building({
  name: "factory",
  price: 150,
  production: 15,
  delayProduction: 3,
  img: 'img/factory.jpg'
})
sponsor = new Building({
  name: "sponsor",
  price: 950,
  production: 50,
  delayProduction: 10,
  img: ''
})
company = new Building({
  name: "company",
  price: 5000,
  production: 500,
  delayProduction: 10,
  img: ''
})
group = new Building({
  name: "group",
  price: 25000,
  production: 1500,
  delayProduction: 10,
  img: 'png'
})
