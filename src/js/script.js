const productList = []
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
  })

