/******************************************************************************************************/
/* 	File: 		m-moodleheader.js
/*	Type: 		Custom JavaScript

/******************************************************************************************************/

$().ready(function(){

// ===== START: Small UI tweaks =====

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

	// START: Generate duplicate turn editing on button
	var edit_address = "";
	edit_address = $("a.btn[title='Turn editing on']").attr('href');

	if (edit_address != undefined) {
		var new_edit_link = '<div id="turn_edit_on_btn2" class="edit-button" style="display:inline-block;z-index:1000;"><a href="'+edit_address+'" class="btn btn-secondary" title="Turn editing on" style="background-color:#B32B76;margin-left:10px;"><i class="fa-edit fa fa-fw fa-2x"></i></a><div>';
		//$('.usermenu').before( new_edit_link );
		$("li div.usermenu").parent().after('<li>'+new_edit_link+'</li>');
	}
	else {
		var edit_off_address = $("a.btn[title='Turn editing off']").attr('href');
		var new_edit_off_link = '<div id="turn_edit_on_btn2" class="edit-button" style="display:inline-block;z-index:1000;"><a href="'+edit_off_address+'" class="btn btn-secondary btn-active" title="Turn editing off" style="background-color:#B0B0B0;margin-left:10px;"><i class="fa-edit fa fa-fw fa-2x"></i></a><div>';
		//$('.usermenu').before( new_edit_off_link );
		$("li div.usermenu").parent().after('<li>'+new_edit_off_link+'</li>');
	}

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
