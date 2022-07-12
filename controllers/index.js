const indexController = {
    listar: ('/', function(req, res, next) {
        res.render('index');
      })
};


module.exports = indexController;