class ApiClass{
    fetchProdutos () {
        return fetch("https://kenzie-food-api.herokuapp.com/product")
        .then(response => {
          var listaDeProdutos = response.json()
          return listaDeProdutos
        })
        .then(function(listaDeProdutos){
           return listaDeProdutos
        })
      
    }

}