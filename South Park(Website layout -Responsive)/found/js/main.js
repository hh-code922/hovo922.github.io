function scrollHeader(){
  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
      document.getElementById("header").className = "test";
      //document.getElementById("tt").style.marginLeft="13%";
      document.getElementById("header").style.paddingBottom="31px";
      document.getElementById("header").style.paddingTop="40px";
    } else {
      document.getElementById("header").className = "";
    }
  }
}

scrollHeader();

function forDropDown(){
  var x = false;



  var burger = document.getElementById("burger");
  var dropdown = document.getElementById("dropDown");
  burger.onclick=function(){
    x = !x;
    if(x == true){
      dropdown.style.display = "block";
    }
  };
  document.getElementById("off_drop").onclick = function(){
    x = !x;
    if(x == false){
      dropdown.style.display = "none";
    }
  }

}

forDropDown();

function companies(){
  function fa(a){return count = false;}
  function tr(a){return count = true;}
  var count = false;
  $("#button_companies").click(function(){
    /* $("#info_companies").css("display","block");
   $("#info_companies").fadeTo(1000, 1);*/

    if(!count){
      tr(count);

      $("#row_section_6").css("display","block");

      $("#row_section_6").fadeTo(50, 1);
    }
    else {
      fa(count);
      $("#row_section_6").css("display","none");
      $("#row_section_6").css("color","#dba65e");
      $("#row_section_6").animate({
        opacity: '0'
      });

    }


  });
}

companies();