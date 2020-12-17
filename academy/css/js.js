
document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.nav');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 1){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('menutora');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('menutora');
            trangthai="duoi300";}
        }
    
    })
})

$('#multiple-items').slick({
  // accessibility: false;
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function(){
  $('.test_div>button').click(function(){
    if ($(this).parent().next().hasClass('active')) {
      $(this).parent().next().removeClass('active');
      $(this).children().removeClass('tranfomr');
      if($(this).parent().next().find('.list-sub-2').hasClass('active')) {
        $(this).parent().next().find('.list-sub-2').removeClass('active');
      }
    }
    else{
      
      $('.lits_item>ul').removeClass('active');
      $(this).parent().next().addClass('active')
      $('.tranfomr-icon').removeClass('tranfomr');
      $(this).children().addClass('tranfomr')
      // console.log($(this).parent().next()[0]);
    }

  });

  $('.test-lv2>button').click(function(){
    if ($(this).parent().next().hasClass('active')) {
      $(this).parent().next().removeClass('active');
      $(this).children().removeClass('tranfomr');
    }
    else{
      $('.list-sub-1 ul').removeClass('active');
      $(this).parent().next().addClass('active');
      $('.test-lv2 .tranfomr-icon').removeClass('tranfomr');
      $(this).children().addClass('tranfomr')
    }

  });





});

 

//    responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });