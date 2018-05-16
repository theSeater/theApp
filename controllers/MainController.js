const cfg                   = require('config');

const MainController        = {
    
    test : (req, res, next) => {
        res.send('success');
    },

    linker: (req, res, next) => {
        console.log('linker');
        res.send('linked');
    }

}

module.exports.Controller   = MainController;

module.exports.controller   = (app) => {
    app.get('/v1/main/test', MainController.test);
    app.get('/:id', MainController.linker);
}