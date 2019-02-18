var banners = document.getElementById("baners");
var signs = document.getElementById("signs");
var dcals = document.getElementById("dcals");
var busness = document.getElementById("busness");
var homeSigns = document.getElementById("homeSigns");
var wehcle = document.getElementById("wehcle");
var contentBlock = document.getElementById("contentBlock").children;
var navigatorBlock = document.getElementById("navigation_block");

navigatorBlock.children[1].style.backgroundColor = '#0096d6';
navigatorBlock.children[1].style.color = '#ffffff';
navigatorBlock.children[1].getElementsByTagName("I").item(0).style.color="#0096d6";

function displayNone(a,b,c,d,e,f){
  for(var i = 0; i < contentBlock.length; i++){
    contentBlock[i].style.display = "none";
  }

  for(var j = 0; j < navigatorBlock.children.length;j++ ){
    navigatorBlock.children[j].style.backgroundColor = "#e6e6e600";
    navigatorBlock.children[j].style.color = "#333333";
    navigatorBlock.children[j].getElementsByTagName("I").item(0).style.color="#e6e6e600";
  }
}


function openPage(a,b){
  displayNone();
  var nameID = document.getElementById(a).id;
  var page = document.getElementById(nameID);
  page.style.display = "block";

  var buttId = document.getElementById(b).id;
  var color = document.getElementById(buttId);
  color.style.backgroundColor = '#0096d6';
  color.style.color = '#ffffff';
  var nodelist = color.getElementsByTagName("I").item(0);
  nodelist.style.color = '#0096d6';

}