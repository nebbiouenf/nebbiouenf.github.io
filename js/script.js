// Basic scripts
// on page load functions
function on_page_load(){
	populate_nav_sidebar();
	footer_content();
	footNote();
}

// Populate Navigation bar
//  to add a new page update the hash h
//		example: h['Associações'] = 'membership.html'; 
//			will create a label 'Associações' on the webpage and link to membership.html page
function populate_nav_sidebar(){
	var h = new Object();
	h['Pagina inicial'] = 'index.html';
	h['Associações'] = 'membership.html';
	h['Eventos'] = 'events.html';
	h['Courses'] = 'courses.html';
	h['Sobre nós'] = 'about_us.html';
	h['Contate-Nos'] = 'contact.html';	
	var nav = document.getElementById("nav_ul");
	for(var page_name in h){
		var li = document.createElement("li");
		var page = document.createElement("A"); 
		page.text= page_name;
		page.href = h[page_name]; 
		li.appendChild(page);
		nav.appendChild(li);	
	}	
}

//footer content
function footer_content(){
	var footer = document.getElementById("footer");
	footer.innerHTML = '<ul> \
       <li><a href="http://www.uenf.br/portal/index.php/br/" target="_blank">Universidade Estadual do Norte Fluminense Darcy Ribeiro</a></li> \
       <!-- <li><a href="#">Link 2</a></li> --> \
     </ul>     \
    <div style="float: right; " >\
     <a href="https://www.facebook.com/nebbio.uenf" target="_blank"><img src="img/Facebook.png" alt="facebook icon"/></a>\
     <a href="https://www.instagram.com/nebbiouenf/"  target="_blank" ><img src="img/Instagram.png" alt="instagram icon" /></a>\
    </div>';
}
//footnotes
function footNote(){
	var footnote = document.getElementById("footnote");
	footnote.innerHTML=' \
	<p >Best viewed in Mozilla Firefox version 58.0 and above (with resolution 1024x768).</p> \
	<p >Optimized view in smartphones and iPods (with resolution 375x668 and 768x1024).</p> \
	';
}
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


