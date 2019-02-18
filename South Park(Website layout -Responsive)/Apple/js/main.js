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

function addreferance(){
  $("#add_reference a").click()
}