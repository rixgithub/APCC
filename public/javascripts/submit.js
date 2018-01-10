$(document).ready(function() {

		// Getting jQuery references to the post body, title and author
  	var authorInput = $("#author");
  	var titleInput = $("#title");
  	var bodyInput = $("#body");

  	// event listener for form to submit new proposal
	$("#newProposalForm").on("submit", function(event) {
		event.preventDefault();

		var newPost = {
			author: authorInput.val().trim(),
			title: titleInput.val().trim(),
			body: bodyInput.val().trim(),
			noVote: 0,
			yesVote: 0
		}

	    $.post("/userHome/newProposal", newPost, function() {
	    	console.log("new proposal submitted");
	    });

	  //Clearing input boxes
	  	$("#author").val("");
	  	$("#title").val("");
	  	$("#body").val("");
	});


});