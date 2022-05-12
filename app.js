const navToggle     =   document.querySelector(".nav-toggle")
const links         =   document.querySelector(".links")

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links')
	if(navToggle.style.transform == "rotate(90deg)"){
		navToggle.style.transform	=	"rotate(0deg)";
	}else{
		navToggle.style.transform	= "rotate(90deg)";
	}
})