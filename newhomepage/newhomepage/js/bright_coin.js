( function( $ ) {
	'use strict';

	var brightCoin = {
		init: function() {
			this.bcToggles();
			this.bcCarousel();
			this.bcAnimatedScroll();
			this.bcPlyaVideoModal();
		},

		bcToggles: function () {
			//FAQ TOGGLE
			$('.bc_toggle_tab').on('click',function(){
				$(this).closest('.bc_tab_item').addClass('bc_active_item').find('.bc_tab_details').slideDown();
				$(this).closest('.bc_tab_item').siblings().removeClass('bc_active_item')

				if ($(this).closest('.bc_tab_item').hasClass('bc_active_item')) {
					$(this).closest('.bc_tab_item').siblings().find('.bc_tab_details').slideUp();
				}
				else{
					$(this).closest('.bc_tab_item').siblings().find('.bc_tab_details').slideDown();
				}
			});
			//TOGGLE MOBILE MENU
			$('.open_mobile_menu').on('click', function(){
				$('.sc_header_menu').addClass('bc_active');
			});
			$('.close_mobile_menu').on('click', function(){
				$('.sc_header_menu').removeClass('bc_active');
			});
		},
		bcCarousel: function (){
			$('.bc_slider_for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.bc_slider_nav'
			});
			$('.bc_slider_nav').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.bc_slider_for',
				dots: false,
				centerMode: true,
				focusOnSelect: true
			});
		},
		bcAnimatedScroll: function(){
			$(".sc_header_menu ul li a").on('click', function(e) {
				e.preventDefault();
				var target = $(this).attr('href');

				$('html, body').animate({
					scrollTop: ($(target).offset().top)
				}, 2000);
				$('.sc_header_menu').removeClass('bc_active');
			});
		},
		bcPlyaVideoModal: function(){
			var iframeLink;
			$('.bc_play_video').on('click',function(){
				iframeLink = $(this).closest('.bc_section').find('.bc_wrapper iframe').attr('src');
				$(this).closest('.bc_section').find('.bc_modal_video_play').addClass('bc_active');
			});
			$('.bc_close_modal').on("click",function(e){
				$('.bc_modal_video_play').removeClass('bc_active');
				$(this).closest('.bc_section').find('.bc_wrapper iframe').attr('src', '');
				$(this).closest('.bc_section').find('.bc_wrapper iframe').attr('src', iframeLink);
			});
		}

	};
	$( document ).ready( function(){
		brightCoin.init();
		setTimeout(function(){
			$("html").addClass("page_loaded")
		}, 200 );
	});



// pricing 

$( document ).ready( function(){
	var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
 });










}( jQuery ) );


// Pricing

(function(){
	const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
})();






// The function for change automatic last words text of the top slider...

(function(){

	var words = [
			'your Company.',
			'your Equity.',
			'Real Estate.',
			'Debt.',
			'Fine Art.',
			'Anything!'
			], i = 0;
	setInterval(function(){
			$('#your_word').fadeOut(function(){
					$(this).html(words[i=(i+1)%words.length]).fadeIn();
			});
	}, 1200);
		
})();