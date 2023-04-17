const productos = contreBurgerData.productos;
const comida = contreBurgerData.comida;

const menu = [];


function display(array) {
  var html = "";
  for (var i = 0; i < array.length; i++) {
    html += `
      <div class="clasica">
        <img src="./img2/${array[i].image}" alt="hamburguesa-clasica">
        <div>
          <h2>${array[i].name}</h2>
          <p>${array[i].price}</p>
        </div>
        <div>
          <p>${array[i].ingredients}</p>
          <button>${array[i].button}</button>
        </div>
      </div>
    `;
  }
  console.log(html);
  document.getElementById("allmenu_burgers").innerHTML = html;
}

display(productos);
