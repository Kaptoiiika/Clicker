class Enchanted {
  static iter = []
  constructor(option) {
    this.name = option.name
    this.price = option.price
    this.conditions = option.conditions
    this.isUnlock = false

    this.enchant = option.enchant
    Enchanted.iter.push(this)
  }
  bought(Unlock = false) {
    if (!this.isUnlock && game.coin >= this.price || Unlock === true) {
      this.enchant()
      this.isUnlock = !this.isUnlock
      document.getElementById(`${this.name}_box`).style.display = `none`
    } else if(game.coin < this.price){
      console.log("you don't have coins");
    }
    else{
      console.log("you already have this")
    }
  }
}

farmTier1 = new Enchanted({
  name: "farmTier1",
  price: 300,
  conditions: "farm.count >= 5",
  enchant: () => {
    farm.production *= 2
  },
})
factoryTier1 = new Enchanted({
  name: "factoryTier1",
  price: 5000,
  conditions: "farm.count >= 5",
  enchant: () => {
    factory.production *= 2
  },
})
sponsorTier1 = new Enchanted({
  name: "sponsorTier1",
  price: 30000,
  conditions: "farm.count >= 5",
  enchant: () => {
    sponsor.production *= 2
  },
})
groupTier1 = new Enchanted({
  name: "groupTier1",
  price: 150000,
  conditions: "farm.count >= 5",
  enchant: () => {
    group.production *= 2
  },
})


