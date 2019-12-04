let drop_menu = document.querySelector(".drop_menu");
let dropdown_menu_list = document.querySelector(".dropdown_menu-list");

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

  $('.slick-next').hide();
  $('.slick-prev').hide();