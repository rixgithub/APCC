var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var exphbs = require("express-handlebars");
var env = require('dotenv').load();
var flash = require('connect-flash');

// Sets up our express server
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

// Requiring our models for syncing
var db = require('./models');

// Set up a port number and process.env is for Heroku deployment
var PORT = process.env.PORT || 3000;

// handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());

app.use(express.static("./public"));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

//Routes
require('./routes/auth.js')(app,passport);
require("./routes/api.js")(app,passport);

io.on('connection', function(socket){
	
	console.log('a user connected');
	
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

});

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  http.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


