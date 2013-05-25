function voce(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Voc%C3%AA')
}

function servidor(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Servidor_da_Desciclop%C3%A9dia')
}

function yourbase(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/All_your_base_are_belong_to_us')
}

function me(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Usu%C3%A1rio:%C3%81s');
}

function descicloApp(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp')
}

function chrome(){
	window.open('http://desciclopedia.org/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp/Chrome', '_blank')
}

function usuario(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Usu%C3%A1rio:%C3%81s');
}

function johnny(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Usu%C3%A1rio:UltraJohnn%C3%BF')
}

function sipho(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Usu%C3%A1rio:Siphodemos')
}

function ounao(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Ou_n%C3%A3o')
}

function dar(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Dar')
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

function descicloApp(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp')
}

var descicloapp = {
	startup: function() {
		this.prefs = Components.classes["@mozilla.org/preferences-service;1"]
				.getService(Components.interfaces.nsIPrefService)
				.getBranch("descicloapp.");
	},
	
	shutdown: function() {
		this.prefs.removeObserver("", this);
	}
}

window.addEventListener("load", function(e) { descicloapp.startup(); }, false);
window.addEventListener("unload", function(e) { descicloapp.shutdown(); }, false);

window.onload=function(){
	$('hr').css('background-color',descicloapp.prefs.getCharPref("corfavorita"));
	$('#faq').click(function(){  
		window.location="faq.html";
	});
	$('#changelog').click(function() {   
		window.location="changelog.html";
	});
	$('#opcoes').click(function() {   
		window.open('chrome://descicloapp/content/opcoes.xul', 'dptoolbalopcoes', 'width=300,height=400,left=' + (document.documentElement.clientWidth - 300) / 2 + ',top=' + (document.documentElement.clientHeight - 400) / 2);
	});
	$('#sobre').click(function() { 
		window.location="sobre.html";
	});
	$('#descicloapp').click(function() { descicloApp() });
	$('#info').click(function() { descicloApp() });
	$('#opera').click(function() {   
		window.location="opera.html";
	});
	$('#voce').click(function() { voce() });
	$('#servidor').click(function() { servidor() });
	$('#yourbase').click(function() { yourbase() });
	$('#me').click(function() { me() });
	$('#descicloapp').click(function() { descicloApp() });
	$('#info').click(function() { descicloApp() });
	$('#chrome').click(function() { chrome() });
	$('#usuario').click(function() { usuario() });
	$('#usuario').html('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Usu&aacute;rio:&Aacute;s');
	$('#mensagem').click(function() {   
		window.location="feedback.html";
	});
	$('#johnny').click(function() { johnny() });
	$('#sipho').click(function() { sipho() });
	$('#ounao').click(function() { ounao() });
	$('#dar').click(function() { dar() });
	$('#sharefacebook').click(function() { shareFacebook() });
	$('#sharetwitter').click(function() { shareTwitter() });
	$('#sharegoogleplus').click(function() { shareGooglePlus() });
}