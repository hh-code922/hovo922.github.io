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

function testimonial(){


  function fa(a){return count = false;}
  function tr(a){return count = true;}
var count = false;

  document.getElementById("aa").onclick=function(){



    if(!count){
      tr(count);
      $('#block_of_text_testimonial').css("display", "block");
      $('#block_of_text_testimonial').animate({
        opacity: '1'
      },1000);
    }
    else {
      fa(count);
      $('#block_of_text_testimonial').css("display", "none");
      $('#block_of_text_testimonial').animate({
        opacity: '0'
      });

    }
  };
}
testimonial();

// The function will show you  info of the member if click to photo of  the member
function showInfoMember(){
  var x;

  var arr = [
    {name:"Tim",url:"img/member1.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Aditya",url:"img/member2.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Kelsey",url:"img/member3.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Ben",url:"img/member4.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Arjun",url:"img/member5.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Jason",url:"img/member6.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Henrik",url:"img/member7.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Kara",url:"img/member8.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Yaroslav",url:"img/member9.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Brandi",url:"img/member10.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Clarence",url:"img/member11.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Dilan",url:"img/member12.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Karen",url:"img/member13.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Ashton",url:"img/member14.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Michael",url:"img/member15.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."},
    {name:"Deborah",url:"img/member16.png",about:" CTO and cofounder of Ksplice (sold to Oracle)and Zulip (sold to Dropbox). Now founder of Zulip v2(an open source company)."}
  ];

$(".member").click(function(){
  var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
  x = $(this).attr('id');
  $("#row_a_person").show();
  $("#a_person_article p").html(arr[x].about);
  img.attr('src', arr[x].url);
  img.appendTo('.img_a_person');
  $("#button_close").click(function(){$("#row_a_person").hide();img.remove();});

})


}

showInfoMember();


function companies(){
  function fa(a){return count = false;}
  function tr(a){return count = true;}
  var count = false;
  $("#button_companies").click(function(){
     /* $("#info_companies").css("display","block");
    $("#info_companies").fadeTo(1000, 1);*/

    if(!count){
      tr(count);

       $("#info_companies").css("display","block");

    $("#info_companies").fadeTo(50, 1);
    }
    else {
      fa(count);
      $("#info_companies").css("display","none");
      $("#info_companies").css("color","#dba65e");
      $("#info_companies").animate({
        opacity: '0'
      });

    }


  });
}

companies();