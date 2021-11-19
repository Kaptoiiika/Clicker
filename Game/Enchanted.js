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
setTimeout(() => {
  Enchanted.iter.map((obj) => {
    _name = obj.name
    document.getElementsByClassName(
      "LeftSide"
    )[0].innerHTML += `<div class ="push_box">
    <label id="${_name}_Label" for="${_name}">${_name}</label>
    <input class="upgradeButton" id="${_name}_button" value="${obj.price}"onclick="${_name}.bought()" type="button"/>
    </div>`
  })
}, 0)
