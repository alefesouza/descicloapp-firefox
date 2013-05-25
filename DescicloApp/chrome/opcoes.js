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