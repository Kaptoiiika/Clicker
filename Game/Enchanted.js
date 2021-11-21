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
  bought() {
    if (!this.isUnlock) {
      this.enchant()
      this.isUnlock = !this.isUnlock
    } else {
      console.log("you already have this")
    }
  }
}

FarmTier1 = new Enchanted({
  name: "FarmTier1",
  price: 300,
  conditions: "farm.count >= 5",
  enchant: () => {
    farm.production *= 2
  },
})

