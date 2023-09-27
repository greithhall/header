/******************************************************************************************************/
/* 	File: 		hs-custommoodle-2223.js
/*	Type: 		Custom JavaScript

/******************************************************************************************************/

$().ready(function(){



// ===== START: Small UI tweaks =====

	// Remove 'General' as the first heading
	$("h3.sectionname:contains('General')").hide();
	// Add things at the end of each section
	$(".section ul.section").not(':first').append('<li class="activity"><div class="sectionFooter"><a href="#" title="Return to top of the course" class="btn btn-outline-primary btn-sm returnTopBtn"><i class="fa fa-chevron-circle-up"></i> Return to top of the course</a></div></li>');


	// Create a search section
	//$("#searchSection").prepend("<h5><label for='searchbox' class='control-label'>Search this course:</label></h5><div class='row justify-content-center'><input class='form-control col-sm-11' id='searchbox' placeholder='Enter a keyword to find your resources...' type='text' /><button type='button' class='btn btn-outline-primary' id='clearBtn'><i class='fa fa-times' aria-hidden='true'></i> Clear</button></div><div class='row justify-content-center'><span id='counter'></span></div>");
	$("#searchSection").prepend("<h5><label for='searchbox' class='control-label'>Search this course:</label></h5><div class='input-group mb-3'><input type='text' id='searchbox' class='form-control' placeholder='Enter a keyword to find your resources...' aria-label='Search this course' aria-describedby='clearBtn'><div class='input-group-append'><button class='btn btn-outline-secondary' type='button' id='clearBtn'>&times; Clear</button></div></div><div class='row justify-content-center'><span id='counter'></span></div>");

	//$(".sectionbody ul").before("<div class='progress'><div class='progress-bar' role='progressbar' style='width: 25%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>25%</div></div>");
	//$(".sectionbody ul").before("<div id='progressChart'></div>");

	// START: Add a custom 'tag' for the type of activity following its name
	$(".activityinstance img[src*='document']").parent().after("<span class='activityType word'>DOCUMENT</span>");
	$(".activityinstance img[src*='pdf']").parent().after("<span class='activityType pdf'>DOCUMENT</span>");
	$(".activityinstance img[src*='jpeg']").parent().after("<span class='activityType'>IMAGE</span>");
	$(".activityinstance img[src$='png-24']").parent().after("<span class='activityType'>IMAGE</span>");
	$(".activityinstance img[src$='gif-24']").parent().after("<span class='activityType'>IMAGE</span>");
	$(".activityinstance img[src$='html-24']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='powerpoint']").parent().after("<span class='activityType presentation'>PRESENTATION</span>");
	$(".activityinstance img[src$='engageicon.png']").parent().after("<span class='activityType'>RECORDING</span>");
	$(".activityinstance img[src$='r_logo.gif']").parent().after("<span class='activityType'>EXAMSYS</span>");
	$(".activityinstance img[src*='spreadsheet']").parent().after("<span class='activityType'>SPREADSHEET</span>");
	$(".activityinstance img[src*='assign']").parent().after("<span class='activityType'>ASSIGNMENT</span>");
	// The following are all considered as 'ONLINE ACTIVITIES'
	$(".activityinstance img[src*='book']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='chat']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='choice']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='data']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='feedback']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance:not(:first) img[src*='forum']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='glossary']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='h5pactivity']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='imscp']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='kalvidres']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='lesson']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='quiz']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='scorm']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='survey']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='vote']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='wiki']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	$(".activityinstance img[src*='workshop']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");

	// Append a 'VIDEO' tag to items considered video
	$(".activity:contains('ctivity') .activityinstance img[src*='url']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");
	//$(".activity:contains('rlo') .activityinstance img[src*='url'], .activity:contains('RLO') .activityinstance img[src*='url']").parent().after("<span class='activityType'>ONLINE ACTIVITY</span>");

	// Append an 'AUDIO' tag to items considered audio
	$(".activity:contains('udio') .activityinstance img[src*='url']").parent().after("<span class='activityType'>AUDIO</span>");
	// Append a 'VIDEO' tag to items considered video
	$(".activity:contains('ideo') .activityinstance img[src*='url']").parent().after("<span class='activityType'>VIDEO</span>");
	// Append an 'ARTICLE' tag to items considered an article
	$(".activity:contains('rticle') .activityinstance img[src*='url'], .activity:contains('ournal') .activityinstance img[src*='url']").parent().after("<span class='activityType'>ARTICLE</span>");
	// Append a 'WEBSITE' tag to items considered a website
	$(".activity:contains('ebsite') .activityinstance img[src*='url']").parent().after("<span class='activityType'>WEBSITE</span>");

	/*
	$(".activityinstance img[src*='mp3']").parent().after("<span class='activityType'>AUDIO</span>");
	$(".activityinstance img[src*='wav']").parent().after("<span class='activityType'>AUDIO</span>");
	$(".activityinstance img[src*='mpeg']").parent().after("<span class='activityType'>VIDEO</span>");
	$(".activityinstance img[src*='url']").parent().after("<span class='activityType'>WEBSITE</span>");
	$(".activityinstance:contains('udio'), .activityinstance:contains('soundtrack'), .activityinstance:contains('mp3'), .activityinstance:contains('MP3')").parent().after("<span class='activityType'>AUDIO</span>");
	$(".activityinstance:contains('ideo')").parent().after("<span class='activityType'>VIDEO</span>");
	$(".activity:contains('ournal'), .activityinstance:contains('rticle')").append("<span class='activityType'>ARTICLE</span>");
	//$(".activity:contains('ideo'), .activityinstance:contains('film'), .activityinstance:contains('clip')").append("<span class='activityType'>VIDEO</span>");*/

	// Append 'MS TEAMS' tag and icon to items representing MS Teams
	$(".activityinstance:contains('MS Teams'), .activityinstance:contains('Microsoft Teams')").append("<span class='activityType teams'>MS TEAMS</span>");
	$(".activity:contains('MS Teams'), .activity:contains('Microsoft Teams')").each(function() {
		$(this).find('img:first').replaceWith('<img src="https://www.nottingham.ac.uk/healthsciences/app-resources/vle-resources/images/moodle-colour-teams-logo.png" alt="Microsoft Teams Meeting" class="iconlarge activityicon" />');
	});


	/* RUBRICS
	$(".activity:contains('.rbc'), .activityinstance:contains('.rbc'), .activityinstance:contains('ubric')").append("<span class='activityType'>RUBRIC</span>");
	...*/

	// END: Add a custom 'tag' for the type of activity following its name



// ===== END: Small UI tweaks =====


// ===== START: Create and display search function =====

let activities = document.querySelectorAll('.activity'); // Check 'activities' for future-proofing in Moodle 4.0

function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
		var found = 0;
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < activities.length; i++) {
        if(activities[i].textContent.toLowerCase().includes(search_query.toLowerCase())) {
            activities[i].classList.remove("hidden"); // Check BS class for future-proofing in Moodle 4.0
						found++;

						if (search_query.length > 2) {
							$("#counter").html("<i class='fa fa-check' aria-hidden='true' style='color: green;'></i> " + found + " result(s) found");
							activities[i].classList.add("highlight");
						}
						else if (search_query.length > 0 && search_query.length <= 2) {
							$("#counter").html("Search term too short");
							activities[i].classList.remove("highlight");
						}
						else if (search_query.length == 0) {
							$("#counter").html("");
							activities[i].classList.remove("highlight");
						}
						else {
							$("#counter").html("No results found");
						}
        }
				else {
            activities[i].classList.add("hidden"); // Check BS class for future-proofing in Moodle 4.0
						//console.log("There are activities found: " + found);
        }
				console.log("There are activities found: " + found);
    }
}

// Add a little delay to the search
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
		let searchTerm = searchInput.value;
		//console.log("Key pressed...");
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
		//console.log("Search string length: " + searchTerm.length);
		if (searchTerm.length < 3) {
			closeAllSections();
		}
		else {
			openAllSections();
		}
});


// Actions for clicking on the Clear button as part of the Search section
$("#clearBtn").click(function(){
	// Clear the search field
	$("#searchbox").val('');
	// Reset the items found counter
	$("#counter").html('');
	// Close all sections
	closeAllSections();
	liveSearch();
});


// Vanilla JS solution for longer lists. Mine had 1700 items.
/*
let timer;
const input = document.querySelector("#searchbox");
input.addEventListener("keyup", function (liveSearch) {
clearTimeout(timer);
timer = setTimeout(() => {
const items = document.querySelectorAll(".link_button");
for (let item of items) {
item.style.display = item.textContent.includes(liveSearch.target.value)
? "inline-block"
: "none";
}
}, 1000);
});
*/

// ===== END: Create and display search function =====


// ===== START: Events to open and close sections/topics =====

// Actions for clicking on the Assessment button
$("#assessmentBtn").click(function(){
	// Open only the Assessment section
	$('.sectionhead:contains("Assessment")').next().addClass("sectionopen");
	$('.sectionhead:contains("Assessment")').next().next().addClass("sectionopen");
	$('.sectionhead:contains("Assessment") span').removeClass("toggle_closed").addClass("toggle_open");

		$('html, body').animate({
			scrollTop: $('.sectionhead:contains("Assessment")').offset().top
		}, 800);
});

// Actions for clicking on the Your Feedback button
$("#feedbackBtn").click(function(){
	$("#feedbackModal").modal();
});

// Actions for clicking on the Upcoming button
$("#upcomingBtn").click(function(){
	$("#upcomingModal").modal();
});

$("#upcomingCourse").click(function(){
	// Open the calendar for the specific course
	let currentURL = window.location.href;
	var courseID = currentURL.split('id=')[1].replace(/\D/g, '');
		//console.log("Course ID is: " + currentURL.split('id=')[1].replace(/\D/g, ''));
		//console.log('https://moodle.nottingham.ac.uk/calendar/view.php?view=month&course=' + courseID);
	// Redirect to calendar with the course code in the URL
	window.location.href = 'https://moodle.nottingham.ac.uk/calendar/view.php?view=month&course=' + courseID;
});

$("#upcomingAll").click(function(){
	// Open the calendar for all courses in month view
	let url = 'https://moodle.nottingham.ac.uk/calendar/view.php?view=month';
	window.open(url, '_blank').focus();
});

function openAllSections() {
	// Open all collapsed topic sections
	$("[id^=toggledsection-]").addClass("sectionopen");
}

function closeAllSections() {
	// Close all collapsed topic sections
	$("[id^=toggledsection-]").removeClass("sectionopen");
}

function hideTourBtn() {
	$("#tourBtn").css("display", "none !important");
}

// ===== START: Events to open and close sections/topics =====


// ===== START: Create and display progress charts =====
/*
// Declare global variables
var numItems, numCheckedItems, percentComplete, countChecked, countUnchecked;
var uncheckedLectureItems, uncheckedSeminarItems, uncheckedOnlineActivityItems, uncheckedPracticalItems, uncheckedWorkshopItems;
var checkedLectureItems, checkedSeminarItems, checkedOnlineActivityItems, checkedPracticalItems, checkedWorkshopItems;
var totalLectureItems, totalSeminarItems, totalOnlineActivityItems, totalPracticalItems, totalWorkshopItems;
var completeLectures, completeSeminars, completeOAs, completePracticals, completeWorkshops;

function countElements() {
	// Count the amount of checked and unchecked items in the course
	countChecked = $("img[alt*='Completed']").filter(function() { return $(this); }).length;
	countUnchecked = $("img[alt*='Not completed']").filter(function() { return $(this); }).length;

	// Count the amount of checked and unchecked for each type of activity in the course
	uncheckedLectureItems = $("img[alt*='Not completed'][alt*='[L]']").filter(function() { return $(this); }).length;
	uncheckedSeminarItems = $("img[alt*='Not completed'][alt*='[S]']").filter(function() { return $(this); }).length;
	uncheckedOnlineActivityItems = $("img[alt*='Not completed'][alt*='[OA]']").filter(function() { return $(this); }).length;

	uncheckedOnlineActivityItems = $(".activity:contains('ONLINE ACTIVITY') img[alt*='Not completed']").filter(function() { return $(this); }).length;

	checkedOnlineActivityItems = $(".activity:contains('ONLINE ACTIVITY') img[alt*='Completed']").filter(function() { return $(this); }).length;

	uncheckedPracticalItems = $("img[alt*='Not completed'][alt*='[P]']").filter(function() { return $(this); }).length;
	uncheckedWorkshopItems = $("img[alt*='Not completed'][alt*='[W]']").filter(function() { return $(this); }).length;
	checkedLectureItems = $("img[alt*='Completed'][alt*='[L]']").filter(function() { return $(this); }).length;
	checkedSeminarItems = $("img[alt*='Completed'][alt*='[S]']").filter(function() { return $(this); }).length;
	checkedOnlineActivityItems = $("img[alt*='Completed'][alt*='[OA]']").filter(function() { return $(this); }).length;
	checkedPracticalItems = $("img[alt*='Completed'][alt*='[P]']").filter(function() { return $(this); }).length;
	checkedWorkshopItems = $("img[alt*='Completed'][alt*='[W]']").filter(function() { return $(this); }).length;

	totalLectureItems = checkedLectureItems + uncheckedLectureItems;
	totalSeminarItems = checkedSeminarItems + uncheckedSeminarItems;
	totalOnlineActivityItems = checkedOnlineActivityItems + uncheckedOnlineActivityItems;
	totalPracticalItems = checkedPracticalItems + uncheckedPracticalItems;
	totalWorkshopItems = checkedWorkshopItems + uncheckedWorkshopItems;

	completeLectures = Math.round((checkedLectureItems/totalLectureItems) * 100);
	completeSeminars = Math.round((checkedSeminarItems/totalSeminarItems) * 100);
	completeOAs = Math.round((checkedOnlineActivityItems/totalOnlineActivityItems) * 100);
	completePracticals = Math.round((checkedPracticalItems/totalPracticalItems) * 100);
	completeWorkshops = Math.round((checkedWorkshopItems/totalWorkshopItems) * 100);

	console.log("Checked Lectures: " + checkedLectureItems + ", Unchecked Lectures: " + uncheckedLectureItems + ", Total: " + totalLectureItems + ", Completion: " + completeLectures + "%" );
	console.log("Checked Seminars: " + checkedSeminarItems + ", Unchecked Seminars: " + uncheckedSeminarItems + ", Total: " + totalSeminarItems + ", Completion: " + completeSeminars + "%");
	console.log("Checked OAs: " + checkedOnlineActivityItems + ", Unchecked OAs: " + uncheckedOnlineActivityItems + ", Total: " + totalOnlineActivityItems + ", Completion: " + completeOAs + "%");
	console.log("Checked Practicals: " + checkedPracticalItems + ", Unchecked Practicals: " + uncheckedPracticalItems + ", Total: " + totalPracticalItems + ", Completion: " + completePracticals + "%");
	console.log("Checked Workshops: " + checkedWorkshopItems + ", Unchecked Workshops: " + uncheckedWorkshopItems + ", Total: " + totalWorkshopItems + ", Completion: " + completeWorkshops + "%");

	// Display output for count of each type of activity
	console.log("Blend of learning items present:  [Lecture, " + totalLectureItems + "], [Seminar, " + totalSeminarItems + "], [Guided Independent Study, " + totalOnlineActivityItems + "], [Practical, " + totalPracticalItems + "], [Workshop, " + totalWorkshopItems + "]" );
}

function updateProgress() {
	'use strict';

	// Display information only if module completion data exists...
	if ( ($("input[name='completionstate']").length > 0) || ($(".autocompletion").length > 0) ) {
		// Target all completion available
		numItems = ($("input[name='completionstate']").length) + ($(".autocompletion").length);
		numCheckedItems = ($("input[name='completionstate'][value='0']").length) + ($("img[src*='completion-auto-y']").length);

		// Check values to avoid a NaN percentage when 0/0
		if ((numCheckedItems !== 0) && (numItems !== 0)) {
			percentComplete = numCheckedItems/numItems;
			//percentComplete = (numCheckedItems/numItems)*100;
		}
		else {
			percentComplete = 0;
		}
		countElements();
		displayProgress();
		$("#lectureProgress").css('width', completeLectures+"%");
		$("#seminarProgress").css('width', completeSeminars+"%");
		$("#OnlineActivityProgress").css('width', completeOAs+"%");
		$("#practicalProgress").css('width', completePracticals+"%");
		$("#workshopProgress").css('width', completeWorkshops+"%");
	}

	else {
		// Display message to say that no module completion data exists
		$("#progressChart").html("<p>Progress cannot be determined as there are currently no activities with module completion tracking enabled.</p>");
	}
}

updateProgress();

$("button").click(function() {
	'use strict';
	setTimeout(function() {
		updateProgress();
	}, 900); //wait 0.9 second before displaying
});


function displayProgress() {

	if ((document.location.href.indexOf('&notifyeditingon=1') > -1 )) {
		$("#progressChart").replaceWith('<div class="alert alert-info"><em><strong>Your Progress</strong> information is not available in editing mode.</em></div>');
	}
	else {
		$("#progressChart").html("<div class='container'><div class='row'><div class='col-md-12 p-4'><h5>Your progress:</h5><p>You have completed " + numCheckedItems + " of " + numItems + " learning activities. <a href='#' data-toggle='modal' data-target='#yourProgressModal'><span class='text-info fa fa-question-circle'></span></a></p><div class='progress'><div id='lectureProgress' class='progress-bar bg-warning' role='progressbar' aria-valuenow='" + completeLectures + "' style='width: 0%;' aria-valuemin='0' aria-valuemax='100'></div></div><div class='small'><span class='sr-only'>Lecture progress:</span> <strong>" + completeLectures + "</strong>% lectures complete (" + checkedLectureItems + "/" + totalLectureItems + ")</div><div class='progress'><div id='seminarProgress' class='progress-bar bg-info' role='progressbar' aria-valuenow='" + completeSeminars + "' style='width: 0%;' aria-valuemin='0' aria-valuemax='100'></div></div><div class='small'><span class='sr-only'>Seminar progress:</span> <strong>" + completeSeminars + "</strong>% seminars complete (" + checkedSeminarItems + "/" + totalSeminarItems + ")</div><div class='progress'><div id='OnlineActivityProgress' class='progress-bar bg-success' role='progressbar' aria-valuenow='" + completeOAs + "' style='width: 0%;' aria-valuemin='0' aria-valuemax='100'></div></div><div class='small'><span class='sr-only'>OA progress:</span> <strong>" + completeOAs + "</strong>% guided independent study complete (" + checkedOnlineActivityItems + "/" + totalOnlineActivityItems + ")</div><div class='progress'><div id='practicalProgress' class='progress-bar bg-primary' role='progressbar' aria-valuenow='" + completePracticals + "' style='width: 0%;' aria-valuemin='0' aria-valuemax='100'></div></div><div class='small'><span class='sr-only'>Practical progress:</span> <strong>" + completePracticals + "</strong>% practicals complete (" + checkedPracticalItems + "/" + totalPracticalItems + ")</div><div class='progress'><div id='workshopProgress' class='progress-bar bg-dark' role='progressbar' aria-valuenow='" + completeWorkshops + "' style='width: 0%;' aria-valuemin='0' aria-valuemax='100'></div></div><div class='small'><span class='sr-only'>Workshop progress:</span> <strong>" + completeWorkshops + "</strong>% workshops complete (" + checkedWorkshopItems + "/" + totalWorkshopItems + ")</div><div class='modal fade' id='yourProgressModal' style='color: #4a4a4a;' tabindex='-1' role='dialog' aria-labelledby='yourProgressModalLabel'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='yourProgressModalLabel'>Your Progress</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'><p>A tick next to an activity name is used to indicate when the activity is complete. This contributes to a simple method of tracking your progress through the module.</p><div class='table-responsive'><table class='table table-condensed table-bordered'><tr><td width='30%'><img src='https://www.nottingham.ac.uk/healthsciences/app-resources/vle-resources/images/auto-complete.png'><i class='fa fa-long-arrow-right' aria-hidden='true'></i><img src='https://www.nottingham.ac.uk/healthsciences/app-resources/vle-resources/images/auto-complete-marked.png'><i class='fa fa-magic' aria-hidden='true'></i></td><td>If a blank dotted box is shown, a tick will appear automatically when you have completed the activity according to conditions set by the module team.</td></tr><tr><td width='30%'><img src='https://www.nottingham.ac.uk/healthsciences/app-resources/vle-resources/images/manual-complete.png'><i class='fa fa-long-arrow-right' aria-hidden='true'></i><img src='https://www.nottingham.ac.uk/healthsciences/app-resources/vle-resources/images/manual-complete-marked.png'><i class='fa fa-hand-o-up' aria-hidden='true'></i></td><td>If a blank solid box is shown, you can click it to tick the box when you have completed the activity (clicking it again removes the tick if you change your mind).</td></tr></table></div></div></div></div></div>");
	}
}
*/
// ===== END: Create and display progress charts =====


	/* START activity feedback links
	$(".activity:contains('Learning Activity Feedback')").each(function() {
				$(this).find('img:first').replaceWith('<span class="fa-stack fa-lg psr-feedback-icon-color" aria-hidden="true"> <i class="fa fa-certificate fa-stack-2x"></i> <i class="fa fa-comments-o fa-1x fa-stack-1x fa-inverse"></i> </span>');
	});
	// END activity feedback links */

	/* START badges / labels
	$('.provided').html('Provided <i class="fa fa-check-square-o"></i>');
	$('.provided').addClass('psr-notification-badge');

	$('.not_provided').html('Not Provided <i class="fa fa-times-circle-o"></i>');
	$('.not_provided').addClass('psr-notification-badge');

	$('.video').html('Video Resources <i class="fa fa-film"></i>');
	$('.video').addClass('psr-notification-badge');

	$('.medscape').html('Medscape Resources <i class="fa fa-caret-square-o-left fa-flip-horizontal"></i>');
	$('.medscape').addClass('psr-notification-badge');

	$('.compulsory').html('<span class="compulsory2">Compulsory <i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>');
	$('.compulsory').addClass('psr-notification-badge');

	// END badges / labels */


	// ===== START: Display a website tour of course site =====
	/* Based on tour implementation provided by Shepherd.js 		*/
	/* DOCS: https://shepherdjs.dev/docs/tutorial-02-usage.html */

	const tour = new Shepherd.Tour({
	  useModalOverlay: true,
	  defaultStepOptions: {
	    classes: 'shadow-md bg-purple-dark',
			cancelIcon: {
				enabled: true
			},
	  }
	});

	tour.addStep({
	  id: 'page-width',
	  text: "All course content is incorporated into menu buttons or topics.",
		title: "<span class='circle'>1</span> Full Page Display",
	  attachTo: {
	    element: '.content',
	    on: 'top'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
				disabled: true,
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'menubar-full',
	  text: "The course menu buttons consistently offer a focal point of information and support for your studies.",
		title: "<span class='circle'>2</span> Course Menu Bar",
	  attachTo: {
	    element: '#menuBar',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'menubar-announcements',
	  text: "This is the primary place for important communications from your tutors. You will also receive announcements via your University email account.",
		title: "<span class='circle'>3</span> Announcements",
	  attachTo: {
	    element: '.bd-highlight:nth-child(1)',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'menubar-courseinfo',
	  text: "This is where you will find key course information such as course lead details, handbook, reading list and timetable.",
		title: "<span class='circle'>4</span> Course Information",
	  attachTo: {
	    element: '.bd-highlight:nth-child(2)',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'menubar-upcoming',
	  text: "This is where you can view future events outlined within your course(s) such as online activities or assignments.",
		title: "<span class='circle'>5</span> Upcoming Events",
	  attachTo: {
	    element: '.bd-highlight:nth-child(3)',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'menubar-assessment',
	  text: "This is where you will find relevant assessment information such as submission links and extension requests.",
		title: "<span class='circle'>6</span> Assessment",
	  attachTo: {
	    element: '.bd-highlight:nth-child(4)',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'menubar-studytools',
	  text: "This is where you will find study tools and resources specific to your course such as Echo and MS Teams.",
		title: "<span class='circle'>7</span> Study Tools ",
	  attachTo: {
	    element: '.bd-highlight:nth-child(5)',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'menubar-help',
	  text: "This is where you can access a range of Moodle help resources.",
		title: "<span class='circle'>8</span> Help",
	  attachTo: {
	    element: '.bd-highlight:nth-child(6)',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'searchbar',
	  text: "Can't find what you're looking for? Enter the name or description to find your activity or resource.",
		title: "<span class='circle'>9</span> Course Search",
	  attachTo: {
	    element: '#searchSection',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'sections',
	  text: "These are your learning content sections. Open a section to find a variety of content such as lecture presentations and online activities.",
		title: "<span class='circle'>10</span> Learning Content Sections",
	  attachTo: {
	    element: '#section-1',
	    on: 'bottom'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
	    {
	      text: "<i class='fa fa-angle-right' aria-hidden='true'></i> Next",
	      action: tour.next
	    }
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	tour.addStep({
	  id: 'tour-button',
	  text: "This is the end of your course tour. You can return to this at any point in the future.",
		title: "<span class='circle'>11</span> Course Tour",
	  attachTo: {
	    element: '#tourBtn',
	    on: 'top'
	  },
	  classes: 'example-step-extra-class',
	  buttons: [
			{
	      text: "<i class='fa fa-angle-left' aria-hidden='true'></i> Back",
	      action: tour.back
	    },
			{
				text: "<i class='fa fa-flag-checkered' aria-hidden='true'></i> Complete",
				secondary: true,
				action: function() {
								window.scrollTo(0, 0);
								console.log("Tour is now complete");
								$('.navbar, #page-navbar').show();
								$('body').css('background', 'transparent url(/theme/image.php/nottingham_mhs/theme/1652377230/bg) no-repeat center bottom fixed').css('background-size', 'cover');
								tour.complete();
							}
			}
	  ],
		when: {
			show() {
				const currentStepElement = tour.currentStep.el;
				const footer = currentStepElement.querySelector('.shepherd-footer');
				const progress = document.createElement('span');
				progress.className = 'shepherd-progress';
				progress.innerText = `${tour.steps.indexOf(tour.currentStep) + 1} of ${tour.steps.length}`;
				footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button:last-child'));
			}
		},
		scrollTo: true
	});

	$("#tourBtn").click(function() {
		$('.navbar, #page-navbar').hide();
		$('body').css('background', '#696969');
		tour.start();
	});

	['close', 'cancel'].forEach(event => tour.on(event, () => {
		window.scrollTo(0, 0);
		console.log("Tour is now complete");
		$('.navbar, #page-navbar').show();
		$('body').css('background', 'transparent url(/theme/image.php/nottingham_mhs/theme/1652377230/bg) no-repeat center bottom fixed').css('background-size', 'cover');
		tour.complete();
	}));

});


/*! shepherd.js 8.3.1 */
/* https://cdn.jsdelivr.net/npm/shepherd.js@8.3.1/dist/js/shepherd.min.js */
'use strict';(function(G,ca){"object"===typeof exports&&"undefined"!==typeof module?module.exports=ca():"function"===typeof define&&define.amd?define(ca):(G="undefined"!==typeof globalThis?globalThis:G||self,G.Shepherd=ca())})(this,function(){function G(a,b){return!1!==b.clone&&b.isMergeableObject(a)?V(Array.isArray(a)?[]:{},a,b):a}function ca(a,b,c){return a.concat(b).map(function(a){return G(a,c)})}function tb(a){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(a).filter(function(b){return a.propertyIsEnumerable(b)}):
[]}function Ia(a){return Object.keys(a).concat(tb(a))}function Ja(a,b){try{return b in a}catch(c){return!1}}function ub(a,b,c){var d={};c.isMergeableObject(a)&&Ia(a).forEach(function(b){d[b]=G(a[b],c)});Ia(b).forEach(function(e){if(!Ja(a,e)||Object.hasOwnProperty.call(a,e)&&Object.propertyIsEnumerable.call(a,e))if(Ja(a,e)&&c.isMergeableObject(b[e])){if(c.customMerge){var f=c.customMerge(e);f="function"===typeof f?f:V}else f=V;d[e]=f(a[e],b[e],c)}else d[e]=G(b[e],c)});return d}function V(a,b,c){c=
c||{};c.arrayMerge=c.arrayMerge||ca;c.isMergeableObject=c.isMergeableObject||vb;c.cloneUnlessOtherwiseSpecified=G;var d=Array.isArray(b),e=Array.isArray(a);return d!==e?G(b,c):d?c.arrayMerge(a,b,c):ub(a,b,c)}function W(a){return"function"===typeof a}function da(a){return"string"===typeof a}function Ka(a){let b=Object.getOwnPropertyNames(a.constructor.prototype);for(let c=0;c<b.length;c++){let d=b[c],e=a[d];"constructor"!==d&&"function"===typeof e&&(a[d]=e.bind(a))}return a}function wb(a,b){return c=>
{if(b.isOpen()){let d=b.el&&c.currentTarget===b.el;(void 0!==a&&c.currentTarget.matches(a)||d)&&b.tour.next()}}}function xb(a){let {event:b,selector:c}=a.options.advanceOn||{};if(b){let d=wb(c,a),e;try{e=document.querySelector(c)}catch(f){}if(void 0===c||e)e?(e.addEventListener(b,d),a.on("destroy",()=>e.removeEventListener(b,d))):(document.body.addEventListener(b,d,!0),a.on("destroy",()=>document.body.removeEventListener(b,d,!0)));else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`)}else return console.error("advanceOn was defined, but no event name was passed.")}
function B(a){return a?(a.nodeName||"").toLowerCase():null}function z(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function ea(a){var b=z(a).Element;return a instanceof b||a instanceof Element}function y(a){var b=z(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function La(a){if("undefined"===typeof ShadowRoot)return!1;var b=z(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}function F(a){return a.split("-")[0]}
function X(a){a=a.getBoundingClientRect();return{width:a.width,height:a.height,top:a.top,right:a.right,bottom:a.bottom,left:a.left,x:a.left,y:a.top}}function ta(a){var b=X(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function Ma(a,b){var c=b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&La(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}
function H(a){return z(a).getComputedStyle(a)}function L(a){return((ea(a)?a.ownerDocument:a.document)||window.document).documentElement}function la(a){return"html"===B(a)?a:a.assignedSlot||a.parentNode||(La(a)?a.host:null)||L(a)}function Na(a){return y(a)&&"fixed"!==H(a).position?a.offsetParent:null}function fa(a){for(var b=z(a),c=Na(a);c&&0<=["table","td","th"].indexOf(B(c))&&"static"===H(c).position;)c=Na(c);if(c&&("html"===B(c)||"body"===B(c)&&"static"===H(c).position))return b;if(!c)a:{c=-1!==
navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!y(a)||"fixed"!==H(a).position)for(a=la(a);y(a)&&0>["html","body"].indexOf(B(a));){var d=H(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===d.willChange||c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function ua(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function Oa(a){return Object.assign({},
{top:0,right:0,bottom:0,left:0},a)}function Pa(a,b){return b.reduce(function(b,d){b[d]=a;return b},{})}function Qa(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.offsets,h=a.position,k=a.gpuAcceleration,m=a.adaptive;a=a.roundOffsets;if(!0===a){a=f.y;var g=window.devicePixelRatio||1;a={x:ma(ma(f.x*g)/g)||0,y:ma(ma(a*g)/g)||0}}else a="function"===typeof a?a(f):f;g=a;a=g.x;a=void 0===a?0:a;g=g.y;g=void 0===g?0:g;var l=f.hasOwnProperty("x");f=f.hasOwnProperty("y");var p="left",t="top",A=window;
if(m){var C=fa(c),u="clientHeight",D="clientWidth";C===z(c)&&(C=L(c),"static"!==H(C).position&&(u="scrollHeight",D="scrollWidth"));"top"===e&&(t="bottom",g-=C[u]-d.height,g*=k?1:-1);"left"===e&&(p="right",a-=C[D]-d.width,a*=k?1:-1)}c=Object.assign({position:h},m&&yb);if(k){var v;return Object.assign({},c,(v={},v[t]=f?"0":"",v[p]=l?"0":"",v.transform=2>(A.devicePixelRatio||1)?"translate("+a+"px, "+g+"px)":"translate3d("+a+"px, "+g+"px, 0)",v))}return Object.assign({},c,(b={},b[t]=f?g+"px":"",b[p]=
l?a+"px":"",b.transform="",b))}function na(a){return a.replace(/left|right|bottom|top/g,function(a){return zb[a]})}function Ra(a){return a.replace(/start|end/g,function(a){return Ab[a]})}function va(a){a=z(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function wa(a){return X(L(a)).left+va(a).scrollLeft}function xa(a){a=H(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function Sa(a){return 0<=["html","body","#document"].indexOf(B(a))?a.ownerDocument.body:
y(a)&&xa(a)?a:Sa(la(a))}function ha(a,b){var c;void 0===b&&(b=[]);var d=Sa(a);a=d===(null==(c=a.ownerDocument)?void 0:c.body);c=z(d);d=a?[c].concat(c.visualViewport||[],xa(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(ha(la(d)))}function ya(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function Ta(a,b){if("viewport"===b){b=z(a);var c=L(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||
(e=b.offsetLeft,f=b.offsetTop));a={width:d,height:c,x:e+wa(a),y:f};a=ya(a)}else y(b)?(a=X(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=L(a),a=L(f),d=va(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=E(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=E(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+wa(f),d=-d.scrollTop,
"rtl"===H(b||a).direction&&(f+=E(a.clientWidth,b?b.clientWidth:0)-c),a=ya({width:c,height:e,x:f,y:d}));return a}function Bb(a){var b=ha(la(a)),c=0<=["absolute","fixed"].indexOf(H(a).position)&&y(a)?fa(a):a;return ea(c)?b.filter(function(a){return ea(a)&&Ma(a,c)&&"body"!==B(a)}):[]}function Cb(a,b,c){b="clippingParents"===b?Bb(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(b,c){c=Ta(a,c);b.top=E(c.top,b.top);b.right=M(c.right,b.right);b.bottom=M(c.bottom,b.bottom);b.left=E(c.left,b.left);return b},
Ta(a,c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;c.x=c.left;c.y=c.top;return c}function Ua(a){var b=a.reference,c=a.element,d=(a=a.placement)?F(a):null;a=a?a.split("-")[1]:null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?ua(d):null;if(null!=d)switch(f="y"===d?"height":"width",
a){case "start":e[d]-=b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/2}return e}function ia(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var h=c.altBoundary,k=void 0===h?!1:h;c=c.padding;c=void 0===c?0:c;c=Oa("number"!==typeof c?c:Pa(c,ja));var m=a.elements.reference;h=a.rects.popper;k=a.elements[k?"popper"===d?"reference":"popper":
d];e=Cb(ea(k)?k:k.contextElement||L(a.elements.popper),e,f);f=X(m);k=Ua({reference:f,element:h,strategy:"absolute",placement:b});h=ya(Object.assign({},h,k));f="popper"===d?h:f;var g={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var l=a[b];Object.keys(g).forEach(function(a){var b=0<=["right","bottom"].indexOf(a)?1:-1,c=0<=["top","bottom"].indexOf(a)?"y":"x";g[a]+=l[c]*b})}return g}function Db(a,
b){void 0===b&&(b={});var c=b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,h=b.allowedAutoPlacements,k=void 0===h?Va:h,m=b.placement.split("-")[1];b=m?f?Wa:Wa.filter(function(a){return a.split("-")[1]===m}):ja;f=b.filter(function(a){return 0<=k.indexOf(a)});0===f.length&&(f=b);var g=f.reduce(function(b,f){b[f]=ia(a,{placement:f,boundary:c,rootBoundary:d,padding:e})[F(f)];return b},{});return Object.keys(g).sort(function(a,b){return g[a]-g[b]})}function Eb(a){if("auto"===F(a))return[];
var b=na(a);return[Ra(a),b,Ra(b)]}function Xa(a,b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function Ya(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Fb(a,b,c){void 0===c&&(c=!1);var d=L(b);a=X(a);var e=y(b),f={scrollLeft:0,scrollTop:0},h={x:0,y:0};if(e||!e&&!c){if("body"!==B(b)||xa(d))f=b!==z(b)&&y(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:va(b);y(b)?(h=
X(b),h.x+=b.clientLeft,h.y+=b.clientTop):d&&(h.x=wa(d))}return{x:a.left+f.scrollLeft-h.x,y:a.top+f.scrollTop-h.y,width:a.width,height:a.height}}function Gb(a){function b(a){d.add(a.name);[].concat(a.requires||[],a.requiresIfExists||[]).forEach(function(a){d.has(a)||(a=c.get(a))&&b(a)});e.push(a)}var c=new Map,d=new Set,e=[];a.forEach(function(a){c.set(a.name,a)});a.forEach(function(a){d.has(a.name)||b(a)});return e}function Hb(a){var b=Gb(a);return Ib.reduce(function(a,d){return a.concat(b.filter(function(a){return a.phase===
d}))},[])}function Jb(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function Kb(a){var b=a.reduce(function(a,b){var c=a[b.name];a[b.name]=c?Object.assign({},c,b,{options:Object.assign({},c.options,b.options),data:Object.assign({},c.data,b.data)}):b;return a},{});return Object.keys(b).map(function(a){return b[a]})}function Za(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(a){return!(a&&
"function"===typeof a.getBoundingClientRect)})}function za(){za=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return za.apply(this,arguments)}function Lb(){return[{name:"applyStyles",fn({state:a}){Object.keys(a.elements).forEach(b=>{if("popper"===b){var c=a.attributes[b]||{},d=a.elements[b];Object.assign(d.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"});
Object.keys(c).forEach(a=>{let b=c[a];!1===b?d.removeAttribute(a):d.setAttribute(a,!0===b?"":b)})}})}},{name:"computeStyles",options:{adaptive:!1}}]}function Mb(a){let b=Lb(),c={placement:"top",strategy:"fixed",modifiers:[{name:"focusAfterRender",enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{a.el&&a.el.focus()},300)}}]};return c=za({},c,{modifiers:Array.from(new Set([...c.modifiers,...b]))})}function $a(a){return da(a)&&""!==a?"-"!==a.charAt(a.length-1)?`${a}-`:a:""}function Aa(a){a=a.options.attachTo||
{};let b=Object.assign({},a);if(da(a.element)){try{b.element=document.querySelector(a.element)}catch(c){}b.element||console.error(`The element for this Shepherd step was not found ${a.element}`)}return b}function Ba(){let a=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,b=>{let c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==b?c:c&3|8).toString(16)})}function Nb(a,b){let c={modifiers:[{name:"preventOverflow",options:{altAxis:!0,tether:!1}},{name:"focusAfterRender",
enabled:!0,phase:"afterWrite",fn(){setTimeout(()=>{b.el&&b.el.focus()},300)}}],strategy:"absolute"};b.isCentered()?c=Mb(b):c.placement=a.on;(a=b.tour&&b.tour.options&&b.tour.options.defaultStepOptions)&&(c=ab(a,c));return c=ab(b.options,c)}function ab(a,b){if(a.popperOptions){let c=Object.assign({},b,a.popperOptions);if(a.popperOptions.modifiers&&0<a.popperOptions.modifiers.length){let d=a.popperOptions.modifiers.map(a=>a.name);b=b.modifiers.filter(a=>!d.includes(a.name));c.modifiers=Array.from(new Set([...b,
...a.popperOptions.modifiers]))}return c}return b}function x(){}function Ob(a,b){for(let c in b)a[c]=b[c];return a}function Y(a){return a()}function bb(a){return"function"===typeof a}function I(a,b){return a!=a?b==b:a!==b||a&&"object"===typeof a||"function"===typeof a}function w(a){a.parentNode.removeChild(a)}function cb(a){return document.createElementNS("http://www.w3.org/2000/svg",a)}function oa(a,b,c,d){a.addEventListener(b,c,d);return()=>a.removeEventListener(b,c,d)}function q(a,b,c){null==c?
a.removeAttribute(b):a.getAttribute(b)!==c&&a.setAttribute(b,c)}function db(a,b){let c=Object.getOwnPropertyDescriptors(a.__proto__);for(let d in b)null==b[d]?a.removeAttribute(d):"style"===d?a.style.cssText=b[d]:"__value"===d?a.value=a[d]=b[d]:c[d]&&c[d].set?a[d]=b[d]:q(a,d,b[d])}function Z(a,b,c){a.classList[c?"add":"remove"](b)}function pa(){if(!P)throw Error("Function called outside component initialization");return P}function Ca(a){qa.push(a)}function eb(){if(!Da){Da=!0;do{for(var a=0;a<ka.length;a+=
1){var b=ka[a];P=b;b=b.$$;if(null!==b.fragment){b.update();b.before_update.forEach(Y);let a=b.dirty;b.dirty=[-1];b.fragment&&b.fragment.p(b.ctx,a);b.after_update.forEach(Ca)}}P=null;for(ka.length=0;aa.length;)aa.pop()();for(a=0;a<qa.length;a+=1)b=qa[a],Ea.has(b)||(Ea.add(b),b());qa.length=0}while(ka.length);for(;fb.length;)fb.pop()();Da=Fa=!1;Ea.clear()}}function Q(){R={r:0,c:[],p:R}}function S(){R.r||R.c.forEach(Y);R=R.p}function n(a,b){a&&a.i&&(ra.delete(a),a.i(b))}function r(a,b,c,d){a&&a.o&&!ra.has(a)&&
(ra.add(a),R.c.push(()=>{ra.delete(a);d&&(c&&a.d(1),d())}),a.o(b))}function T(a){a&&a.c()}function N(a,b,c,d){let {fragment:e,on_mount:f,on_destroy:h,after_update:k}=a.$$;e&&e.m(b,c);d||Ca(()=>{let b=f.map(Y).filter(bb);h?h.push(...b):b.forEach(Y);a.$$.on_mount=[]});k.forEach(Ca)}function O(a,b){a=a.$$;null!==a.fragment&&(a.on_destroy.forEach(Y),a.fragment&&a.fragment.d(b),a.on_destroy=a.fragment=null,a.ctx=[])}function J(a,b,c,d,e,f,h=[-1]){let k=P;P=a;let m=a.$$={fragment:null,ctx:null,props:f,
update:x,not_equal:e,bound:Object.create(null),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(k?k.$$.context:b.context||[]),callbacks:Object.create(null),dirty:h,skip_bound:!1},g=!1;m.ctx=c?c(a,b.props||{},(b,c,...d)=>{d=d.length?d[0]:c;if(m.ctx&&e(m.ctx[b],m.ctx[b]=d)){if(!m.skip_bound&&m.bound[b])m.bound[b](d);g&&(-1===a.$$.dirty[0]&&(ka.push(a),Fa||(Fa=!0,Pb.then(eb)),a.$$.dirty.fill(0)),a.$$.dirty[b/31|0]|=1<<b%31)}return c}):[];m.update();g=!0;m.before_update.forEach(Y);
m.fragment=d?d(m.ctx):!1;b.target&&(b.hydrate?(c=Array.from(b.target.childNodes),m.fragment&&m.fragment.l(c),c.forEach(w)):m.fragment&&m.fragment.c(),b.intro&&n(a.$$.fragment),N(a,b.target,b.anchor,b.customElement),eb());P=k}function Qb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");q(b,"aria-label",c=a[3]?a[3]:null);q(b,"class",d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`);b.disabled=a[2];q(b,"tabindex","0")},m(c,d){c.insertBefore(b,d||null);b.innerHTML=
a[5];e||(f=oa(b,"click",function(){bb(a[0])&&a[0].apply(this,arguments)}),e=!0)},p(e,[f]){a=e;f&32&&(b.innerHTML=a[5]);f&8&&c!==(c=a[3]?a[3]:null)&&q(b,"aria-label",c);f&18&&d!==(d=`${a[1]||""} shepherd-button ${a[4]?"shepherd-button-secondary":""}`)&&q(b,"class",d);f&4&&(b.disabled=a[2])},i:x,o:x,d(a){a&&w(b);e=!1;f()}}}function Rb(a,b,c){let {config:d}=b,{step:e}=b,f,h,k,m,g,l;a.$$set=a=>{"config"in a&&c(6,d=a.config);"step"in a&&c(7,e=a.step)};a.$$.update=()=>{if(a.$$.dirty&192){c(0,f=d.action?
d.action.bind(e.tour):null);c(1,h=d.classes);if(d.disabled){var b=d.disabled;b=W(b)?b.call(e):b}else b=!1;c(2,k=b);c(3,m=d.label);c(4,g=d.secondary);c(5,l=d.text)}};return[f,h,k,m,g,l,d,e]}function gb(a,b,c){a=a.slice();a[2]=b[c];return a}function hb(a){let b,c,d=a[1],e=[];for(let b=0;b<d.length;b+=1)e[b]=ib(gb(a,d,b));let f=a=>r(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();b=document.createTextNode("")},m(a,d){for(let b=0;b<e.length;b+=1)e[b].m(a,d);a.insertBefore(b,
d||null);c=!0},p(a,c){if(c&3){d=a[1];let h;for(h=0;h<d.length;h+=1){let f=gb(a,d,h);e[h]?(e[h].p(f,c),n(e[h],1)):(e[h]=ib(f),e[h].c(),n(e[h],1),e[h].m(b.parentNode,b))}Q();for(h=d.length;h<e.length;h+=1)f(h);S()}},i(a){if(!c){for(a=0;a<d.length;a+=1)n(e[a]);c=!0}},o(a){e=e.filter(Boolean);for(a=0;a<e.length;a+=1)r(e[a]);c=!1},d(a){var c=e;for(let b=0;b<c.length;b+=1)c[b]&&c[b].d(a);a&&w(b)}}}function ib(a){let b,c;b=new Sb({props:{config:a[2],step:a[0]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,
e);c=!0},p(a,c){let d={};c&2&&(d.config=a[2]);c&1&&(d.step=a[0]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function Tb(a){let b,c,d=a[1]&&hb(a);return{c(){b=document.createElement("footer");d&&d.c();q(b,"class","shepherd-footer")},m(a,f){a.insertBefore(b,f||null);d&&d.m(b,null);c=!0},p(a,[c]){a[1]?d?(d.p(a,c),c&2&&n(d,1)):(d=hb(a),d.c(),n(d,1),d.m(b,null)):d&&(Q(),r(d,1,1,()=>{d=null}),S())},i(a){c||(n(d),c=!0)},o(a){r(d);c=!1},d(a){a&&w(b);d&&d.d()}}}
function Ub(a,b,c){let d,{step:e}=b;a.$$set=a=>{"step"in a&&c(0,e=a.step)};a.$$.update=()=>{a.$$.dirty&1&&c(1,d=e.options.buttons)};return[e,d]}function Vb(a){let b,c,d,e,f;return{c(){b=document.createElement("button");c=document.createElement("span");c.textContent="\u00d7";q(c,"aria-hidden","true");q(b,"aria-label",d=a[0].label?a[0].label:"Close Tour");q(b,"class","shepherd-cancel-icon");q(b,"type","button")},m(d,k){d.insertBefore(b,k||null);b.appendChild(c);e||(f=oa(b,"click",a[1]),e=!0)},p(a,[c]){c&
1&&d!==(d=a[0].label?a[0].label:"Close Tour")&&q(b,"aria-label",d)},i:x,o:x,d(a){a&&w(b);e=!1;f()}}}function Wb(a,b,c){let {cancelIcon:d}=b,{step:e}=b;a.$$set=a=>{"cancelIcon"in a&&c(0,d=a.cancelIcon);"step"in a&&c(2,e=a.step)};return[d,a=>{a.preventDefault();e.cancel()},e]}function Xb(a){let b;return{c(){b=document.createElement("h3");q(b,"id",a[1]);q(b,"class","shepherd-title")},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(a,[d]){d&2&&q(b,"id",a[1])},i:x,o:x,d(c){c&&w(b);a[3](null)}}}function Yb(a,
b,c){let {labelId:d}=b,{element:e}=b,{title:f}=b;pa().$$.after_update.push(()=>{W(f)&&c(2,f=f());c(0,e.innerHTML=f,e)});a.$$set=a=>{"labelId"in a&&c(1,d=a.labelId);"element"in a&&c(0,e=a.element);"title"in a&&c(2,f=a.title)};return[e,d,f,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function jb(a){let b,c;b=new Zb({props:{labelId:a[0],title:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&1&&(d.labelId=a[0]);c&4&&(d.title=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,
a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function kb(a){let b,c;b=new $b({props:{cancelIcon:a[3],step:a[1]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&8&&(d.cancelIcon=a[3]);c&2&&(d.step=a[1]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function ac(a){let b,c,d,e=a[2]&&jb(a),f=a[3]&&a[3].enabled&&kb(a);return{c(){b=document.createElement("header");e&&e.c();c=document.createTextNode(" ");f&&f.c();q(b,"class","shepherd-header")},
m(a,k){a.insertBefore(b,k||null);e&&e.m(b,null);b.appendChild(c);f&&f.m(b,null);d=!0},p(a,[d]){a[2]?e?(e.p(a,d),d&4&&n(e,1)):(e=jb(a),e.c(),n(e,1),e.m(b,c)):e&&(Q(),r(e,1,1,()=>{e=null}),S());a[3]&&a[3].enabled?f?(f.p(a,d),d&8&&n(f,1)):(f=kb(a),f.c(),n(f,1),f.m(b,null)):f&&(Q(),r(f,1,1,()=>{f=null}),S())},i(a){d||(n(e),n(f),d=!0)},o(a){r(e);r(f);d=!1},d(a){a&&w(b);e&&e.d();f&&f.d()}}}function bc(a,b,c){let {labelId:d}=b,{step:e}=b,f,h;a.$$set=a=>{"labelId"in a&&c(0,d=a.labelId);"step"in a&&c(1,e=
a.step)};a.$$.update=()=>{a.$$.dirty&2&&(c(2,f=e.options.title),c(3,h=e.options.cancelIcon))};return[d,e,f,h]}function cc(a){let b;return{c(){b=document.createElement("div");q(b,"class","shepherd-text");q(b,"id",a[1])},m(c,d){c.insertBefore(b,d||null);a[3](b)},p(a,[d]){d&2&&q(b,"id",a[1])},i:x,o:x,d(c){c&&w(b);a[3](null)}}}function dc(a,b,c){let {descriptionId:d}=b,{element:e}=b,{step:f}=b;pa().$$.after_update.push(()=>{let {text:a}=f.options;W(a)&&(a=a.call(f));a instanceof HTMLElement?e.appendChild(a):
c(0,e.innerHTML=a,e)});a.$$set=a=>{"descriptionId"in a&&c(1,d=a.descriptionId);"element"in a&&c(0,e=a.element);"step"in a&&c(2,f=a.step)};return[e,d,f,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function lb(a){let b,c;b=new ec({props:{labelId:a[1],step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&2&&(d.labelId=a[1]);c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function mb(a){let b,c;b=new fc({props:{descriptionId:a[0],
step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&1&&(d.descriptionId=a[0]);c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function nb(a){let b,c;b=new gc({props:{step:a[2]}});return{c(){T(b.$$.fragment)},m(a,e){N(b,a,e);c=!0},p(a,c){let d={};c&4&&(d.step=a[2]);b.$set(d)},i(a){c||(n(b.$$.fragment,a),c=!0)},o(a){r(b.$$.fragment,a);c=!1},d(a){O(b,a)}}}function hc(a){let b,c=void 0!==a[2].options.title||a[2].options.cancelIcon&&
a[2].options.cancelIcon.enabled,d,e=void 0!==a[2].options.text,f,h=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length,k,m=c&&lb(a),g=e&&mb(a),l=h&&nb(a);return{c(){b=document.createElement("div");m&&m.c();d=document.createTextNode(" ");g&&g.c();f=document.createTextNode(" ");l&&l.c();q(b,"class","shepherd-content")},m(a,c){a.insertBefore(b,c||null);m&&m.m(b,null);b.appendChild(d);g&&g.m(b,null);b.appendChild(f);l&&l.m(b,null);k=!0},p(a,[k]){k&4&&(c=void 0!==a[2].options.title||a[2].options.cancelIcon&&
a[2].options.cancelIcon.enabled);c?m?(m.p(a,k),k&4&&n(m,1)):(m=lb(a),m.c(),n(m,1),m.m(b,d)):m&&(Q(),r(m,1,1,()=>{m=null}),S());k&4&&(e=void 0!==a[2].options.text);e?g?(g.p(a,k),k&4&&n(g,1)):(g=mb(a),g.c(),n(g,1),g.m(b,f)):g&&(Q(),r(g,1,1,()=>{g=null}),S());k&4&&(h=Array.isArray(a[2].options.buttons)&&a[2].options.buttons.length);h?l?(l.p(a,k),k&4&&n(l,1)):(l=nb(a),l.c(),n(l,1),l.m(b,null)):l&&(Q(),r(l,1,1,()=>{l=null}),S())},i(a){k||(n(m),n(g),n(l),k=!0)},o(a){r(m);r(g);r(l);k=!1},d(a){a&&w(b);m&&
m.d();g&&g.d();l&&l.d()}}}function ic(a,b,c){let {descriptionId:d}=b,{labelId:e}=b,{step:f}=b;a.$$set=a=>{"descriptionId"in a&&c(0,d=a.descriptionId);"labelId"in a&&c(1,e=a.labelId);"step"in a&&c(2,f=a.step)};return[d,e,f]}function ob(a){let b;return{c(){b=document.createElement("div");q(b,"class","shepherd-arrow");q(b,"data-popper-arrow","")},m(a,d){a.insertBefore(b,d||null)},d(a){a&&w(b)}}}function jc(a){let b,c,d,e,f,h,k,m,g=a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&
a[4].options.attachTo.on&&ob();d=new kc({props:{descriptionId:a[2],labelId:a[3],step:a[4]}});let l=[{"aria-describedby":e=void 0!==a[4].options.text?a[2]:null},{"aria-labelledby":f=a[4].options.title?a[3]:null},a[1],{role:"dialog"},{tabindex:"0"}],p={};for(let a=0;a<l.length;a+=1)p=Ob(p,l[a]);return{c(){b=document.createElement("div");g&&g.c();c=document.createTextNode(" ");T(d.$$.fragment);db(b,p);Z(b,"shepherd-has-cancel-icon",a[5]);Z(b,"shepherd-has-title",a[6]);Z(b,"shepherd-element",!0)},m(e,
f){e.insertBefore(b,f||null);g&&g.m(b,null);b.appendChild(c);N(d,b,null);a[13](b);h=!0;k||(m=oa(b,"keydown",a[7]),k=!0)},p(a,[k]){a[4].options.arrow&&a[4].options.attachTo&&a[4].options.attachTo.element&&a[4].options.attachTo.on?g||(g=ob(),g.c(),g.m(b,c)):g&&(g.d(1),g=null);var m={};k&4&&(m.descriptionId=a[2]);k&8&&(m.labelId=a[3]);k&16&&(m.step=a[4]);d.$set(m);m=b;{k=[(!h||k&20&&e!==(e=void 0!==a[4].options.text?a[2]:null))&&{"aria-describedby":e},(!h||k&24&&f!==(f=a[4].options.title?a[3]:null))&&
{"aria-labelledby":f},k&2&&a[1],{role:"dialog"},{tabindex:"0"}];let b={},c={},d={$$scope:1},g=l.length;for(;g--;){let a=l[g],e=k[g];if(e){for(u in a)u in e||(c[u]=1);for(let a in e)d[a]||(b[a]=e[a],d[a]=1);l[g]=e}else for(let b in a)d[b]=1}for(let a in c)a in b||(b[a]=void 0);var u=b}db(m,p=u);Z(b,"shepherd-has-cancel-icon",a[5]);Z(b,"shepherd-has-title",a[6]);Z(b,"shepherd-element",!0)},i(a){h||(n(d.$$.fragment,a),h=!0)},o(a){r(d.$$.fragment,a);h=!1},d(c){c&&w(b);g&&g.d();O(d);a[13](null);k=!1;m()}}}
function pb(a){return a.split(" ").filter(a=>!!a.length)}function lc(a,b,c){let {classPrefix:d}=b,{element:e}=b,{descriptionId:f}=b,{firstFocusableElement:h}=b,{focusableElements:k}=b,{labelId:m}=b,{lastFocusableElement:g}=b,{step:l}=b,{dataStepId:p}=b,t,A,C;pa().$$.on_mount.push(()=>{c(1,p={[`data-${d}shepherd-step-id`]:l.id});c(9,k=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));c(8,h=k[0]);
c(10,g=k[k.length-1])});pa().$$.after_update.push(()=>{if(C!==l.options.classes){var a=C;da(a)&&(a=pb(a),a.length&&e.classList.remove(...a));a=C=l.options.classes;da(a)&&(a=pb(a),a.length&&e.classList.add(...a))}});a.$$set=a=>{"classPrefix"in a&&c(11,d=a.classPrefix);"element"in a&&c(0,e=a.element);"descriptionId"in a&&c(2,f=a.descriptionId);"firstFocusableElement"in a&&c(8,h=a.firstFocusableElement);"focusableElements"in a&&c(9,k=a.focusableElements);"labelId"in a&&c(3,m=a.labelId);"lastFocusableElement"in
a&&c(10,g=a.lastFocusableElement);"step"in a&&c(4,l=a.step);"dataStepId"in a&&c(1,p=a.dataStepId)};a.$$.update=()=>{a.$$.dirty&16&&(c(5,t=l.options&&l.options.cancelIcon&&l.options.cancelIcon.enabled),c(6,A=l.options&&l.options.title))};return[e,p,f,m,l,t,A,a=>{const {tour:b}=l;switch(a.keyCode){case 9:if(0===k.length){a.preventDefault();break}if(a.shiftKey){if(document.activeElement===h||document.activeElement.classList.contains("shepherd-element"))a.preventDefault(),g.focus()}else document.activeElement===
g&&(a.preventDefault(),h.focus());break;case 27:b.options.exitOnEsc&&l.cancel();break;case 37:b.options.keyboardNavigation&&b.back();break;case 39:b.options.keyboardNavigation&&b.next()}},h,k,g,d,()=>e,function(a){aa[a?"unshift":"push"](()=>{e=a;c(0,e)})}]}function mc(a){a&&({steps:a}=a,a.forEach(a=>{a.options&&!1===a.options.canClickTarget&&a.options.attachTo&&a.target instanceof HTMLElement&&a.target.classList.remove("shepherd-target-click-disabled")}))}function nc({width:a,height:b,x:c=0,y:d=0,
r:e=0}){let {innerWidth:f,innerHeight:h}=window;return`M${f},${h}\
H0\
V0\
H${f}\
V${h}\
Z\
M${c+e},${d}\
a${e},${e},0,0,0-${e},${e}\
V${b+d-e}\
a${e},${e},0,0,0,${e},${e}\
H${a+c-e}\
a${e},${e},0,0,0,${e}-${e}\
V${d+e}\
a${e},${e},0,0,0-${e}-${e}\
Z`}function oc(a){let b,c,d,e,f;return{c(){b=cb("svg");c=cb("path");q(c,"d",a[2]);q(b,"class",d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(d,k){d.insertBefore(b,k||null);b.appendChild(c);a[11](b);e||(f=oa(b,"touchmove",a[3]),e=!0)},p(a,[e]){e&4&&q(c,"d",a[2]);e&2&&d!==(d=`${a[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&q(b,"class",d)},i:x,o:x,d(c){c&&w(b);a[11](null);e=!1;f()}}}function qb(a){if(!a)return null;let b=a instanceof HTMLElement&&
window.getComputedStyle(a).overflowY;return"hidden"!==b&&"visible"!==b&&a.scrollHeight>=a.clientHeight?a:qb(a.parentElement)}function pc(a,b,c){function d(){c(4,l={width:0,height:0,x:0,y:0,r:0})}function e(){c(1,p=!1);k()}function f(a=0,b=0,e,f){if(f){var g=f.getBoundingClientRect();var u=g.y||g.top;g=g.bottom||u+g.height;if(e){var h=e.getBoundingClientRect();e=h.y||h.top;h=h.bottom||e+h.height;u=Math.max(u,e);g=Math.min(g,h)}u={y:u,height:Math.max(g-u,0)};let {y:d,height:k}=u,{x:m,width:p,left:A}=
f.getBoundingClientRect();c(4,l={width:p+2*a,height:k+2*a,x:(m||A)-a,y:d-a,r:b})}else d()}function h(){c(1,p=!0)}function k(){t&&(cancelAnimationFrame(t),t=void 0);window.removeEventListener("touchmove",C,{passive:!1})}function m(a){let {modalOverlayOpeningPadding:b,modalOverlayOpeningRadius:c}=a.options,d=qb(a.target),e=()=>{t=void 0;f(b,c,d,a.target);t=requestAnimationFrame(e)};e();window.addEventListener("touchmove",C,{passive:!1})}let {element:g}=b,{openingProperties:l}=b;Ba();let p=!1,t=void 0,
A;d();let C=a=>{a.preventDefault()};a.$$set=a=>{"element"in a&&c(0,g=a.element);"openingProperties"in a&&c(4,l=a.openingProperties)};a.$$.update=()=>{a.$$.dirty&16&&c(2,A=nc(l))};return[g,p,A,a=>{a.stopPropagation()},l,()=>g,d,e,f,function(a){k();a.tour.options.useModalOverlay?(m(a),h()):e()},h,function(a){aa[a?"unshift":"push"](()=>{g=a;c(0,g)})}]}var vb=function(a){var b;if(b=!!a&&"object"===typeof a)b=Object.prototype.toString.call(a),b=!("[object RegExp]"===b||"[object Date]"===b||a.$$typeof===
qc);return b},qc="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;V.all=function(a,b){if(!Array.isArray(a))throw Error("first argument should be an array");return a.reduce(function(a,d){return V(a,d,b)},{})};var rc=V;class Ga{on(a,b,c,d=!1){void 0===this.bindings&&(this.bindings={});void 0===this.bindings[a]&&(this.bindings[a]=[]);this.bindings[a].push({handler:b,ctx:c,once:d});return this}once(a,b,c){return this.on(a,b,c,!0)}off(a,b){if(void 0===this.bindings||void 0===this.bindings[a])return this;
void 0===b?delete this.bindings[a]:this.bindings[a].forEach((c,d)=>{c.handler===b&&this.bindings[a].splice(d,1)});return this}trigger(a,...b){void 0!==this.bindings&&this.bindings[a]&&this.bindings[a].forEach((c,d)=>{let {ctx:e,handler:f,once:h}=c;f.apply(e||this,b);h&&this.bindings[a].splice(d,1)});return this}}var ja=["top","bottom","right","left"],Wa=ja.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),Va=[].concat(ja,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",
b+"-end"])},[]),Ib="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),E=Math.max,M=Math.min,ma=Math.round,yb={top:"auto",right:"auto",bottom:"auto",left:"auto"},sa={passive:!0},zb={left:"right",right:"left",bottom:"top",top:"bottom"},Ab={start:"end",end:"start"},rb={placement:"bottom",modifiers:[],strategy:"absolute"},sc=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?rb:a;return function(a,b,
h){function e(){g.orderedModifiers.forEach(function(a){var b=a.name,c=a.options;c=void 0===c?{}:c;a=a.effect;"function"===typeof a&&(b=a({state:g,name:b,instance:t,options:c}),l.push(b||function(){}))})}function f(){l.forEach(function(a){return a()});l=[]}void 0===h&&(h=d);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},rb,d),modifiersData:{},elements:{reference:a,popper:b},attributes:{},styles:{}},l=[],p=!1,t={state:g,setOptions:function(h){f();g.options=Object.assign({},d,
g.options,h);g.scrollParents={reference:ea(a)?ha(a):a.contextElement?ha(a.contextElement):[],popper:ha(b)};h=Hb(Kb([].concat(c,g.options.modifiers)));g.orderedModifiers=h.filter(function(a){return a.enabled});e();return t.update()},forceUpdate:function(){if(!p){var a=g.elements,b=a.reference;a=a.popper;if(Za(b,a))for(g.rects={reference:Fb(b,fa(a),"fixed"===g.options.strategy),popper:ta(a)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(a){return g.modifiersData[a.name]=
Object.assign({},a.data)}),b=0;b<g.orderedModifiers.length;b++)if(!0===g.reset)g.reset=!1,b=-1;else{var c=g.orderedModifiers[b];a=c.fn;var d=c.options;d=void 0===d?{}:d;c=c.name;"function"===typeof a&&(g=a({state:g,options:d,name:c,instance:t})||g)}}},update:Jb(function(){return new Promise(function(a){t.forceUpdate();a(g)})}),destroy:function(){f();p=!0}};if(!Za(a,b))return t;t.setOptions(h).then(function(a){if(!p&&h.onFirstUpdate)h.onFirstUpdate(a)});return t}}({defaultModifiers:[{name:"eventListeners",
enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,h=z(b.elements.popper),k=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&k.forEach(function(a){a.addEventListener("scroll",c.update,sa)});f&&h.addEventListener("resize",c.update,sa);return function(){e&&k.forEach(function(a){a.removeEventListener("scroll",c.update,sa)});f&&h.removeEventListener("resize",c.update,sa)}},data:{}},
{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=Ua({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:F(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a};
null!=b.modifiersData.popperOffsets&&(b.styles.popper=Object.assign({},b.styles.popper,Qa(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,Qa(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",
enabled:!0,phase:"write",fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(a){var c=b.styles[a]||{},e=b.attributes[a]||{},f=b.elements[a];y(f)&&B(f)&&(Object.assign(f.style,c),Object.keys(e).forEach(function(a){var b=e[a];!1===b?f.removeAttribute(a):f.setAttribute(a,!0===b?"":b)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=
c;b.elements.arrow&&Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(a){var d=b.elements[a],f=b.attributes[a]||{};a=Object.keys(b.styles.hasOwnProperty(a)?b.styles[a]:c[a]).reduce(function(a,b){a[b]="";return a},{});y(d)&&B(d)&&(Object.assign(d.style,a),Object.keys(f).forEach(function(a){d.removeAttribute(a)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;
a=a.options.offset;var d=void 0===a?[0,0]:a;a=Va.reduce(function(a,c){var e=b.rects;var f=F(c);var h=0<=["left","top"].indexOf(f)?-1:1,k="function"===typeof d?d(Object.assign({},e,{placement:c})):d;e=k[0];k=k[1];e=e||0;k=(k||0)*h;f=0<=["left","right"].indexOf(f)?{x:k,y:e}:{x:e,y:k};a[c]=f;return a},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",
fn:function(a){var b=a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,h=c.padding,k=c.boundary,m=c.rootBoundary,g=c.altBoundary,l=c.flipVariations,p=void 0===l?!0:l,t=c.allowedAutoPlacements;c=b.options.placement;l=F(c);f=f||(l!==c&&p?Eb(c):[na(c)]);var A=[c].concat(f).reduce(function(a,c){return a.concat("auto"===F(c)?Db(b,{placement:c,boundary:k,rootBoundary:m,padding:h,flipVariations:p,allowedAutoPlacements:t}):
c)},[]);c=b.rects.reference;f=b.rects.popper;var n=new Map;l=!0;for(var u=A[0],D=0;D<A.length;D++){var v=A[D],q=F(v),r="start"===v.split("-")[1],U=0<=["top","bottom"].indexOf(q),x=U?"width":"height",w=ia(b,{placement:v,boundary:k,rootBoundary:m,altBoundary:g,padding:h});r=U?r?"right":"left":r?"bottom":"top";c[x]>f[x]&&(r=na(r));x=na(r);U=[];d&&U.push(0>=w[q]);e&&U.push(0>=w[r],0>=w[x]);if(U.every(function(a){return a})){u=v;l=!1;break}n.set(v,U)}if(l)for(d=function(a){var b=A.find(function(b){if(b=
n.get(b))return b.slice(0,a).every(function(a){return a})});if(b)return u=b,"break"},e=p?3:1;0<e&&"break"!==d(e);e--);b.placement!==u&&(b.modifiersData[a]._skip=!0,b.placement=u,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;d=void 0===d?!0:d;var h=c.tetherOffset,k=void 0===h?0:h,m=ia(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary});c=F(b.placement);var g=b.placement.split("-")[1],l=!g,p=ua(c);c="x"===p?"y":"x";h=b.modifiersData.popperOffsets;var t=b.rects.reference,n=b.rects.popper,q="function"===typeof k?k(Object.assign({},b.rects,{placement:b.placement})):k;k={x:0,y:0};if(h){if(e||f){var u="y"===p?"top":"left",D="y"===p?"bottom":"right",v="y"===p?"height":"width",r=h[p],x=h[p]+m[u],w=h[p]-m[D],z=d?-n[v]/2:0,y="start"===g?t[v]:n[v];g="start"===g?-n[v]:-t[v];n=b.elements.arrow;n=
d&&n?ta(n):{width:0,height:0};var B=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};u=B[u];D=B[D];n=E(0,M(t[v],n[v]));y=l?t[v]/2-z-n-u-q:y-n-u-q;t=l?-t[v]/2+z+n+D+q:g+n+D+q;l=b.elements.arrow&&fa(b.elements.arrow);q=b.modifiersData.offset?b.modifiersData.offset[b.placement][p]:0;l=h[p]+y-q-(l?"y"===p?l.clientTop||0:l.clientLeft||0:0);t=h[p]+t-q;e&&(e=d?M(x,l):x,w=d?E(w,t):w,e=E(e,M(r,w)),h[p]=e,k[p]=e-r);f&&(f=h[c],e=f+m["x"===p?"top":
"left"],m=f-m["x"===p?"bottom":"right"],e=d?M(e,l):e,d=d?E(m,t):m,d=E(e,M(f,d)),h[c]=d,k[c]=d-f)}b.modifiersData[a]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,h=c.modifiersData.popperOffsets,k=F(c.placement);a=ua(k);k=0<=["left","right"].indexOf(k)?"height":"width";if(f&&h){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=Oa("number"!==typeof e?e:Pa(e,ja));
var m=ta(f),g="y"===a?"top":"left",l="y"===a?"bottom":"right",p=c.rects.reference[k]+c.rects.reference[a]-h[a]-c.rects.popper[k];h=h[a]-c.rects.reference[a];f=(f=fa(f))?"y"===a?f.clientHeight||0:f.clientWidth||0:0;h=f/2-m[k]/2+(p/2-h/2);k=E(e[g],M(h,f-m[k]-e[l]));c.modifiersData[d]=(b={},b[a]=k,b.centerOffset=k-h,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;Ma(b.elements.popper,
a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=a.state;a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=ia(b,{elementContext:"reference"}),h=ia(b,{altBoundary:!0});c=Xa(f,c);d=Xa(h,d,e);e=Ya(c);h=Ya(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:h};b.attributes.popper=
Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":h})}}]});let P,ka=[],aa=[],qa=[],fb=[],Pb=Promise.resolve(),Fa=!1,Da=!1,Ea=new Set,ra=new Set,R;class K{$destroy(){O(this,1);this.$destroy=x}$on(a,b){let c=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);c.push(b);return()=>{let a=c.indexOf(b);-1!==a&&c.splice(a,1)}}$set(a){this.$$set&&0!==Object.keys(a).length&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class Sb extends K{constructor(a){super();
J(this,a,Rb,Qb,I,{config:6,step:7})}}class gc extends K{constructor(a){super();J(this,a,Ub,Tb,I,{step:0})}}class $b extends K{constructor(a){super();J(this,a,Wb,Vb,I,{cancelIcon:0,step:2})}}class Zb extends K{constructor(a){super();J(this,a,Yb,Xb,I,{labelId:1,element:0,title:2})}}class ec extends K{constructor(a){super();J(this,a,bc,ac,I,{labelId:0,step:1})}}class fc extends K{constructor(a){super();J(this,a,dc,cc,I,{descriptionId:1,element:0,step:2})}}class kc extends K{constructor(a){super();J(this,
a,ic,hc,I,{descriptionId:0,labelId:1,step:2})}}class tc extends K{constructor(a){super();J(this,a,lc,jc,I,{classPrefix:11,element:0,descriptionId:2,firstFocusableElement:8,focusableElements:9,labelId:3,lastFocusableElement:10,step:4,dataStepId:1,getElement:12})}get getElement(){return this.$$.ctx[12]}}var sb=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){(function(){a.exports={polyfill:function(){function a(a,b){this.scrollLeft=a;this.scrollTop=b}function b(a){if(null===
a||"object"!==typeof a||void 0===a.behavior||"auto"===a.behavior||"instant"===a.behavior)return!0;if("object"===typeof a&&"smooth"===a.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+a.behavior+" is not a valid value for enumeration ScrollBehavior.");}function e(a,b){if("Y"===b)return a.clientHeight+r<a.scrollHeight;if("X"===b)return a.clientWidth+r<a.scrollWidth}function f(a,b){a=g.getComputedStyle(a,null)["overflow"+b];return"auto"===a||"scroll"===a}function h(a){var b=
e(a,"Y")&&f(a,"Y");a=e(a,"X")&&f(a,"X");return b||a}function k(a){var b=(q()-a.startTime)/468;var c=.5*(1-Math.cos(Math.PI*(1<b?1:b)));b=a.startX+(a.x-a.startX)*c;c=a.startY+(a.y-a.startY)*c;a.method.call(a.scrollable,b,c);b===a.x&&c===a.y||g.requestAnimationFrame(k.bind(g,a))}function m(b,c,d){var e=q();if(b===l.body){var f=g;var h=g.scrollX||g.pageXOffset;b=g.scrollY||g.pageYOffset;var u=n.scroll}else f=b,h=b.scrollLeft,b=b.scrollTop,u=a;k({scrollable:f,method:u,startTime:e,startX:h,startY:b,x:c,
y:d})}var g=window,l=document;if(!("scrollBehavior"in l.documentElement.style&&!0!==g.__forceSmoothScrollPolyfill__)){var p=g.HTMLElement||g.Element,n={scroll:g.scroll||g.scrollTo,scrollBy:g.scrollBy,elementScroll:p.prototype.scroll||a,scrollIntoView:p.prototype.scrollIntoView},q=g.performance&&g.performance.now?g.performance.now.bind(g.performance):Date.now,r=/MSIE |Trident\/|Edge\//.test(g.navigator.userAgent)?1:0;g.scroll=g.scrollTo=function(a,c){void 0!==a&&(!0===b(a)?n.scroll.call(g,void 0!==
a.left?a.left:"object"!==typeof a?a:g.scrollX||g.pageXOffset,void 0!==a.top?a.top:void 0!==c?c:g.scrollY||g.pageYOffset):m.call(g,l.body,void 0!==a.left?~~a.left:g.scrollX||g.pageXOffset,void 0!==a.top?~~a.top:g.scrollY||g.pageYOffset))};g.scrollBy=function(a,c){void 0!==a&&(b(a)?n.scrollBy.call(g,void 0!==a.left?a.left:"object"!==typeof a?a:0,void 0!==a.top?a.top:void 0!==c?c:0):m.call(g,l.body,~~a.left+(g.scrollX||g.pageXOffset),~~a.top+(g.scrollY||g.pageYOffset)))};p.prototype.scroll=p.prototype.scrollTo=
function(a,c){if(void 0!==a)if(!0===b(a)){if("number"===typeof a&&void 0===c)throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==a.left?~~a.left:"object"!==typeof a?~~a:this.scrollLeft,void 0!==a.top?~~a.top:void 0!==c?~~c:this.scrollTop)}else c=a.left,a=a.top,m.call(this,this,"undefined"===typeof c?this.scrollLeft:~~c,"undefined"===typeof a?this.scrollTop:~~a)};p.prototype.scrollBy=function(a,c){void 0!==a&&(!0===b(a)?n.elementScroll.call(this,void 0!==a.left?
~~a.left+this.scrollLeft:~~a+this.scrollLeft,void 0!==a.top?~~a.top+this.scrollTop:~~c+this.scrollTop):this.scroll({left:~~a.left+this.scrollLeft,top:~~a.top+this.scrollTop,behavior:a.behavior}))};p.prototype.scrollIntoView=function(a){if(!0===b(a))n.scrollIntoView.call(this,void 0===a?!0:a);else{for(a=this;a!==l.body&&!1===h(a);)a=a.parentNode||a.host;var c=a.getBoundingClientRect(),d=this.getBoundingClientRect();a!==l.body?(m.call(this,a,a.scrollLeft+d.left-c.left,a.scrollTop+d.top-c.top),"fixed"!==
g.getComputedStyle(a).position&&g.scrollBy({left:c.left,top:c.top,behavior:"smooth"})):g.scrollBy({left:d.left,top:d.top,behavior:"smooth"})}}}}}})()});sb.polyfill;sb.polyfill();class Ha extends Ga{constructor(a,b={}){super(a,b);this.tour=a;this.classPrefix=this.tour.options?$a(this.tour.options.classPrefix):"";this.styles=a.styles;Ka(this);this._setOptions(b);return this}cancel(){this.tour.cancel();this.trigger("cancel")}complete(){this.tour.complete();this.trigger("complete")}destroy(){this.tooltip&&
(this.tooltip.destroy(),this.tooltip=null);this.el instanceof HTMLElement&&this.el.parentNode&&(this.el.parentNode.removeChild(this.el),this.el=null);this._updateStepTargetOnHide();this.trigger("destroy")}getTour(){return this.tour}hide(){this.tour.modal.hide();this.trigger("before-hide");this.el&&(this.el.hidden=!0);this._updateStepTargetOnHide();this.trigger("hide")}isCentered(){let a=Aa(this);return!a.element||!a.on}isOpen(){return!(!this.el||this.el.hidden)}show(){if(W(this.options.beforeShowPromise)){let a=
this.options.beforeShowPromise();if(void 0!==a)return a.then(()=>this._show())}this._show()}updateStepOptions(a){Object.assign(this.options,a);this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){this.shepherdElementComponent=new tc({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:`${this.id}-description`,labelId:`${this.id}-label`,step:this,
styles:this.styles}});return this.shepherdElementComponent.getElement()}_scrollTo(a){let {element:b}=Aa(this);W(this.options.scrollToHandler)?this.options.scrollToHandler(b):b instanceof Element&&"function"===typeof b.scrollIntoView&&b.scrollIntoView(a)}_getClassOptions(a){var b=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=b&&b.classes?b.classes:"";a=[...(a.classes?a.classes:"").split(" "),...b.split(" ")];a=new Set(a);return Array.from(a).join(" ").trim()}_setOptions(a={}){let b=
this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;b=rc({},b||{});this.options=Object.assign({arrow:!0},b,a);let {when:c}=this.options;this.options.classes=this._getClassOptions(a);this.destroy();this.id=this.options.id||`step-${Ba()}`;c&&Object.keys(c).forEach(a=>{this.on(a,c[a],this)})}_setupElements(){void 0!==this.el&&this.destroy();this.el=this._createTooltipContent();this.options.advanceOn&&xb(this);{this.tooltip&&this.tooltip.destroy();let a=Aa(this),b=a.element,c=Nb(a,this);
this.isCentered()&&(b=document.body,this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));this.tooltip=sc(b,this.el,c);this.target=a.element}}_show(){this.trigger("before-show");this._setupElements();this.tour.modal||this.tour._setupModal();this.tour.modal.setupForStep(this);this._styleTargetElementForStep(this);this.el.hidden=!1;this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)});this.el.hidden=!1;let a=this.shepherdElementComponent.getElement(),
b=this.target||document.body;b.classList.add(`${this.classPrefix}shepherd-enabled`);b.classList.add(`${this.classPrefix}shepherd-target`);a.classList.add("shepherd-enabled");this.trigger("show")}_styleTargetElementForStep(a){let b=a.target;b&&(a.options.highlightClass&&b.classList.add(a.options.highlightClass),!1===a.options.canClickTarget&&b.classList.add("shepherd-target-click-disabled"))}_updateStepTargetOnHide(){let a=this.target||document.body;this.options.highlightClass&&a.classList.remove(this.options.highlightClass);
a.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)}}class uc extends K{constructor(a){super();J(this,a,pc,oc,I,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}
let ba=new Ga;class vc extends Ga{constructor(a={}){super(a);Ka(this);this.options=Object.assign({},{exitOnEsc:!0,keyboardNavigation:!0},a);this.classPrefix=$a(this.options.classPrefix);this.steps=[];this.addSteps(this.options.steps);"active cancel complete inactive show start".split(" ").map(a=>{(a=>{this.on(a,b=>{b=b||{};b.tour=this;ba.trigger(a,b)})})(a)});this._setTourID();return this}addStep(a,b){a instanceof Ha?a.tour=this:a=new Ha(this,a);void 0!==b?this.steps.splice(b,0,a):this.steps.push(a);
return a}addSteps(a){Array.isArray(a)&&a.forEach(a=>{this.addStep(a)});return this}back(){let a=this.steps.indexOf(this.currentStep);this.show(a-1,!1)}cancel(){this.options.confirmCancel?window.confirm(this.options.confirmCancelMessage||"Are you sure you want to stop the tour?")&&this._done("cancel"):this._done("cancel")}complete(){this._done("complete")}getById(a){return this.steps.find(b=>b.id===a)}getCurrentStep(){return this.currentStep}hide(){let a=this.getCurrentStep();if(a)return a.hide()}isActive(){return ba.activeTour===
this}next(){let a=this.steps.indexOf(this.currentStep);a===this.steps.length-1?this.complete():this.show(a+1,!0)}removeStep(a){let b=this.getCurrentStep();this.steps.some((b,d)=>{if(b.id===a)return b.isOpen()&&b.hide(),b.destroy(),this.steps.splice(d,1),!0});b&&b.id===a&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(a=0,b=!0){if(a=da(a)?this.getById(a):this.steps[a])this._updateStateBeforeShow(),W(a.options.showOn)&&!a.options.showOn()?this._skipStep(a,b):(this.trigger("show",
{step:a,previous:this.currentStep}),this.currentStep=a,a.show())}start(){this.trigger("start");this.focusedElBeforeOpen=document.activeElement;this.currentStep=null;this._setupModal();this._setupActiveTour();this.next()}_done(a){let b=this.steps.indexOf(this.currentStep);Array.isArray(this.steps)&&this.steps.forEach(a=>a.destroy());mc(this);this.trigger(a,{index:b});ba.activeTour=null;this.trigger("inactive",{tour:this});this.modal&&this.modal.hide();"cancel"!==a&&"complete"!==a||!this.modal||(a=
document.querySelector(".shepherd-modal-overlay-container"))&&a.remove();this.focusedElBeforeOpen instanceof HTMLElement&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this});ba.activeTour=this}_setupModal(){this.modal=new uc({target:this.options.modalContainer||document.body,props:{classPrefix:this.classPrefix,styles:this.styles}})}_skipStep(a,b){a=this.steps.indexOf(a);this.show(b?a+1:a-1,b)}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide();this.isActive()||
this._setupActiveTour()}_setTourID(){this.id=`${this.options.tourName||"tour"}--${Ba()}`}}Object.assign(ba,{Tour:vc,Step:Ha});return ba})
//# sourceMappingURL=shepherd.min.js.map
