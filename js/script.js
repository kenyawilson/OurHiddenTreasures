window.onscroll = function () {
	myFunction()
};

var btnBox = document.getElementById("myHeader");
var sticky = btnBox.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		btnBox.classList.add("sticky");
	} else {
		btnBox.classList.remove("sticky");
	}
}

window.onscroll = function () {
	myFunction()
};


/* Timer */

function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
	var endTime = new Date("25 April 2020 10:00:00 GMT+01:00");
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400);
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#days").html(days + "<br><span>Days</span>");
	$("#hours").html(hours + "<br><span>Hours</span>");
	$("#minutes").html(minutes + "<br><span>Min</span>");
	$("#seconds").html(seconds + "<br><span>Sec</span>");

}

setInterval(function () { makeTimer(); }, 1000);

/*     Donations   */
var firstName = "";
var lastName = "";
var email = "";
var dType = "";
var receipt = "";
var anon = "";
var list = "";
var amount = "";

$('.set-amount').autoGrow(0);

/*
	if(isiPad || jQuery.browser.mobile){
		$('#team').hide()
		$('.team-mobile').show();	
	}else{
		$('#team').show()
		$('.team-mobile').hide();
	}
*/

//Set & Highlight Donation Amount
$(".button").click(function () {
	$(".button").removeClass("selected");
	$(this).addClass("selected");

	$(this).find("input").focus();
});

//Grow the donation box if they type more than 4 numbers
$(".set-amount").keyup(function () {

	if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		this.value = this.value.replace(/[^0-9\.]/g, '');
	}

});


$("input").on("change", function () {
	// $(".donation-box").css("height", "500px");

	firstName = $("#firstName").val();
	lastName = $("#lastName").val();
	email = $("#email").val();

	if ($("#one-time").prop("checked")) {
		dType = "One-Time";
	}
	if ($("#monthly").prop("checked")) {
		dType = "Monthly";
	}

});
