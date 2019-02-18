
function slider_1() {
  var radio_1 = document.getElementById('SlRadio_1');
  var radio_2 = document.getElementById('SlRadio_2');
  var radio_3 = document.getElementById('SlRadio_3');
  var radio_4 = document.getElementById('SlRadio_4');
  var sl_imgBlock = document.getElementById('sl_imgBlock');

  var photo_1 = document.getElementById('photo_1');
  var photo_2 = document.getElementById("photo_2");
  var photo_3 = document.getElementById("photo_3");
  var photo_4 = document.getElementById("photo_4");


  sl_imgBlock.children[0].style.display = 'block';


  function hide_Img(){
    for(var i = 0; i < sl_imgBlock.children.length; i++){
      sl_imgBlock.children[i].style.display = "none";

    }
  }




  radio_1.onclick = function(){

    hide_Img();
    sl_imgBlock.children[0].style.display = "block";


  };

  radio_2.onclick = function(){
    hide_Img();
    sl_imgBlock.children[1].style.display = "block";

  };

  radio_3.onclick = function(){
    hide_Img();
    sl_imgBlock.children[2].style.display = "block";

  };

  radio_4.onclick = function(){
    hide_Img();
    sl_imgBlock.children[3].style.display = "block";

  };


}

slider_1();


/*           SLIDER 2       */


function slider_2(){
  var left_button = document.getElementById('click_left');
  var right_button = document.getElementById('click_right');
  var textSliderBlock = document.getElementById('slider_2_block');
  var left = document.getElementById("left_infoSlider");
  var right = document.getElementById('right_infoSlider');

  var index = 0;
  left_button.onclick = function () {
    last();
  };

  right_button.onclick = function(){
    next();
  };

  function last(){
    textSlider_Off();

    if(index >0){
      index--;
    }else {
      index = textSliderBlock.children.length-1;
    }
    textSliderBlock.children[index].style.display = 'block';
  }

  function next(){
    textSlider_Off();

    if(index < textSliderBlock.children.length-1){
      index++;
    }else{
      index = 0;
    }
    textSliderBlock.children[index].style.display = 'block';
  }

  function textSlider_Off(){
    for(var i = 0; i < textSliderBlock.children.length; i++){
      textSliderBlock.children[i].style.display = 'none';
    }
  }


}

slider_2();