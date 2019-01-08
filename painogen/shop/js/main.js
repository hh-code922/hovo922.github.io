$(document).ready(function(){

    //.............header nav ....................


	$('#nav-icon0,#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});


// function for scrolling 


$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 300){
        $('#headNav').css('padding-bottom','0px');
        $('#headNav').css('opacity','0');
    }
    if(height  > 500) {

      $('header').css('display','none');
      $('header').css('display','block');


        $('#headNav').css('box-shadow','#d6cccc 1px 1px 15px 0px');
        $('#headNav').css('padding-bottom','34px');
        $("#headNav").addClass('fixed-top');
        $('#headNav').css('opacity','1');

    } else if(height == 0){
        $("#headNav").removeClass( "fixed-top" );
        $('#headNav').css('box-shadow','none');
        $('#headNav').css('opacity','1');
        $('#headNav').css('padding-bottom','34px');
    }
});










 
 

});


$("#ex2").slider({});

// Without JQuery




//$('#ex2').slider().data('slider');

//alert($("#ex2").data('value'));

//('.slider-handle').on('click',function(){document.getElementById("ee").innerHTML = $("#ex2").data('value');})

