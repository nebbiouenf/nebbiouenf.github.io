// Basic scripts

// Args: relative path
function show_menubar(path){
 var nav = document.getElementById("navigation");
 var menu = document.getElementById("menu");
 if (nav.style.display === "block"){
   nav.style.display="none";
   menu.innerHTML = '<img src="'+path+'/img/menu_show.png" alt="menu" style="height: 32px; width: 32px;">'
 }
 else{
  nav.style.display="block";
  menu.innerHTML = '<img src="'+path+'/img/menu_hide.png" alt="menu" style="height: 32px; width: 32px;">'
 }
 return(true);
}
