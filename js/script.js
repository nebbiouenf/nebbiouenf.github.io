// Basic scripts
// on page load functions
function on_page_load(){
	//populate_nav_sidebar();
	//footer_content();
	//footNote();
	//header_content();	
}

//<!-- <img alt="Logo" src="img/header_desktop.png"> --> \
//Header section
function header_content(type="", bg_color="rgb(230,231,232)"){
  var header = document.getElementById("header");
  if(type == "event"){
    header.style.backgroundColor = bg_color;
    bg_img='header_desktop.png';
    img_size = 'cover';
    screen_width = window.innerWidth;// viewportwidth	
    if(screen_width >=320 && screen_width <750){ 
      bg_img='header_mobile.png'; 
      img_size= 'auto 80%';	  
    }
    else if(screen_width >=768 && screen_width <1024){ 
      bg_img='header_mobile.png'; 
      img_size= 'cover';
    }
    var segments = window.location.pathname.split('/');
    // color image repeat attachment position size origin clip|initial|inherit
    
    header.style.backgroundImage = 'url("../'+segments.slice(-2,-1)+'/'+bg_img+'")'; 
    header.style.backgroundSize = img_size; 
    header.style.backgroundPosition= 'center bottom';
    header.innerHTML='\
	  <a id="menu" href="javascript:void(0);" onclick="show_menubar(\'..\')"><img src="../img/menu_show.png" alt="menu" style="display:inline; height: 32px; width: 32px;"></a>   \
	  ';
  }
  else{
  header.innerHTML='\
	  <a id="menu" href="javascript:void(0);" onclick="show_menubar(\'.\')"><img src="img/menu_show.png" alt="menu" style="display:inline; height: 32px; width: 32px;"></a>   \
	  ';
  }
}


// Populate Navigation bar
//  to add a new page update the hash h
//		example: h['Associações'] = 'membership.html'; 
//			will create a label 'Associações' on the webpage and link to membership.html page
function populate_nav_sidebar(){
	var h = new Object();
	h['Pagina inicial'] = 'index.html';
//	h['Associações'] = 'membership.html';
	h['Eventos'] = 'events.html';
	h['Cursos'] = 'courses.html';
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


// add members to about us page
// Rebeka Souza, Leticia Nascimento, Cida Bertonceli,
// Yrexam Ribeiro, Ulli Barros, Gabriela Petroceli, Sanderson Calixto,Francisnei Pedrosa Silva,Vinicius Mussi, Enrico Cossi Arantes
function populate_member_list(){
	var h = new Object();
	// name             Description 
	h['Maria Aparecida Aride Bertonceli'] = {"course":"Doutorando","lab":"LQFPP", "univ":"UENF", "lattes":"http://lattes.cnpq.br/9217151774218625"};
	h['Rebeka Souza'] = {"course":"Doutorando","lab":" ", "univ":"UENF", "lattes":"#"};
	h['Leticia Nascimento'] = {"course":"Doutorando","lab":"LBR", "univ":"UENF", "lattes":"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8150997A2"};
	h['Ulli Barros'] = {"course":"Mestrando","lab":"LQFPP", "univ":"UENF", "lattes":"#"};
	h['Francisnei Pedrosa da Silva'] = {"course":"Doutorando","lab":"LQFPP", "univ":"UENF", "lattes":"http://lattes.cnpq.br/8154976376584399"};
	h['Enrico Cossi Arantes'] = {"course":"Mestrando","lab":"LBCT", "univ":"UENF", "lattes":"http://lattes.cnpq.br/9984795509104651"};
	h['Yrexam Ribeiro'] = {"course":"Doutorando","lab":"LBCT", "univ":"UENF", "lattes":"http://lattes.cnpq.br/1626204785454495"};
	h['Gabriela Petroceli Mota'] = {"course":"Doutorando","lab":"LFBM", "univ":"UENF", "lattes":"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8736711P5"};
	h['Vinicius Mussi'] = {"course":" ","lab":" ", "univ":"UENF", "lattes":"#"};
	h['Kanhu Charan Moharana'] = {"course":"Doutorando","lab":"LQFPP", "univ":"UENF", "lattes":"http://lattes.cnpq.br/2585560606421215"};
	h['Fernanda'] = {"course":"Mestrando","lab":"LBCT", "univ":"UENF", "lattes":"#"};
	h['Sanderson Dias Calixto'] = {"course":"Mestrando","lab":"LBR", "univ":"UENF", "lattes":"http://lattes.cnpq.br/4705348856252126"};
	h['Alan Tardin da Silva'] = {"course":"Doutorando","lab":"LBT", "univ":"UENF", "lattes":"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4332211P4"};
	//h['Leticia Nascimento'] = {"course":"Doutorando","lab":"LQFPP", "univ":"UENF", "lattes":"#"};
  for(var member_name in h){
    document.getElementById('member_list').innerHTML = document.getElementById('member_list').innerHTML + 
    '<p class="member_details" >'+
          "<a href='"+h[member_name].lattes+"' target='_blank'> "+member_name+'</a>'+
		  "<span style='font-style:italic;'>  "+h[member_name].course+"</span>" +
          "<span> "+h[member_name].lab+", "+h[member_name].univ+".</span> \
        </p>";  
  }
}




//footer content
function footer_content(relative_path='.'){
	var footer = document.getElementById("footer");
	footer.innerHTML = '<ul> \
       <li><a href="http://www.uenf.br/portal/index.php/br/" target="_blank"><img src="'+relative_path+'/img/UENF_icon.png" style=" " /></a></li> \
       <!-- <li><a href="#">Link 2</a></li> --> \
     </ul>     \
    <div style="float: right; " >\
     <a href="https://www.facebook.com/nebbio.uenf" target="_blank"><img src="'+relative_path+'/img/Facebook.png" alt="facebook icon" class="social_me_icons"/></a>\
     <a href="https://www.instagram.com/nebbiouenf/"  target="_blank" ><img src="'+relative_path+'/img/Instagram.png" alt="instagram icon" class="social_me_icons"/></a>\
    </div>';
}
//footnotes
function footNote(){
	var footnote = document.getElementById("footnote");
	footnote.innerHTML=' \
	<p >Best viewed in Mozilla Firefox version 58.0 and above (with resolution 1024x768).</p> \
	<p >| Optimized view in smartphones and iPods (with resolution 375x668 and 768x1024).</p> \
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
//Go to top function 
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

//image slide show
var slideIndex = 0;
function showSlides(n){
	var image_slider_ul = document.getElementById("image_slider").children;
	for(var i=0; i<image_slider_ul.length; i++ ){
		image_slider_ul[i].getElementsByTagName("A")[0].style.display = "none"; 
	}
	if(n<0){n=0}
	else if (n>=image_slider_ul.length){n=image_slider_ul.length-1}
	image_slider_ul[n].getElementsByTagName("A")[0].style.display = "block"; 
	slideIndex = n;
}
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function image_slider(){
	var image_slider_ul = document.getElementById("image_slider").children;	
	
	if (slideIndex>= image_slider_ul.length) {slideIndex = 0} 
	showSlides(slideIndex);
	slideIndex++;	
	setTimeout(image_slider, 5000); // Change image every 2 seconds	
}