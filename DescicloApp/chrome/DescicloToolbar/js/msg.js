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
};

function email() {
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
};

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
	$('#fechar').click(function() { window.close(); })
	$('#mensagem').click(function() { mensagem() });
	$('#email').click(function() { email() });
	document.getElementById('q').focus();
	restaurar();
}