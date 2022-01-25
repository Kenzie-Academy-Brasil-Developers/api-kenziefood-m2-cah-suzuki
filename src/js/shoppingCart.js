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
        let cart = document.getElementsByClassName("ul-carrinho")

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


        let span = document.createElement("span")
        span.innerText = product.category

        let p = document.createElement("p")
        p.innerText = "R$" + product.price
        cart[0].appendChild(li)
        li.appendChild(img)
        li.appendChild(div)
        div.appendChild(h2)
        h2.appendChild(button)
        button.appendChild(buttonimg)
        div.appendChild(span)
        div.appendChild(p)

        this.productList.push(product)

    }
    delete(evt) {
        let result = 0
       for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id === evt) {
                result = i
            }        
       }
       this.productList.splice(result, 1)
    }
    //TODO Métodos ADD,DELETE,Functions
}

let ul = document.getElementsByClassName("ul-carrinho")
ul[0].addEventListener('click', (evt) =>{
    let id = evt.target.id
    if(evt.target.className === "delete-button"){
        let element = document.getElementById(id)
        element.remove()
        cart.delete(id - "")
    }

})
let noproduct = document.getElementsByClassName("carrinho-no-product")
function car () {
    if(cart.showproducts.length !== 0) {

    }
}