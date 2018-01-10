$(document).ready(function() {

	// modal function when user clicks on a proposal
	$(document).on("click", ".propButton", function() {
	 
	 	var propId = $(this);
	 	propId = propId[0].value;
	    $.ajax({
	        type: "GET",
	        url: "/userHome/proposal/" + propId
	    }).done(function(modalData) {
	    	$(".yesButton").attr("data-id", modalData.id);
	    	$(".yesButton").attr("data-yes", modalData.yesVote);
	    	$(".noButton").attr("data-id", modalData.id);
	    	$(".noButton").attr("data-no", modalData.noVote);
	    	$("#propTitle").append(modalData.title);
	    	$("#propAuthor").append(modalData.author);
	    	$("#propBody").append(modalData.body);
	    	$("#voteTotals").append("Yes: " + modalData.yesVote + "<br><br>");
	    	$("#voteTotals").append("No: " + modalData.noVote);
	    });
	    // opens modal
	    $('#proposalModal').modal();
	    // clears modal for new data in new modal
	    $("#propTitle").html("");
	    $("#propAuthor").html("");
	    $("#propBody").html("");
	    $("#voteTotals").html("");
	    $("#propTitle").html("");
	});

	// function when user clicks on a Yes button inside modal
	$(document).on("click", ".yesButton", function() {
	 	
	 	var buttonData = $(this);

	 	propId = buttonData[0].dataset.id;
	 	var addYesVote = parseInt(buttonData[0].dataset.yes);
	 	addYesVote = addYesVote + 1;

	    $.ajax({
	        type: "PUT",
	        url: "/userHome/yesVote/" + propId,
	        data: {"yesVote": addYesVote }
	    }).done(function(data) {
	    	console.log("Database has been updated");
	    });
	    $('#proposalModal').modal('hide');
	});

		// function when user clicks on a No button inside modal
	$(document).on("click", ".noButton", function() {
	 	
	 	var buttonData = $(this);

	 	propId = buttonData[0].dataset.id;

	 	var addNoVote = parseInt(buttonData[0].dataset.no);
	 	addNoVote = addNoVote + 1;

	    $.ajax({
	        type: "PUT",
	        url: "/userHome/noVote/" + propId,
	        data: {"noVote": addNoVote }
	    }).done(function() {
	    	console.log("Database has been updated");
	    });
	    $('#proposalModal').modal('hide');
	});

	
});