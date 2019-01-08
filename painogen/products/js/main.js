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
        $('#headNav').css('padding-bottom','14px');
        $('#headNav').css('padding-bottom','14px');
        $("#headNav").addClass('fixed-top');
        $('#headNav').css('opacity','1');

    } else if(height == 0){
        $("#headNav").removeClass( "fixed-top" );
        $('#headNav').css('box-shadow','none');
        $('#headNav').css('opacity','1');
        $('#headNav').css('padding-bottom','34px');
    }
});






 //.................... slider .......................

function topSlider(){

    function nonTxtSlider(a){
        for(var i = 0; i < a.length; i++){
           a.css('display','none');
          
        }
    }

    function nonBackgroundButton(buttons){
        for(var i = 0; i < buttons.length; i++ ){
            buttons[i].style.backgroundColor = '#dddddd';
        }
    }


    

    var top_slid_text_block = $('#top_slid_text_block').children();
    var bnuttons_topSlider = $('#bnuttons_topSlider').children();
    var activBTN = $('.btn_slider>div').children();

    console.log (bnuttons_topSlider);

   // console.log(parseInt($('#4btnslid').get(0).id));
    
    nonTxtSlider(top_slid_text_block);
    

    top_slid_text_block[0].style.display = 'block';
    bnuttons_topSlider[0].style.backgroundColor = '#58a437';


    $('#0btnslid').click(
        function(){
            nonTxtSlider(top_slid_text_block);
            nonBackgroundButton(bnuttons_topSlider);
            bnuttons_topSlider[0].style.backgroundColor = '#58a437';
            top_slid_text_block[parseInt($('#0btnslid').get(0).id)].style.display = 'block';
            
        }
    );

    $('#1btnslid').click(
        function(){
            nonTxtSlider(top_slid_text_block);
            nonBackgroundButton(bnuttons_topSlider);
            bnuttons_topSlider[1].style.backgroundColor = '#58a437';
            top_slid_text_block[parseInt($('#1btnslid').get(0).id)].style.display = 'block';

           
        }
    );

    $('#2btnslid').click(
        function(){
            nonTxtSlider(top_slid_text_block);
            nonBackgroundButton(bnuttons_topSlider);
            bnuttons_topSlider[2].style.backgroundColor = '#58a437';
            top_slid_text_block[parseInt($('#2btnslid').get(0).id)].style.display = 'block';
          
        }
    );

    $('#3btnslid').click(
        function(){
            nonTxtSlider(top_slid_text_block);
            nonBackgroundButton(bnuttons_topSlider);
            bnuttons_topSlider[3].style.backgroundColor = '#58a437';
            top_slid_text_block[parseInt($('#3btnslid').get(0).id)].style.display = 'block';
         
        }
    );

   
    

}

topSlider();

  



    //................. parallax............................

    
///var rellax = new Rellax('.rellax');





 

 

});


