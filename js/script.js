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