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
	h['Contate-nos'] = 'contact.html';	
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
	h["Maria Aparecida Aride Bertonceli"] = {"course":"Doutorando","lab":"LQFPP","univ":"UENF","lattes":"http://lattes.cnpq.br/9217151774218625", 'dp':'cida.jpg'};
	h["Gabriela Petroceli Mota"] = {"course":"Doutorando","lab":"LFBM","univ":"UENF","lattes":"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8736711P5", 'dp':'gabri.jpg'};
	h["Yrexam Rodrigues de Souza Ribeiro "] = {"course":"Doutorando","lab":"LBCT","univ":"UENF","lattes":"http://lattes.cnpq.br/1626204785454495", 'dp':'yrexam.jpg'};
	h["Francisnei Pedrosa da Silva"] = {"course":"Doutorando","lab":"LQFPP","univ":"UENF","lattes":"http://lattes.cnpq.br/8154976376584399", 'dp':'fransis.jpg'};
	h["Leticia Silva Nascimento"] = {"course":"Doutorando","lab":"LBR ","univ":"UENF","lattes":"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8150997A2", 'dp':'leticia.jpg'};
	h["Sanderson Dias Calixto"] = {"course":"Doutorando","lab":"LBR","univ":"UENF","lattes":"http://lattes.cnpq.br/4705348856252126", 'dp':'sanderson.jpg'};
	h["Alan Tardin da Silva"] = {"course":"Doutorando","lab":"LBT","univ":"UENF","lattes":"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4332211P4", 'dp':'alan.jpg'};
	h["Ulli Barros Oliveira"] = {"course":"Doutorando","lab":"LQFPP","univ":"UENF","lattes":"http://lattes.cnpq.br/7076969411682965", 'dp':'ulli.jpg'};
	h["Rebeka Souza"] = {"course":"Doutorando","lab":"LBR","univ":"UENF","lattes":"http://lattes.cnpq.br/7019355651582809", 'dp':'rebeka.jpg'};
	h["Luiza Gonçalves Ayres"] = {"course":"Mestrando","lab":"LBR","univ":"UENF","lattes":"http://lattes.cnpq.br/2853673446493637", 'dp':'luiza.jpg'};
	h["Kanhu Charan Moharana"] = {"course":"Doutorando","lab":"LQFPP","univ":"UENF","lattes":"http://lattes.cnpq.br/2585560606421215", 'dp':'kcm.jpg'};
	h["Enrico Cossi Arantes"] = {"course":"Mestrando","lab":"LBCT","univ":"UENF","lattes":"http://lattes.cnpq.br/9984795509104651", 'dp':'enrico.jpg'};
	h["Fernanda Soares dos Santos Chaves"] = {"course":"Mestrando","lab":"Lbct","univ":"UENF","lattes":"http://lattes.cnpq.br/9271217223620635", 'dp':'nanda.jpg'};
	h["Vinicius de Oliveira Mussi"] = {"course":"Doutorando","lab":"LBR","univ":"UENF","lattes":"http://lattes.cnpq.br/5666772356410059", 'dp':'vinicius.jpg'};
	h["Milena Bellei Cherene"] = {"course":"Doutorando","lab":"LFBM","univ":"UENF","lattes":"http://lattes.cnpq.br/8319659060612916", 'dp':'profile_F.jpg'}; 
	h["Nayara Vigneron de Oliveira"] = {"course":"Mestrando","lab":"LBR","univ":"UENF","lattes":"#", 'dp':'profile_F.jpg'}; 
	h["Douglas Ribeiro Lucas "] = {"course":"Mestrando","lab":"","univ":"UENF","lattes":"#", 'dp':'profile_M.jpg'}; 
	// Luu Riberiro, Milena, Douglas
	//https://forms.gle/znuia75AofnQtU329
	//h['Leticia Nascimento'] = {"course":"Doutorando","lab":"LQFPP", "univ":"UENF", "lattes":"#"};
  for(var member_name in h){
    document.getElementById('member_list').innerHTML = document.getElementById('member_list').innerHTML + 
    '<p class="member_details" >'+
		  "<img src='img/members/"+h[member_name].dp+"' src='"+h[member_name].dp+"' />"+
		  "<span>"+
			"<a href='"+h[member_name].lattes+"' target='_blank'> "+member_name+'</a>'+
			"<span style='font-style:italic;'>  "+h[member_name].course+"</span>" +
			"<span> "+h[member_name].lab+", "+h[member_name].univ+".</span> \
		  </span>\
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
	<p >This site is best viewed in Firefox v58+(with resolution 1024x768).\
	| Optimized view in smartphones and iPods (375x668 and 768x1024).</p> \
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

function countdown(){
	var countDownDate = new Date("Oct 3, 2019 08:00:00").getTime();		
	// Get today's date and time
	var now = new Date().getTime();
	// Find the distance between now and the count down date
	var distance = countDownDate - now;
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	//document.getElementById("demo").innerHTML = days + "d " + hours + "h "
	//+ minutes + "m " + seconds + "s ";
	document.getElementById("counter_time").innerHTML = days;
	document.getElementById("hour").innerHTML = hours;
	document.getElementById("minute").innerHTML = minutes;
	document.getElementById("second").innerHTML = seconds;
	// If the count down is finished, write some text
	if (distance < 0) {		
		document.getElementById("counter_time").innerHTML = "-1";
		document.getElementById("hour").innerHTML = 0;
		document.getElementById("minute").innerHTML = 0;
		document.getElementById("second").innerHTML = 0;
	  }
}


// Course event abstract diplay
function show_more(a,e){
 var abstract = document.getElementById(a);
 if(abstract.style.height == '100%'){
  abstract.style.height = '60px';
  e.innerHTML = 'Show more';
 }
 else{
  abstract.style.height = '100%';
  e.innerHTML = 'Show less';
 } 
}
function show_enroll_form(form_id){
 document.getElementById(form_id).style.display='block';
 document.getElementById(form_id).style.width='98%';
 document.getElementById(form_id).style.margin='0 auto';
}
function hide_enroll_form(form_id){
 document.getElementById(form_id).style.display='none';
}



