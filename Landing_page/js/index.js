
function openCity(evt, cityName,a,b) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(a);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(b);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
      
}






(function(){
    var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}



// The functon for select elements  

function closeAllSelect(elmnt,className) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
})()


var prog_head_1 = document.getElementsByClassName('prog_1')[0].children[0];
var prog_cont_1 = document.getElementsByClassName('prog_1')[0].children[1];


var prog_head_2 = document.getElementsByClassName('prog_2')[0].children[0];
var prog_cont_2 = document.getElementsByClassName('prog_2')[0].children[1];


var prog_head_3 = document.getElementsByClassName('prog_3')[0].children[0];
var prog_cont_3 = document.getElementsByClassName('prog_3')[0].children[1];



//The function for  progres 

(function(){
    function Progres(a,c){
        var prog = document.getElementsByClassName(a);
        prog[0].style.height = c +"%";
        prog[0].style.top = 68 - c + '%';
     }
     
     var progres_1 = new Progres('at_progres_1',45);
     var progres_2 = new Progres('at_progres_2',15);
     var progres_3 = new Progres('at_progres_3',25);
})();




// function tets 
function Coefficients(evt, cityName ,a,b) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(a);
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(b);
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenN").click();




//................. Site bar ..............


(function(){
  function Sitebar(a,b,color_1,color_2){
    var btn_poVidamsports = document.getElementById(a);
     var poVidamsports = document.getElementById(b);
     var _true = false;
   
     var a = !_true;
   
     btn_poVidamsports.onclick = function(){
       _true = !_true;
       if(_true){
         btn_poVidamsports.style.backgroundColor = color_1;
         btn_poVidamsports.children[0].classList.remove("fa-caret-left");
         btn_poVidamsports.children[0].classList.add("fa-caret-down");
         
         poVidamsports.style.display = "block";
       }else{
         btn_poVidamsports.style.backgroundColor = color_2;
         btn_poVidamsports.children[0].classList.remove("fa-caret-down");
         btn_poVidamsports.children[0].classList.add("fa-caret-left");
   
   
         poVidamsports.style.display = "none";
       }
     }
   }
   
   
   
   var sitebar_1 = new Sitebar('btn_poVidamsport','poVidamsport','#65c7a8','#58b094');
   
   var sitebar_2 = new Sitebar('btn_xokey','xokey','#58b094','#6fd9b7');
})();



//..............................Media query ..................................


function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('media_style_btn_1').innerHTML ="2 Х шанс"
    document.getElementById('media_style_btn_2').innerHTML ="2 команды забьют "

    document.getElementById('table_list_bet_header').children[2].innerHTML = "1"

    document.getElementById('table_list_bet_header').children[3].innerHTML = "x"

     document.getElementById('table_list_bet_header').children[4].innerHTML = "2"
  } else {

    document.getElementById('media_style_btn_1').innerHTML ="Обе команды забьют "

    document.getElementById('media_style_btn_2').innerHTML ="Двойной шанс"

    document.getElementById('table_list_bet_header').children[4].innerHTML = "1.5"

    document.getElementById('table_list_bet_header').children[3].innerHTML = "2"

    document.getElementById('table_list_bet_header').children[4].innerHTML = "2.5"

  }
}

var x = window.matchMedia("(max-width: 1235px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


//console.log(document.getElementById('table_list_bet_header').children[4].innerHTML = "qyaab");

