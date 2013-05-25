function novaguia(){
	window.open('http://' + descicloapp.prefs.getCharPref("alternativofavorito") + '/wiki/Special:Recentchanges/250', '_blank');
};

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
	$('#novaguia').click(function() { novaguia(); window.close(); });
}