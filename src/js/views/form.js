import $ from 'jquery'

import "az-styles";
import "bootstrap";

import "../functions.js"

import dpa from "dpa-it";

$(document).ready(function () {

	var dpaIt = new dpa('GHYT-32423432-KJHKJHK-123123123-JHG');

	dpaIt.init('#dpa-container', {
		form_group			: "form-group form-group-lg", 
		form_check_label	: "control-label"
	});

	var submission = {
		customerId	: "ABC123",
		firstName 	: "Simon", 
		lastName 	: "Parsons", 
		email 		: "simon.parsons@sipsoftware.co.uk", 
		mobNumber  	: "+44(0)7721532678"
	};

	$('#submit').click(function(){

		dpaIt.save(submission, 
			function(submission_id) {
				console.log("saved submission " + submission_id);
			}
		);
	})
});
