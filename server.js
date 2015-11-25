var express  	   = require('express'),
	PORT	 	       = process.env.PORT || 3000,
	server	 	     = express(),
	// MONGOURI 	     = process.env.MONGOLAB_URI || "mongodb://localhost:27017",
	// dbname		     	 = "earworm",
	// mongoose 	     = require('mongoose'),
	// Schema 		     = mongoose.Schema,
	ejs            = require('ejs'),
	bodyParser     = require('body-parser'),
  expressLayouts = require('express-ejs-layouts'),
  session 	     = require('express-session'),
  methodOverride = require('method-override'),
  morgan 		     = require('morgan');


/////////////////////////////////////////////////////////////////
//////////////////////////Middleware////////////////////////////
///////////////////////////////////////////////////////////////

server.use(session({
  secret: "SirMixALot",
  resave: false,
  saveUninitialized: true
}));

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(morgan('dev'));
server.use(express.static('./public'));

server.use(expressLayouts);

server.use(methodOverride('_method'));


server.use(bodyParser.urlencoded({
  extended: true
}));

/////////////////////////////////////////////////////////////////
////////////////////mongo/mongoose/MONGOURI/////////////////////
///////////////////////////////////////////////////////////////

// mongoose.connect(MONGOURI + "/" + dbname);
// mongoose.set('debug', false);


/////////////////////////////////////////////////////////////////
/////////////////////ROUTES/////////////////////////////////////
///////////////////////////////////////////////////////////////


server.get('/', function (req, res, next) {
	res.render('index');
});

///you done goofed

// server.use(function (req,res,next) {
// 	res.send("You messed up big time just kidding check for missing semicolon!");
// 	res.end();
// })

/////////////////////////////////////////////////////////////////
/////////////////////server are you there?//////////////////////
///////////////////////////////////////////////////////////////

server.listen(PORT, function (){
	console.log('Yes I am here. Where are you?', PORT)
	console.log("please work");
});
