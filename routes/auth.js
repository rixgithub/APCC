

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
	  	res.render('userHome', { title: 'Adams Point Community Council', user: req.user.firstName});
	});

	/* POST signup info. */
	app.post('/signup', passport.authenticate('local-signup', {
	        successRedirect: '/',
	 
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

	app.get('/logout', function(req, res) {
    	req.session.destroy(function(err) {
        	res.redirect('/');
    	});
	});

		// GET route for submit page
	app.get('/userHome/submit', isLoggedIn, function(req, res, next) {
		res.render("submit", { title: 'Submit' });
	});

		// GET route for proposals page
	app.get('/userHome/proposals', isLoggedIn, function(req, res, next) {
		res.render("proposals", { title: 'Proposals', email: req.user.email});
	});

	// GET route for chat page
	app.get('/userHome/chat', isLoggedIn, function(req, res, next) {
		res.render("chat", { title: 'Chat' });
	});

};
