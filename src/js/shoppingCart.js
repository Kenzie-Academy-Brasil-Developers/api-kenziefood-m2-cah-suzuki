let carrinho = document.getElementsByClassName("ul-carrinho")
let storage = []
class ShoppingCart{
    constructor(productList,totalPrice,totalItens){
        this.productList = []
        //TODO função totalPrice é que retorna o valor do preço total passando por todos os itens de productlist e somando
        this.totalPrice = totalPrice
        //TODO função totalItens é que retorna o valor de itens conforme o productList.length
        this.totalItens = totalItens
    }


    showproducts() {
        return this.productList
    }
    
    add(product) {

        let li = document.createElement("li")
        li.className = "carrinho-product"
        li.id = product.id

        let img = document.createElement("img")
        img.src = product.photo
        img.className = "photo"

        let div = document.createElement("div")
        div.className = "carrinho-product-description"
        div.id = product.id

        let h2 = document.createElement("h2")
        h2.innerText = product.name

        let button = document.createElement("button")
        let buttonimg = document.createElement("img")
        buttonimg.src = "img/trash.png"
        buttonimg.className = "delete-button"
        button.className = "delete-button"
        buttonimg.id = product.id
        button.id = product.id
       let quantidade = document.querySelector(".quantidade")
       quantidade.classList.remove("hide")

       let total = document.querySelector(".total")
       total.classList.remove("hide")
    
        let span = document.createElement("span")
        span.innerText = product.category

        let p = document.createElement("p")
        
        p.innerText = "R$ " + product.price.toFixed(2).toString().replace(".", ",")

        this.productList.push(product)
        
        if (this.productList.length === 1) {
            ul[0].innerHTML = ""
        }
        carrinho[0].appendChild(li)
        li.appendChild(img)
        li.appendChild(div)
        div.appendChild(h2)
        h2.appendChild(button)
        button.appendChild(buttonimg)
        div.appendChild(span)
        div.appendChild(p)

        localStorage.setItem(product.id, JSON.stringify(product))
        storage.push(product.id)
        localStorage.setItem("productid", storage)
    }
    delete(evt) {
        let result = 0
       for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id === evt) {
                result = i
            }        
       }
       this.productList.splice(result, 1)

       if(this.productList.length === 0) {
        let div1 = document.createElement("div")
        div1.className = "carrinho-no-product"
        let imgCarrinhoNoProduct = document.createElement("img")
        imgCarrinhoNoProduct.src = "../src/assets/shopping-bag.png"
        let h2box = document.createElement("h2")
        h2box.innerText = "Ops!"
        let pbox = document.createElement("p")
        pbox.innerText = "Por enquanto não temos produtos no carrinho"
        div1.appendChild(imgCarrinhoNoProduct)
        div1.appendChild(h2box)
        div1.appendChild(pbox)
        ul[0].appendChild(div1)
        let quantidade = document.querySelector(".quantidade")
        quantidade.classList.add("hide")
 
        let total = document.querySelector(".total")
        total.classList.add("hide")
        
        
    }
    let index
    for(let i = 0; i < storage.length;i++) {
        if (storage[i] === evt) {
            index = i
        }
    }
    storage.splice(index,1)
    localStorage.productid = storage

    }
    
    //TODO Métodos ADD,DELETE,Functions
}

let cart = new ShoppingCart()

let quantidade = document.getElementById("quantidade")

let ul = document.getElementsByClassName("ul-carrinho")
ul[0].addEventListener('click', (evt) =>{
    let id = evt.target.id
    if(evt.target.className === "delete-button"){
        let element = document.getElementById(id)
        element.remove()
        cart.delete(id - "")
    }
    
    currentItens(cart)
    currentPrice(cart)
})

let price = document.getElementById("price")

function currentItens(cart) {
    quantidade.innerText = cart.showproducts().length
}
function currentPrice (cart) {
    let result = 0
    for(let i = 0; i < cart.showproducts().length; i++) {
        result += cart.showproducts()[i].price
    }
    price.innerText = "R$ " + result.toFixed(2).toString().replace(".", ",") 
    return result
}


const runLocalStorage = () => {
    if (localStorage.length > 0) {
        let ids = localStorage.productid.split(",")
        for (let i = 0; i < ids.length;i++) {
            cart.add(JSON.parse(localStorage[ids[i] - ""]))
        }
    }
    currentItens(cart)
    currentPrice(cart)
}

runLocalStorage()
