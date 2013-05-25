function DescicloToolbarBusca(event){
var q = document.getElementById("q").value;
window._content.document.location  = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?title=Especial%3ABusca&search=" + encodeURI(q);
}

function enter(event) {
	if(event.keyCode == event.DOM_VK_RETURN)
	DescicloToolbarBusca(event);
}

function desciclopedia() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/" + encodeURI(q); }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/P%C3%A1gina_principal";
	}
}

function pagina() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Usu%C3%A1rio:" + encodeURI(q); }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Especial:Minha_p%C3%A1gina";
	}
}

function discussao() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Usu%C3%A1rio_discuss%C3%A3o:" + encodeURI(q); }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Especial:Minha_discuss%C3%A3o";
	}
}

function contribuicoes() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Especial:Contribui%C3%A7%C3%B5es/" + encodeURI(q); }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Special:MyContributions";
	}
}

function vigiadas() {
	window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Especial:P%C3%A1ginas_vigiadas";
}

function arquivo() {
	window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Especial:Carregar_arquivo";
}

function aleatorio() {
	window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Especial:Aleat%C3%B3ria";
}

function mensagem() {
	window.open('chrome://descicloapp/content/DescicloToolbar/msg.html', 'dptoolbalmensagem', 'titlebar=no,width=325,height=400,left=' + (document.documentElement.clientWidth - 325) / 2 + ',top=' + (document.documentElement.clientHeight - 400) / 2);
}

function recentes() {
	window.open('chrome://descicloapp/content/DescicloToolbar/paginas/recentes.html', 'dptoolbalrecentes', 'titlebar=no,width=560,height=600,left=' + (document.documentElement.clientWidth - 560) / 2 + ',top=' + (document.documentElement.clientHeight - 600) / 2);;
}

function boteco() {
	window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Forum:Boteco";
}

function aa() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3AForumheader%2FAlco%C3%B3licos+An%C3%B4nimos&editintro=&title=Forum%3A" + encodeURI(q) + "&create=Adicionar+novo+t%C3%B3pico"; }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Forum:Alco%C3%B3licos_An%C3%B4nimos";
	}
}

function mesa() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3AForumheader%2FOfftopic&title=Forum%3A" + encodeURI(q) + "&create=Adicionar+novo+t%C3%B3pico"; }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Forum:Mesa_de_Truco";
	}
}

function desnoticias() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+not%C3%ADcia&title=DesNot%C3%ADcias%3A" + encodeURI(q) + "&create=Criar+p%C3%A1gina"; }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Desnot%C3%ADcias:P%C3%A1gina_principal";
	}
}

function descionario() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Descion%C3%A1rio:" + encodeURI(q); }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Descion%C3%A1rio:P%C3%A1gina_principal";
	}
}

function deslivros() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANovo+deslivro&title=Deslivros%3A" + encodeURI(q) + "&create=Criar+p%C3%A1gina"; }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Deslivros:P%C3%A1gina_principal";
	}
}

function despoesias() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+despoesia&title=Despoesias%3A" + encodeURI(q) + "&create=Criar+p%C3%A1gina"; }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Despoesias:P%C3%A1gina_principal";
	}
}

function descifras() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+descifra&title=Descifras%3A" + encodeURI(q) + "&create=Criar+p%C3%A1gina"; }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Descifras:P%C3%A1gina_principal";
	}
}

function desentrevistas() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Desentrevistas:" + encodeURI(q); }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Desentrevistas:P%C3%A1gina_principal";
	}
}

function descitacoes() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Descita%C3%A7%C3%B5es:" + encodeURI(q); }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Descita%C3%A7%C3%B5es:P%C3%A1gina_principal";
	}
}

function deslistas() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ADeslistas%2Fpreload&title=Deslistas%3A" + encodeURI(q) + "&create=Criar+p%C3%A1gina"; }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Deslistas:P%C3%A1gina_principal";
	}
}

function fatos() {
	var q = document.getElementById("q").value;
	if(q != "") {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Fatos:" + encodeURI(q); }
	else {
		window._content.document.location = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/Fatos:P%C3%A1gina_principal";
	}
}

function feedback() {
	window.open('chrome://descicloapp/content/DescicloToolbar/paginas/feedback.html', 'dptoolbalfeedback', 'titlebar=no,width=510,height=650,left=' + (document.documentElement.clientWidth - 510) / 2 + ',top=' + (document.documentElement.clientHeight - 650) / 2);
}

function facebook() {
	window._content.document.location = "http://facebook.com/Desciclopedia";
}

function twitter() {
	window._content.document.location = "http://twitter.com/DaDesciclopedia";
}

function opcoes() {
	window.open('chrome://descicloapp/content/opcoes.xul', 'dptoolbalopcoes', 'width=300,height=400,left=' + (document.documentElement.clientWidth - 300) / 2 + ',top=' + (document.documentElement.clientHeight - 400) / 2);
}