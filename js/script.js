let drop_menu = document.querySelector(".drop_menu");
let dropdown_menu_list = document.querySelector(".dropdown_menu-list");

let mob_drop_menu = document.querySelector(".mob-drop");
let mob_dropdown_menu_list = document.querySelector(".drop_mob-list");

function dropdown_menu(){
    drop_menu.addEventListener("mousemove",function(){
        dropdown_menu_list.style.display = "block";
    });

    dropdown_menu_list.addEventListener("mousemove",function(){
        dropdown_menu_list.style.display = "block";
    });
    
    drop_menu.addEventListener("mouseout",function(){
        dropdown_menu_list.style.display = "none";
    });
    dropdown_menu_list.addEventListener("mouseout",function(){
        dropdown_menu_list.style.display = "none";
    });


    mob_drop_menu.addEventListener("mousemove",function(){
        mob_dropdown_menu_list.style.display = "block";
    });

    mob_dropdown_menu_list.addEventListener("mousemove",function(){
        mob_dropdown_menu_list.style.display = "block";
    });
    
    mob_drop_menu.addEventListener("mouseout",function(){
        mob_dropdown_menu_list.style.display = "none";
    });
    mob_dropdown_menu_list.addEventListener("mouseout",function(){
        mob_dropdown_menu_list.style.display = "none";
    });
}

dropdown_menu();

let menu_btn = document.querySelector(".mob-menu_btn");
let menu_btn_close = document.querySelector(".close_btn");
let mob_menu = document.querySelector(".mob-menu");
function mobileMenu(){
    
    menu_btn.addEventListener("click",function(){
        menu_btn.style.display = "none";
        menu_btn_close.style.display = "block";
        mob_menu.style.display = "flex"; 
        
    });

    menu_btn_close.addEventListener("click", function(){
        menu_btn.style.display = "block";
        menu_btn_close.style.display = "none";
        mob_menu.style.display = "none"; 

    });
}

mobileMenu();



function opencloseForm(){

    $(".button").click(function(){
        $(".send-form").css("display", "block");
        $(".form-opacity").css("display", "block");
    })

    $(".send-form img").click(function(){
        $(".send-form").css("display", "none");
        $(".form-opacity").css("display", "none");
    })
    
}

opencloseForm();


$('.review_cards').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        //   infinite: true
        //   dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    //   ,
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }

    ]
  });

//   $('.video-slider').slick({
//     centerMode: true,
//     // dots:true,
//     centerPadding: '60px',
//     slidesToShow: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots:true,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

  $('.slick-next').hide();
  $('.slick-prev').hide();