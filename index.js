const   http					= require('http'),
        express					= require('express'),
        mongoose				= require('mongoose'),
        path					= require('path'),
        bodyParser				= require('body-parser'),
        fs                      = require('fs')
        cfg                     = require('config');

let     schemas                 = require('./database/schemas');


const	app                     = express();
const   app_port                = 4000;
const   passport                = require('passport');

app.use(passport.initialize());
app.use(passport.session());
require('./passport/Auth')(passport);


const	dbPath 		            = `mongodb://${cfg.dbConfig.HOST}:${cfg.dbConfig.PORT}/${cfg.dbConfig.DATABASE}`;
const   db 			            = mongoose.connection;

mongoose.Promise                = require('bluebird');
mongoose.connect(dbPath);

db.on('error', console.error);
db.once('connected',            () => { 
    console.log('connected to mongodb using fupm model');
});
db.once('open',                 () => { 
    schemas                     = new AllSchemas(db); 
});


const   xPolicy			        = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Accessor, AUTHORIZATION');
  	next();
};

app.use(xPolicy);

app.set('port', process.env.PORT || app_port);
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: false, parameterLimit:50000}));

app.all('*',                    (req, res, next) => { 
    req.db = db; next();
});


app.use('/wiki', express.static(path.join(__dirname, 'wiki')));

fs.readdirSync('./controllers').forEach( (file) =>{
    if(file.substr(-3) === '.js' && file.substr(-7) !== 'test.js'){        
        require(`./controllers/${file}`).controller(app);
    }
})

let server = http.createServer(app).listen(app.get('port'), ()=> {
    console.log('Services Started.  Running on port: ' + app.get('port'));
});

server.on('error', onError);

function onError(err) {
    console.log(err);
    if(err.syscall !== 'listen') {
        throw(err);
    }
    res.send(err);
}

module.exports = app;