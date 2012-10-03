function $$(id){  
		return document.getElementById(id);  
}

function enter(){
if(event.keyCode=='13'){
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/' + document.getElementById('q').value); window.close(); }
}

function fechar(){
	window.close();
}

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
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Minha_p%C3%A1gina'); window.close();
}

function discussao(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Minha_discuss%C3%A3o'); window.close();
}

function contribuicao(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Special:MyContributions'); window.close();
}

function vigiado(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:P%C3%A1ginas_vigiadas'); window.close();
}

function carregar(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Carregar_arquivo'); window.close();
}

function mensagem(){
	window.open('msg.html', '_self');
	window.innerHeight = 400;
}

function recentes(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Special:Recentchanges/250'); window.close();
}

function mais(){
	if (this.parentNode.nextSibling.childNodes[0].style.display != '') {
		$$('mais').innerHTML = '<img src="imagens/cimawp7.png" width="16px"> Menos';
		window.innerHeight = 635;
		this.parentNode.nextSibling.childNodes[0].style.display = ''; }
	else {
	$$('mais').innerHTML = '<img src="imagens/baixowp7.png" width="16px"> Mais';
	window.innerHeight = 400;
	this.parentNode.nextSibling.childNodes[0].style.display = 'none';}
}

function desnoticias(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+not%C3%ADcia&title=DesNot%C3%ADcias%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desnot%C3%ADcias:P%C3%A1gina_principal'); window.close(); }
}

function descionario(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANovo+verbete&title=Descion%C3%A1rio%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desnot%C3%ADcias:P%C3%A1gina_principal'); window.close(); }
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
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3Adesentrevistasnova&title=Desentrevistas%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desentrevistas:P%C3%A1gina_principal'); window.close(); }
}

function descitacoes(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+Descita%C3%A7%C3%A3o&editintro=Predefini%C3%A7%C3%A3o%3AAviso+Descita%C3%A7%C3%B5es&title=Descita%C3%A7%C3%B5es%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Descita%C3%A7%C3%B5es:P%C3%A1gina_principal'); window.close(); }
}

function deslistas(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ADeslistas%2Fpreload&title=Deslistas%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Deslistas:P%C3%A1gina_principal'); window.close(); }
}

function desinopses(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=Desinopses:' + document.getElementById('q').value + '&action=edit&preload=Predefini%C3%A7%C3%A3o:Criar%20novo%20roteiro/preload'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desinopses:P%C3%A1gina_principal'); window.close(); }
}

function fatos(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ACriar+novos+fatos%2Fpreload&title=Fatos%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Fatos:P%C3%A1gina_principal'); window.close(); }
}

function facebook(){
	window.open('http://facebook.com/Desciclopedia'); window.close();
}

function twitter(){
	window.open('http://twitter.com/DaDesciclopedia'); window.close();
}

function blog(){
	window.open('http://descicloblog.blogspot.com'); window.close();
}

function ajuda(){
	window.open('paginas/faq.html'); window.close();
}

window.onload = function(){
		$$('fechar').onclick=fechar;
		$$('ir').onclick=ir;
		$$('editar').onclick=editar;
		$$('pesquisar').onclick=pesquisar;
		$$('irb').onclick=irb;
		$$('pagina').onclick=pagina;
		$$('discussao').onclick=discussao;
		$$('contribuicao').onclick=contribuicao;
		$$('vigiado').onclick=vigiado;
		$$('carregar').onclick=carregar;
		$$('mensagem').onclick=mensagem;
		$$('recentes').onclick=recentes;
		$$('mais').onclick=mais;
		$$('desnoticias').onclick=desnoticias;
		$$('descionario').onclick=descionario;
		$$('deslivros').onclick=deslivros;
		$$('despoesias').onclick=despoesias;
		$$('descifras').onclick=descifras;
		$$('desentrevistas').onclick=desentrevistas;
		$$('descitacoes').onclick=descitacoes;
		$$('deslistas').onclick=deslistas;
		$$('desinopses').onclick=desinopses;
		$$('fatos').onclick=fatos;
		$$('facebook').onclick=facebook;
		$$('twitter').onclick=twitter;
		$$('blog').onclick=blog;
		$$('ajuda').onclick=ajuda;
}

window.onkeypress = function(){
		enter()
}