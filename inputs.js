setTimeout(() => {
  Building.iter.map((obj) => {
    _name = obj.name
    document.getElementsByClassName(
      "RightSide"
    )[0].innerHTML += 
    `
    <div class="push_box" onclick=${_name}.bought(1) value="">
      <div class="pictureShop" value="">
        <img src="${obj.img}" />
      </div>
      <div class="textShop" value="">
        <h4 id="${_name}_Label" for="${_name}">${_name}</h4>
        <p id="${_name}_button">${obj.price}</p>
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
    <div class="push_box" onclick=${_name}.bought(1)value="left">
      <div class="pictureShop" value="left">
        <img src="${obj.img}" />
      </div>
      <div class="textShop" value="left">
        <h4 id="${_name}_Label" for="${_name}">${_name}</h4>
<p>${obj.price}</p>
      </div>
      <label id="${_name}_count" for="${_name}"></label>
    </div>
  `
  })
}, 0)
