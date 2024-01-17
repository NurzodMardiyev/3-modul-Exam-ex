const formel = document.querySelector("#formEl");
const onPizza = document.querySelectorAll(".onPizza input");
const Add = document.querySelectorAll(".Add input");
const ordered = document.querySelector("#ordered");

const onPizzaObj = {
  price: 5,
};

const addObj = {
  price: 5,
};

const dataBase = [];
ordered.style.display = "none";
formel.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target[0];
  const number = event.target[1];
  const adress = event.target[2];
  const selectThink = event.target[3];
  const selectSize = event.target[4];

  const valuesData = {
    id: dataBase.length,
    name: name.value,
    number: number.value,
    adress: adress.value,
    selectThinkness: selectThink.value,
    selectSize: selectSize.value,
    onPizza: [],
    add: [],
    total: 0,
  };

  for (let key of onPizza) {
    if (key.checked) {
      valuesData.onPizza.push(key.value);
      // console.log(onPizza);
    }
  }

  for (let key of Add) {
    if (key.checked) {
      valuesData.add.push(key.value);
    }
  }
  dataBase.push(valuesData);
  console.log(dataBase);
  ordered.innerHTML = "";
  for (let key of dataBase) {
    // let k;
    // for (k of key.onPizza) {
    //   console.log(k);
    // }
    let template = `
          <div class="client__info">
          <h1>Order: ${key.id + 1}</h1>
          <p>
            <span class="productIdThick">Name:</span>
            <span>${key.name}</span>
          </p>
          <p>
            <span class="productIdThick">Phone:</span>
            <span>${key.number}</span>
          </p>
          <p>
            <span class="productIdThick">Adress:</span>
            <span>${key.adress}</span>
          </p>
          </div>
          <div class="product__info">
          <p>
            <span class="productIdThick">Dough thickness:</span>
            <span>${key.selectThinkness}</span>
          </p>
          <p>
            <span class="productIdThick">Size:</span>
            <span>${key.selectSize}</span>
          </p>
          <p>
            <span class="productIdThick">On Pizza:</span>
            <span>${key.onPizza.join()}</span>
          </p>
          <p>
            <span class="productIdThick">Add:</span>
            <span>${key.add}</span>
          </p>
          </div>
          <div class="total text-center">
          <h2>${colculatePrice()}$</h2>
          </div>
      `;
    // console.log(key.id);
    ordered.innerHTML += template;
  }

  function colculatePrice() {
    // thinkPrice
    let thinkPrice = 0;
    if (valuesData.selectThinkness == "Thin") {
      thinkPrice = 10;
    } else if (valuesData.selectThinkness == "Medium") {
      thinkPrice = 12;
    } else {
      thinkPrice = 15;
    }

    // Size Price
    let sizePrice = 0;
    if (valuesData.selectSize == "25sm") {
      sizePrice = 10;
    } else if (valuesData.selectSize == "35sm") {
      sizePrice = 12;
    } else {
      sizePrice = 15;
    }

    // onPizzaPrice
    let every = 0;
    every += valuesData.onPizza.length * onPizzaObj.price;

    // Add Price
    let addPrice = 0;
    addPrice += valuesData.add.length * addObj.price;

    let totalPrice;
    totalPrice = addPrice + every + sizePrice + thinkPrice;

    return totalPrice;
  }

  ordered.style.display = "block";
  name.value = "";
  number.value = "";
  adress.value = "";
  selectThink.value = "";
});

// console.dir(formel);
