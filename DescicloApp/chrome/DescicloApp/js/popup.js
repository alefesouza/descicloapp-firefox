function ir(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/' + document.getElementById('q').value); window.close(); }
	else {
		$(function() {
			$( "#alerta-ir" ).dialog({
				buttons: {
					Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	}); }
}

function editar(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=' + document.getElementById('q').value + '&action=edit'); window.close() }
	else {
		$(function() {
			$( "#alerta-editar" ).dialog({
				buttons: {
					Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	}); }
}

function pesquisar(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=Especial%3ABusca&search=' + document.getElementById('q').value); window.close() }
	else {
		$(function() {
			$( "#alerta-pesquisar" ).dialog({
				buttons: {
					Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	}); }
}

function irb(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/P%C3%A1gina_principal'); window.close();
}

function pagina(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Usu%C3%A1rio:' + document.getElementById('q').value); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Minha_p%C3%A1gina'); window.close(); } 
}

function discussao(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Usu%C3%A1rio_discuss%C3%A3o:' + document.getElementById('q').value); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Minha_discuss%C3%A3o'); window.close(); } 
}

function contribuicao(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Contribui%C3%A7%C3%B5es/' + document.getElementById('q').value); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Special:MyContributions'); window.close(); } 
}

function vigiado(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:P%C3%A1ginas_vigiadas'); window.close();
}

function carregar(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Carregar_arquivo'); window.close();
}

function aleatorio(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Aleat%C3%B3ria')
}

function mensagem(){
	window.open('msg.html', '_self');
	window.innerHeight = 400;
}

function recentes(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Special:Recentchanges/' + document.getElementById('q').value); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Special:Recentchanges/250'); window.close(); }
}

function recentespopup(){
	var esquerda = (document.documentElement.clientWidth - 560);
	window.open('paginas/recentes.html', '_self'); window.innerHeight = 600; window.innerWidth = 560; window.moveBy(esquerda,0);
}

function mais(){
	if (this.parentNode.nextSibling.childNodes[0].style.display != '') {
		document.getElementById('mais').innerHTML = '<img src="imagens/cimawp7.png" width="16px"> Menos';
		window.innerHeight = 655; this.parentNode.nextSibling.childNodes[0].style.display = ''; }
	else {
	document.getElementById('mais').innerHTML = '<img src="imagens/baixowp7.png" width="16px"> Mais';
	window.innerHeight = 420; this.parentNode.nextSibling.childNodes[0].style.display = 'none';}
}

function boteco(){
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Forum:Boteco'); window.close();
}

function aa(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3AForumheader%2FAlco%C3%B3licos+An%C3%B4nimos&editintro=&title=Forum%3A' + document.getElementById('q').value + '&create=Adicionar+novo+t%C3%B3pico'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Forum:Alco%C3%B3licos_An%C3%B4nimos'); window.close(); }
}

function truco(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3AForumheader%2FOfftopic&title=Forum%3A' + document.getElementById('q').value + '&create=Adicionar+novo+t%C3%B3pico'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Forum:Mesa_de_Truco'); window.close(); }
}

function desnoticias(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+not%C3%ADcia&title=DesNot%C3%ADcias%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desnot%C3%ADcias:P%C3%A1gina_principal'); window.close(); }
}

function descionario(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Descion%C3%A1rio:' + document.getElementById('q').value); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Descion%C3%A1rio:P%C3%A1gina_principal'); window.close(); }
}

function deslivros(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANovo+deslivro&title=Deslivros%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Deslivros:P%C3%A1gina_principal'); window.close(); }
}

function despoesias(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+despoesia&title=Despoesias%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Despoesias:P%C3%A1gina_principal'); window.close(); }
}

function descifras(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+descifra&title=Descifras%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Descifras:P%C3%A1gina_principal'); window.close(); }
}

function desentrevistas(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desentrevistas:' + document.getElementById('q').value); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desentrevistas:P%C3%A1gina_principal'); window.close(); }
}

function descitacoes(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Descita%C3%A7%C3%B5es:' + document.getElementById('q').value); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Descita%C3%A7%C3%B5es:P%C3%A1gina_principal'); window.close(); }
}

function deslistas(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ADeslistas%2Fpreload&title=Deslistas%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Deslistas:P%C3%A1gina_principal'); window.close(); }
}

function fatos(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Fatos:' + document.getElementById('q').value); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Fatos:P%C3%A1gina_principal'); window.close(); }
}

function facebook(){
	window.open('http://facebook.com/Desciclopedia'); window.close();
}

function twitter(){
	window.open('http://twitter.com/DaDesciclopedia'); window.close();
}

function ajuda(){
	window.open('paginas/faq.html'); window.close();
}

function restaurar() {
  var favorito = descicloapp.prefs.getCharPref("alternativofavorito");
  if (!favorito) {
    return;
  }
  var select = document.getElementById("alternativo");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorito) {
      child.selected = "true";
      break;
    }
  }
}

// nao sei porque nao funcinou se eu colocasse <script src="../opcoes.js"></script>
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

window.onload = function(){
		$('hr').css('background-color',descicloapp.prefs.getCharPref("corfavorita"));
		$('#ir').css({'background-color':descicloapp.prefs.getCharPref("corfavorita"),});
		$('#editar').css({'background-color':descicloapp.prefs.getCharPref("corfavorita"),});
		$('#pesquisar').css({'background-color':descicloapp.prefs.getCharPref("corfavorita"),});
		$('#fechar').click(function() { window.close() });
		$('#ir').click(function() { ir() });
		$('#editar').click(function() { editar() });
		$('#pesquisar').click(function() { pesquisar() });
		$('#irb').click(function() { irb() });
		$('#pagina').click(function() { pagina() });
		$('#discussao').click(function() { discussao() });
		$('#contribuicao').click(function() { contribuicao() });
		$('#vigiado').click(function() { vigiado() });
		$('#carregar').click(function() { carregar() });
		$('#aleatorio').click(function() { aleatorio() });
		$('#mensagem').click(function() { mensagem() });
		$('#recentes').click(function() { recentes() });
		$('#recentespopup').click(function() { recentespopup() });
		document.getElementById('mais').onclick=mais;
		$('#boteco').click(function() { boteco() });
		$('#aa').click(function() { aa() });
		$('#truco').click(function() { truco() });
		$('#desnoticias').click(function() { desnoticias() });
		$('#descionario').click(function() { descionario() });
		$('#deslivros').click(function() { deslivros() });
		$('#despoesias').click(function() { despoesias() });
		$('#descifras').click(function() { descifras() });
		$('#desentrevistas').click(function() { desentrevistas() });
		$('#descitacoes').click(function() { descitacoes() });
		$('#deslistas').click(function() { deslistas() });
		$('#fatos').click(function() { fatos() });
		$('#facebook').click(function() { facebook() });
		$('#twitter').click(function() { twitter() });
		$('#ajuda').click(function() { ajuda() });
		document.getElementById('q').focus();
		restaurar();
}