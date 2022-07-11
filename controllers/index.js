const indexController = {
    listar: ('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
      })
};


module.exports = indexController;