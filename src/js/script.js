
const productList = []
let test
let test2

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
  }).then(res => test = new Product(productList[0].name,
    productList[0].photo,
    productList[0].description,
    productList[0].category,
    productList[0].price,
    productList[0].id,
    productList[0].updatedAt,
    productList[0].createdAt,)).then(
        res => test2 = new Product(productList[1].name,
            productList[1].photo,
            productList[1].description,
            productList[1].category,
            productList[1].price,
            productList[1].id,
            productList[1].updatedAt,
            productList[1].createdAt,)
    )

    let cart = new ShoppingCart()

  function createLayout(data){
    data.forEach(element => {
    const listProducts  = document.getElementById("list-products")
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
  createLayout(productList)
    ////
  

