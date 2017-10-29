module.exports = function(sequelize, Sequelize) {
	var Proposal = sequelize.define("proposal", {
		author: {
            type: Sequelize.STRING,
            notEmpty: true
        },
		title: {
            type: Sequelize.STRING,
            notEmpty: true
        },
		body: {
            type: Sequelize.STRING,
            notEmpty: true
        },
		yesVote: {
            type: Sequelize.INTEGER 
        },
	    noVote: {
            type: Sequelize.INTEGER
        },
        
	});
	return Proposal;
}