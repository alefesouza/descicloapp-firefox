function $$(id){  
		return document.getElementById(id);  
	}  

function enter(){
	if(event.keyCode=='13'){
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=User_talk:' + document.getElementById('q').value + '&action=edit&section=new'); window.close(); }
}

function fechar(){
	window.close();
}

function mensagem(){
	if(q.value != "") {
		//Coloquei e ingles (user_talk) porque se colocasse em portugues (Usu%C3%A1rio_Discuss%C3%A3o) dava um erro estranho quando o user tinha acento
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=User_talk:' + document.getElementById('q').value + '&action=edit&section=new'); window.close(); }
	else {
		$(function() {
			$( "#alerta-mensagem" ).dialog({
				buttons: {
					Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	}); }
}

function email(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Contatar_usu%C3%A1rio/' + document.getElementById('q').value); window.close(); window.close(); }
	else {
		$(function() {
			$( "#alerta-email" ).dialog({
				buttons: {
					Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	}); }
}

window.onload = function(){
	$$('fechar').onclick=fechar;
	$$('voltar').onclick = function(){  
		window.location="popup.html";
	}
	$$('mensagem').onclick=mensagem;
	$$('email').onclick=email;
}

window.onkeypress = function(){
	enter()
}