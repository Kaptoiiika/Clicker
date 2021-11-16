class Building {
  static iter = []

  constructor(option) {
    this.name = option.name
    this.price = option.price
    this.production = option.production
    this.delayProduction = option.delayProduction
    this.cps = this.production / this.delayProduction
    this.count = 0
    Building.iter.push(this.name)
  }
  update() {
    game.coinUpdate(this.production)
  }

  bought(amount) {
    this.count++
    game.coinUpdate(-this.price)
    this.price *= 1.2
    if (this.count > 0) {
      setInterval(() => {
        this.update()
      }, this.delayProduction * 1000)
    }
     
    document.getElementById(`${this.name}_count`).innerText = this.count
    document.getElementById(`${this.name}_button`).value = `price = ${this.price.toFixed(0)}`
  }
}

farm = new Building({
  name: "farm",
  price: 50,
  production: 5,
  delayProduction: 3,
})
factory = new Building({
  name: "factory",
  price: 150,
  production: 15,
  delayProduction: 3,
})
sponsor = new Building({
  name: "sponsor",
  price: 950,
  production: 50,
  delayProduction: 10,
})
company = new Building({
  name: "company",
  price: 5000,
  production: 500,
  delayProduction: 10,
})
group = new Building({
  name: "group",
  price: 25000,
  production: 1500,
  delayProduction: 10,
})

setTimeout(() => {
  Building.iter.map((_name) => {
    document.getElementsByClassName(
      "RightSide"
    )[0].innerHTML += `<label id="${_name}_Label" for="${_name}">${_name}</label>
    <input class="upgradeButton" id="${_name}_button" value="0"onclick="bought(id)" type="button"/>
    <label id="${_name}_count" for="${_name}"></label>
    <br>`
  })
}, 0)
