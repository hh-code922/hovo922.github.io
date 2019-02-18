var content = document.getElementById("content");
//var block = document.getElementById("block");

function LunchAll(ul_names,topName,block){
  var namesArray = [];
  var nams_2Array = [];
  var nameGrup = ul_names;
  var mainName = topName;
  var  size_arr = [];
  var colorIndex = 0;
  var index = 0;
  for(var i = 0; i <nameGrup.length; i++ ){
    namesArray.push(nameGrup[i].innerHTML);
  }


  // set size


  function setSizeTerminal(){

    for(var i = 0; i < block.children.length; i++){
      size_arr.push("1fr");
    }

    block.style.gridTemplateColumns = size_arr.join(" ");
  }

  setSizeTerminal();


  function clearNames(a,b) {
    for(var j = 0; j < a.length;j++){
      a[j].style.display = "none";
    }
    for(var k = 0; k < a.length - 1; k++){
      a[k].style.display = "block";
    }
    for(var w = 0; w < a.length; w++ ){
      if(w == b){continue}else {
        nams_2Array.push(namesArray[w]);
      }
    }
    for(var g = 0; g < namesArray.length; g++){
      a[g].innerHTML = nams_2Array[g];
    }
  }

  function SetManinName(){
    if(index < namesArray.length ){
      mainName.innerHTML = namesArray[index];
      clearNames(nameGrup,index);
      index++;
      nams_2Array.splice(0);
      $(".customers>ul").css("display","none");
      setTimeout(function () {
        $(".customers>ul").css("display","block");
      }, 100);
    }else{
      index = 0;
      mainName.innerText = namesArray[index];
      clearNames(nameGrup,index);
      nams_2Array.splice(0);
      index++;
      $(".customers>ul").css("display","none");
      setTimeout(function () {
        $(".customers>ul").css("display","block");
      }, 100);
    }

  }
  SetManinName();
  setInterval(function () {
    SetManinName();
  },5000);
}


var lunchArr = [];



function startAll(block){
  for(var i = 0; i < block.children.length; i++){
    lunchArr.push(new LunchAll(block.children[i].children[1].children,block.children[i].children[0].children[1],block));
  }
}

var part_1 = new startAll(content.children[0].children[0]);
var part_2 = new startAll(content.children[1].children[0]);



$('.customers>ul> li').each(function () {
  var delay = ($(this).index() / 4) + 's';
  $(this).css({
    webkitAnimationDelay: delay,
    mozAnimationDelay: delay,
    animationDelay: delay
  });
});


