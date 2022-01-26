
const productList   = []
let elementId       = []
const listProducts  = document.getElementById("list-products")
const navFilters    = document.getElementById("nav-filters")
const formSearch    = document.getElementById("form-search")


function createLayout(data){
  data.forEach(element => {
  const products      = document.createElement("li")
  const imgProducts   = document.createElement("img")
  const spanCategory  = document.createElement("span")
  const titleProducts = document.createElement("h2")
  const descProducts  = document.createElement("p")
  const divBuy        = document.createElement("div")
  const spanPrice     = document.createElement("span")
  const buttonToCart  = document.createElement("button")

  products.classList.add("products")
  imgProducts.classList.add("products-img")
  spanCategory.classList.add("products-category")
  titleProducts.classList.add("products-title")
  descProducts.classList.add("products-description")
  divBuy.classList.add("div-buy")
  spanPrice.classList.add("produtcts-price")
  buttonToCart.classList.add("button-add-cart")
  buttonToCart.id = "id" + (element.id + "")

  imgProducts.src         = element.photo
  spanCategory.innerText  = element.category
  titleProducts.innerText = element.name
  descProducts.innerText  = element.description
  spanPrice.innerText     = element.price
  


  listProducts.appendChild(products)
  products.appendChild(imgProducts)
  products.appendChild(spanCategory)
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


  //FILTERS

  function filterBakery(data){

    let filtredData = []
    data.forEach(element => {
      if(element.category == "Panificadora"){
        filtredData.push(element)
        listProducts.innerHTML = ""
        createLayout(filtredData)
      }
    })
  }
  function filterFruits(data){
    let filtredData = []
    data.forEach(element => {
      if(element.category == "Frutas"){
        filtredData.push(element)
        listProducts.innerHTML = ""
        createLayout(filtredData)
      }
    })
  }
  function filterDrinks(data){
    let filtredData = []
    data.forEach(element => {
      if(element.category == "Bebidas"){
        filtredData.push(element)
        listProducts.innerHTML = ""
        createLayout(filtredData)
      }
    })
  }
navFilters.addEventListener("click", (event) => {
  if(event.target.className == "button-filter-all" ){
    listProducts.innerHTML = ""
    createLayout(productList)
  }
  if(event.target.className == "button-filter-bakery"){
    listProducts.innerHTML = ""
    filterBakery(productList)
  }
  if(event.target.className == "button-filter-fruits"){
    listProducts.innerHTML = ""
    filterFruits(productList)
  }
  if(event.target.className == "button-filter-drinks"){
    listProducts.innerHTML = ""
    filterDrinks(productList)
  }
})  

function searchFilter(data){
  const inputSearch   = document.getElementById("input-search")
  const searchButton  = document.getElementById("button-search")
  inputSearch.addEventListener("keyup", (evt)=> {
    let typedText = evt.target.value.toLowerCase()
   const filterProducts = data.filter((product)=>{
     const {name} = product
     if(name.toLowerCase().includes(typedText)){
      return product
     }
   })
   
   listProducts.innerHTML = ""
   createLayout(filterProducts)
   
  })
 
}
searchFilter(productList)

//ADD PRODUCTS TO CART
listProducts.addEventListener("click", (evn) => {
  if(evn.target.className === "button-add-cart"){
    cart.add(productList[evn.target.id.split("")[2] - 1])
}
  currentItens(cart)
  currentPrice(cart)
})
 
  

