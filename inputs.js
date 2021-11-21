setTimeout(() => {
  Building.iter.map((obj) => {
    _name = obj.name
    document.getElementsByClassName(
      "RightSide"
    )[0].innerHTML += 
    `
    <div class="push_box" value="">
      <div class="pictureShop" value="">
        <img src="${obj.img}" />
      </div>
      <div class="textShop" value="">
        <h4 id="${_name}_Label" for="${_name}">${_name}</h4>
        <input
          class="upgradeButton"
          id="${_name}_button"
          value="${obj.price}"
          onclick=${_name}.bought()
          type="button"
        />
      </div>
      <label id="${_name}_count" for="${_name}"></label>
    </div>
  `
  })
}, 0)

setTimeout(() => {
  Enchanted.iter.map((obj) => {
    _name = obj.name
    document.getElementsByClassName(
      "LeftSide"
    )[0].innerHTML +=     `
    <div class="push_box" value="left">
      <div class="pictureShop" value="left">
        <img src="${obj.img}" />
      </div>
      <div class="textShop" value="left">
        <h4 id="${_name}_Label" for="${_name}">${_name}</h4>
        <input
          class="upgradeButton"
          id="${_name}_button"
          value="${obj.price}"
          onclick=${_name}.bought()
          type="button"
        />
      </div>
      <label id="${_name}_count" for="${_name}"></label>
    </div>
  `
  })
}, 0)
