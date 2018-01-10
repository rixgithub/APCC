// Requiring our Proposal model
var db = require("../models");

module.exports = function(app,passport) {

	function isLoggedIn(req, res, next) {
	    if (req.isAuthenticated())
	        return next();
	    res.redirect('/');
	}

	// POST route for saving a new proposal
	app.post('/userHome/newProposal', function(req, res, next) {
		db.proposal.create(req.body)
		.then(function(dbPost) {	
			console.log("Saving to database was successful");
		});
	});

	// GET route for getting all proposals
	app.get('/userHome/allProposals', isLoggedIn, function(req, res, next) {

		db.proposal.findAll({})
			.then(function(dbResults) {
				var proposalsObj = {
					proposals: dbResults
        		}
				res.render("proposals", proposalsObj);
			});
	});

    // ***************NEED*******************
	// GET route for getting current proposals
	// app.get('/userHome/currentProposals', isLoggedIn, function(req, res, next) {

	// 	db.proposal.findAll({})
	// 		.then(function(dbResults) {
	// 			var proposalsObj = {
	// 				proposals: dbResults
 //        		}
	// 			res.render("proposals", proposalsObj);
	// 		});
	// });

	// *****************NEED****************
	// GET route for getting all proposals which have not been voted on yet
	// app.get('/userHome/currentProposals', isLoggedIn, function(req, res, next) {

	// 	db.proposal.findAll({})
	// 		.then(function(dbResults) {
	// 			var proposalsObj = {
	// 				proposals: dbResults
 //        		}
	// 			res.render("proposals", proposalsObj);
	// 		});
	// });

    // GET route for getting one proposal
    app.get('/userHome/proposal/:id', function(req, res, next) {
		db.proposal.findOne({
			where: {
			    id: req.params.id
		  	}
		}).then(function(onePropData) {
    		res.json(onePropData);
		});
	});

	//  PUT route for updating one proposal for YES vote
	app.put("/userHome/yesVote/:id", function(req, res, next) {

		db.proposal.update({
			yesVote: req.body.yesVote
		}, {
		    where: {
		      id: req.params.id
		    }
		}).then(function(dbPost) {
		 	
		});

	});

		//  PUT route for updating one proposal for NO vote
	app.put("/userHome/noVote/:id", function(req, res, next) {

		db.proposal.update({
			noVote: req.body.noVote
		}, {
		    where: {
		      id: req.params.id
		    }
		  }).then(function(dbPost) {
		 	
		  });
	});


}