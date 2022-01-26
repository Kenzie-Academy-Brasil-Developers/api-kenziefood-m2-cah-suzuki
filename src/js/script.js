
const productList = []
let elementId = []
const listProducts  = document.getElementById("list-products")

function createLayout(data){
  data.forEach(element => {
  const products      = document.createElement("li")
  const imgProducts   = document.createElement("img")
  const titleProducts = document.createElement("h2")
  const descProducts  = document.createElement("p")
  const divBuy        = document.createElement("div")
  const spanPrice     = document.createElement("span")
  const buttonToCart  = document.createElement("button")

  products.classList.add("products")
  imgProducts.classList.add("products-img")
  titleProducts.classList.add("products-title")
  descProducts.classList.add("products-description")
  divBuy.classList.add("div-buy")
  spanPrice.classList.add("produtcts-price")
  buttonToCart.classList.add("button-add-cart")
  buttonToCart.id = "id" + (element.id + "")

  imgProducts.src         = element.photo
  titleProducts.innerText = element.name
  descProducts.innerText  = element.description
  spanPrice.innerText     = element.price
  


  listProducts.appendChild(products)
  products.appendChild(imgProducts)
  products.appendChild(titleProducts)
  products.appendChild(descProducts)
  products.appendChild(divBuy)
  divBuy.appendChild(spanPrice)
  divBuy.appendChild(buttonToCart)
  })
}

var product = new ApiClass().fetchProdutos().then((products)=>{

    for (let i=0;i<products.length;i++){
        let productTemporary = new Product(products[i].nome,
                                           products[i].imagem,
                                           products[i].descricao,
                                           products[i].categoria,
                                           products[i].preco,
                                           products[i].id,
                                           products[i].updatedAt,
                                           products[i]. createdAt)
        productList.push(productTemporary)                  
    }
    console.log(productList)
    createLayout(productList)
  })

listProducts.addEventListener("click", (evn) => {
  let id
  if(evn.target.className === "button-add-cart"){
    id = evn.target.id.split("")[2] - ""
    for(let i = 0; i < productList.length;i++) {
      if(productList[i].id === id) {
        cart.add(productList[i])
      }
    }
}
  currentItens(cart)
  currentPrice(cart)
})
 
 

