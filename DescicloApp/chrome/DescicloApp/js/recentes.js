function novaguia(){
		window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Special:Recentchanges/250')
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
	$('#voltar').click(function(){
	var esquerda = (document.documentElement.clientWidth - 330);
	window.open('chrome://descicloapp/content/DescicloApp/popup.html', 'descicloapp', 'titlebar=no,width=325,height=420,left=' + (document.documentElement.clientWidth - 330) + ',top=' + 60); window.innerHeight = 420; window.innerWidth = 330; window.moveBy(esquerda,0);
	});
	$('#novaguia').click(function() { novaguia() });
}