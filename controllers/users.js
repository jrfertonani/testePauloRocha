const indexController = {
    listar: ('/users', function(req, res, next) {
        res.render('users');
        
      })
      
};


module.exports = indexController;