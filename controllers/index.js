const indexController = {
    listar: (req, res, next) => { 
      var promocao = [
        { 
          "Title":"promocao",
          "Year": "$300",
          "Poster": "https://www.institutotravessia.org.br/wp-content/uploads/2021/10/not-found.png"
        },
        { 
          "Title":"promocao",
          "Year": "$200",
          "Poster": "https://www.institutotravessia.org.br/wp-content/uploads/2021/10/not-found.png"
        }
      ];
        res.render('index',{
          promocao: "promocao",
        });
      }
      
};


module.exports = indexController;