function $(id){  
		return document.getElementById(id);  
	}

function descicloApp(){
	window.open('http://desciclopedia.org/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp')
}

window.onload=function(){  
	$('faq').onclick = function(){  
		window.location="faq.html";
	}
	$('changelog').onclick = function(){  
		window.location="changelog.html";
	}
	$('sobre').onclick = function(){  
		window.location="sobre.html";
	}
	$('descicloapp').onclick=descicloApp;
}