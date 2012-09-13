function $(id){  
		return document.getElementById(id);  
	}

function opera(){
	window.open('opera.html', '_self')
}

function chrome(){
	window.open('http://desciclopedia.org/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp/Chrome', '_blank')
}

function shareFacebook(){
	window.open('https://www.facebook.com/sharer/sharer.php?u=http://desciclopedia.org/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp', '', 'width=657,height=367')
}

function shareTwitter(){
	window.open('https://twitter.com/intent/tweet?source=webclient&text=Estou+usando+o+DescicloApp,+um+aplicativo+@DaDesciclopedia,+o+%C3%BAnico+aprovado+por+Chuck+Norris,+baixe+voc%C3%AA+tamb%C3%A9m%21%21+http://vales.ca/descicloapp', '', 'width=600,height=257')
}

function shareGooglePlus(){
	window.open('https://plus.google.com/share?url=http://desciclopedia.org/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp', '', 'width=600,height=400')
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
	$('opera').onclick=opera;
	$('chrome').onclick=chrome;
	$('sharefacebook').onclick=shareFacebook;
	$('sharetwitter').onclick=shareTwitter;
	$('sharegoogleplus').onclick=shareGooglePlus;
}
