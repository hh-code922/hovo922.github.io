$(document).ready(function(){

    //.............header nav ....................


	$('#nav-icon0,#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

// function for scrolling 


$(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 300){
     /*  // $('#headNav').css('padding-bottom','0px');
        $('#headNav').css('opacity','0');*/

        $('header').css('display','none');
        $("#headNav").removeClass( "positionFix opacitYStyle" );
    }
    if(height  >= 500) {
        $('header').css('display','block');
        $("header").addClass('positionFix opacitYStyle');
        $("header").css('width','106.2%');
        $("header").css('top','0%');

        $('#headNav').css('padding-left','0px');
        $('#navbarNav_2').css('right','4.8%');
        $('.nav-icon_1').css('right','2.5%');
    /*  $('header').css('display','none');
      $('header').css('display','block');

     
        $('#headNav').css('box-shadow','#d6cccc 1px 1px 15px 0px');
       // $('#headNav').css('padding-bottom','34px');
        $("#headNav").addClass('positionFix opacitYStyle');
        $('#headNav').css('opacity','1');
       // $('#headNav').css('padding-left','32px');
        $('#navbarNav_2').css('right','6.1%');*/

    } else if(height == 0){
        $('header').css('display','block');
        $("header").removeClass( "positionFix opacitYStyle" );
        $('#headNav').css('padding-left','16px');
        $("header").css('width','100%');
        $('#navbarNav_2').css('right','0');
        $('.nav-icon_1').css('right','-2.5%');
      /*  $("#headNav").removeClass( "positionFix opacitYStyle" );
        $('#headNav').css('box-shadow','none');
        $('#headNav').css('opacity','1');
       // $('#headNav').css('padding-bottom','34px');
       // $('#headNav').css('padding-left','16px');
       // $('#navbarNav_2').css('right','5%');*/
    }
});











 
 

});


$("#ex2").slider({});

// Without JQuery




//$('#ex2').slider().data('slider');

//alert($("#ex2").data('value'));

//('.slider-handle').on('click',function(){document.getElementById("ee").innerHTML = $("#ex2").data('value');})

