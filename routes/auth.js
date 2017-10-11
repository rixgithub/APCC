
module.exports = function(app,passport){

	/* GET first login/signup page. */
	app.get('/', function(req, res, next) {
	  res.render('login', { title: 'Adams Point Community Council' });
	});

	/* GET signup page. */
	app.get('/signup', function(req, res, next) {
	  res.render('signup', { title: 'Signup' });
	});

	/* GET user home page. */
	app.get('/userHome', isLoggedIn, function(req, res, next) {
	  res.render('userHome', { title: 'Adams Point Community Council' });
	});

	/* POST signup info. */
	app.post('/signup', passport.authenticate('local-signup', {
	        successRedirect: '/userHome',
	 
	        failureRedirect: '/signup',

	        failureFlash: true 
	    })
	);

	/* POST signup info. */
	app.post('/login', passport.authenticate('local-login', {
	        successRedirect: '/userHome',
	 
	        failureRedirect: '/',

	        failureFlash: true 
	    })
	);

	function isLoggedIn(req, res, next) {
	    if (req.isAuthenticated())
	        return next();

	    res.redirect('/');
	}

}
