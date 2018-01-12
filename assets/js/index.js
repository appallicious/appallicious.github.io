// var finished = false;
function frontPageAnimation(){
	// $("#leftbar").hide()
	// finished = false
	// console.log(finished)
	var height = '250px'
	var left = Math.floor(Math.random() * 1000) + 73  
	// var bottom = 250
	// $("#leftbar").show();
  $("#leftbar").css('left', left).animate({height: height},1500, function() {
	  bubble(left)
	 //  setTimeout(function(){
		//   $(this).fadeOut();
		// }, 2000);
	  // $('#animation-container').empty()
	  // frontPageAnimation()

	}).show().delay(3000)
		.fadeOut()
    // .fadeOut('slow', function(){
    // 	frontPageAnimation()
    // });
	// .ready(function () {$('#animation-container').empty()});
	// finished = true;
	// console.log(finished)
	// frontPageAnimation()
	// return;
	// $.when($.ajax(bubble(left))).then(function () {
	//   $('#animation-container').empty()
	// });
}

function bubble(left){
	
	var bubble = "<div class='bubble'>hello</div>"
	$('#animation-container').append($(bubble)
																							.css('left', left)
																							// .css('bottom', height)
																							// .css('bottom', 'calc(40% + '+height+')')
																							.hide()
																							.fadeIn(2000)
																							.delay(1000)
																							.fadeOut('slow', function() { $(this).remove(); }))
												
	// $("#leftbar").fadeOut("slow")
	// frontPageAnimation()
	// $('#animation-container').empty()
}

$(function() {
	frontPageAnimation();
	// $.when($.ajax(frontPageAnimation())).then(function () {
	//   frontPageAnimation();
	// });
	// console.log(finished)
	// if (finished == true){
	// 	console.log(finished)
	// 	frontPageAnimation();
	// }
	// setTimeout(function(){frontPageAnimation()}, 1000);

	// $(".border, #content").hide();
    // $("#topbar").show();
    
  
})