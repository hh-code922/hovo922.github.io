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





// ............................... Slider Top..........................


function sliderTop(){

    // array for main images ....
   var imgBlock = document.getElementById('img_sliderTop_block').children;


// array for buttons with images....

   var btnImg_block = document.getElementById('buttons_img_sliderTop').children;

   console.log(imgBlock[0]);


   // Last and next buttons

    var last = $('#nextImg');
    var next =$('#lastImg');
    console.log(next);


   // your images name will be at the arr
    var srcImg = ['img_1.png','img_2.png','img_3.png','img_4.png'];



 
   // set display none all  img's div

   function noneIMG(){

        for(var i = 0; i < imgBlock.length;i++){
            imgBlock[i].style.display = 'none';
        }
   } 


  
   // The function for set active status in img's buttons
 

    function active_class_delet_Btn(){
       
        for(var i = 0; i < btnImg_block.length; i++){
                btnImg_block[i].classList.remove('active_slide_top');
        }
    }



   var index  =  srcImg.length - srcImg.length;
   
   noneIMG();


   for(var kay = 0; kay < srcImg.length; kay++){
    btnImg_block[kay].style.display = "block";
    btnImg_block[kay].style.backgroundRepeat = 'no-repeat';
    btnImg_block[kay].style.backgroundImage  = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[kay] + ")";
    
   }

   imgBlock[index].style.display = "block";
   imgBlock[index].style.backgroundImage = backgroundImage = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";
   $("#imgBtn_1").addClass('active_slide_top');

   console.log('url(" img/top_slider/main_img/ ")');





 // The  part for controling slider wit buttons  last and next 


 

   last.on('click',function(){

    active_class_delet_Btn();

       if(index - 1 >= 0) {
           index--;
           console.log(index);
           noneIMG();


          

            imgBlock[index].style.display = "block";
            imgBlock[index].style.backgroundRepeat = 'no-repeat';
            imgBlock[index].style.backgroundImage  = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";
            btnImg_block[index].classList.add('active_slide_top');
       }
       else{
           index = srcImg.length - 1;
           console.log('chi poxvel' + '  ' + index);
           noneIMG();
           imgBlock[index].style.display = "block";
          
           imgBlock[index].style.backgroundRepeat = 'no-repeat';
           imgBlock[index].style.backgroundImage = backgroundImage = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";
          // index = srcImg.length;
           
          btnImg_block[index].classList.add('active_slide_top');
       }
   });


   next.on('click',function(){

    active_class_delet_Btn();
       
    if(index + 1 <  srcImg.length) {
        index++;
        console.log(index);
        noneIMG();
         imgBlock[index].style.display = "block";
       
         imgBlock[index].style.backgroundRepeat = 'no-repeat';
         imgBlock[index].style.backgroundImage = backgroundImage = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";
         btnImg_block[index].classList.add('active_slide_top');

    }
    else{
        index = 0;
        console.log('chi poxvel' + '  ' + index);
       noneIMG();
        imgBlock[index].style.display = "block";
       
        imgBlock[index].style.backgroundRepeat = 'no-repeat';
        imgBlock[index].style.backgroundImage = backgroundImage = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";
        
        btnImg_block[index].classList.add('active_slide_top');
    }
});

   

// the part for active imges  with buttonsIMG


   $("#imgBtn_1").on('click',function(){
    active_class_delet_Btn();
    noneIMG();
    index = 0;
    imgBlock[index].style.display = "block";
   
   imgBlock[index].style.backgroundRepeat = 'no-repeat';
   $("#imgBtn_1").addClass('active_slide_top');
    imgBlock[index].style.backgroundImage = backgroundImage = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";

});


$("#imgBtn_2").on('click',function(){
    active_class_delet_Btn();
    noneIMG();
    index = 1;
    imgBlock[index].style.display = "block";
   
    imgBlock[index].style.backgroundImage = backgroundImage = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";
    $("#imgBtn_2").addClass('active_slide_top');
});


$("#imgBtn_3").on('click',function(){
    active_class_delet_Btn();
    noneIMG();
    index = 2;
    imgBlock[index].style.display = "block";
   
    imgBlock[index].style.backgroundImage = backgroundImage = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";
    $("#imgBtn_3").addClass('active_slide_top');
});



$("#imgBtn_4").on('click',function(){
    active_class_delet_Btn();
    noneIMG();
    index = 3;
    imgBlock[index].style.display = "block";
  
    imgBlock[index].style.backgroundImage = backgroundImage = "url" + "(" + 'img/top_slider/main_img/'+ srcImg[index] + ")";
    $("#imgBtn_4").addClass('active_slide_top');
});





}

sliderTop();








//.................... seting for radio innput ................


var lable_arr_1 =[$("#lable_1"),$("#lable_2")];

var lable_arr_2 =[$("#lable_3"),$("#lable_4")];

function none_color_lable(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i].css("color",'#989898');
    }
    
}


$("#lable_1").on('click',function(){
    none_color_lable(lable_arr_1);
    $("#lable_1").css('color','#2b9100');
});

$("#lable_2").on('click',function(){
    none_color_lable(lable_arr_1);
    $("#lable_2").css('color','#2b9100');
});


$("#lable_3").on('click',function(){
    none_color_lable(lable_arr_2);
    $("#lable_3").css('color','#2b9100');
});


$("#lable_4").on('click',function(){
    none_color_lable(lable_arr_2);
    $("#lable_4").css('color','#2b9100');
});



// ............................. QTY and Delivery Every block...................




function increaseValue() {
   var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  
  }


  $('#increase').on('click',function(){

    increaseValue();
  });
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
   

  }
 $('#decrease').on('click',function(){
    decreaseValue();
 })




 

});


