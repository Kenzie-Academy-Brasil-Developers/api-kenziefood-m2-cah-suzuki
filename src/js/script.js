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
