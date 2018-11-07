	/*  Wizard */
	jQuery(function ($) {
		"use strict";

		$('form#wrapped').attr('action', 'question_send.php');


		$('form#wrapped').on('submit', function() {
		    // do validation here

		    // alert("Hello");

		    if (($("#question_type_id").val().length == 0) || ($("#question_message").val().length == 0)) {

		    	alert("กรุณาเลือกหมวดคำถามและกรอกคำถามด้วยค่ะ!");

		    	return false;
		    }

		    return true;

		    // if()
		    //     return false;
		});



		// $("#wizard_container")
		// .wizard({
		// 	stepsWrapper: "#wrapped",
		// 	submit: ".submit",
		// 	beforeSelect: function (event, state) {

		// 		// if ($('textarea#question_message').val().length != 0) {
		// 		// 	return false;
		// 		// }

				

		// 		// if ($('input#website').val().length != 0) {
		// 		// 	return false;
		// 		// }

		// 		if (!state.isMovingForward)
		// 			return true;
		// 		var inputs = $(this).wizard('state').step.find(':input');
		// 		return !inputs.length || !!inputs.valid();
		// 	}
		// })
		// .validate({
		// 	errorPlacement: function (error, element) {
		// 		if (element.is(':radio') || element.is(':checkbox')) {
		// 			error.insertBefore(element.next());
		// 		} else {
		// 			error.insertAfter(element);
		// 		}
		// 	}
		// });


		// //  progress bar
		// $("#progressbar").progressbar();
		// $("#wizard_container").wizard({
		// 	afterSelect: function (event, state) {

		// 		// alert('Hello');

		// 		$("#progressbar").progressbar("value", state.percentComplete);
		// 		$("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
		// 	}
		// });


	});