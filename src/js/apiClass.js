class ApiClass{
   constructor(){

   }
   
   async fetchProdutos () {
       let response = await fetch("https://kenzie-food-api.herokuapp.com/product")
        return await response.json()
        // response => {
        //   var listaDeProdutos = response.json()
        //   return listaDeProdutos
        // }
    }

    fetchProdutosId (id) {
      return fetch("https://kenzie-food-api.herokuapp.com/product/" + id)
      .then(response => {
        var listaDeProdutos = response.json()
        return listaDeProdutos
      })
    
  }

     postProdutos (data) {
      const response =  fetch("https://kenzie-food-api.herokuapp.com/my/product",{
        method: "post",
        headers:{
          "Content-Type":"application/json",
          Authorization:"Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImlhdCI6MTY0MzEzMjU2MywiZXhwIjoxNjQzOTk2NTYzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.Efp7V278ellXsdZwL5o2tx1aIkIowpXymkWktRUtE-8",
        },
        body:JSON.stringify(data),
      }).then(response => {
        let produtoCriado = response.json()
        console.log(produtoCriado)
        return produtoCriado
      })
    }

    getMeusProdutos () {
      return fetch("https://kenzie-food-api.herokuapp.com/my/product",{
        headers:{
          "Content-Type":"application/json",
          Authorization:"Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImlhdCI6MTY0MzEzMjU2MywiZXhwIjoxNjQzOTk2NTYzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.Efp7V278ellXsdZwL5o2tx1aIkIowpXymkWktRUtE-8",
        },
      })
      .then(response => {
        var listaDeProdutos = response.json()
        return listaDeProdutos
      })
  }

    patchProdutos (data,id) {
      const response =  fetch("https://kenzie-food-api.herokuapp.com/my/product/" + id,{
        method: "patch",
        headers:{
          "Content-Type":"application/json",
          Authorization:"Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImlhdCI6MTY0MzEzMjU2MywiZXhwIjoxNjQzOTk2NTYzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.Efp7V278ellXsdZwL5o2tx1aIkIowpXymkWktRUtE-8",
        },
        body:JSON.stringify(data),
      }).then(response => {
        let produtoCriado = response.json()
        return produtoCriado
      })
    }

    async deleteProdutos(id){
     let response = await fetch("https://kenzie-food-api.herokuapp.com/my/product/" + id,{
                method: "delete",
                headers:{
                  "Content-Type":"application/json",
                  Authorization:"Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImlhdCI6MTY0MzEzMjU2MywiZXhwIjoxNjQzOTk2NTYzLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.Efp7V278ellXsdZwL5o2tx1aIkIowpXymkWktRUtE-8",
                },

          })
          return response
    }

}