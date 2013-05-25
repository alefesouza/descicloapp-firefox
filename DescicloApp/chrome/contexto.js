aloogle = {
	ir: function() {
		var sel_text = aloogle.get_selected_text();
		window._content.document.location  = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/wiki/" + sel_text;
	},
	
	editar: function() {
		var sel_text = aloogle.get_selected_text();
		window._content.document.location  = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?title=" + sel_text + "&action=edit";
	},
	
	buscar: function() {
		var sel_text = aloogle.get_selected_text();
		window._content.document.location  = "http://" + descicloapp.prefs.getCharPref("alternativofavorito") + "/index.php?title=Especial%3ABusca&search=" + sel_text;
	},

	init: function()
	{
		document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", aloogle.draw, false);
	},

	draw: function()
	{
		var ir = document.getElementById("irdescicloapp");
			var sel_text = aloogle.get_selected_text();
			if (sel_text.length > 30)
				sel_text = sel_text.substr(0, 28) + "...";
			ir.setAttribute("label", "Ir a \"" + sel_text + "\" na Desciclop\u00E9dia");
			
		var editar = document.getElementById("editardescicloapp");
			var sel_text = aloogle.get_selected_text();
			if (sel_text.length > 30)
				sel_text = sel_text.substr(0, 28) + "...";
			editar.setAttribute("label", "Editar \"" + sel_text + "\" na Desciclop\u00E9dia");
			
		var busca = document.getElementById("buscadescicloapp");
			var sel_text = aloogle.get_selected_text();
			if (sel_text.length > 30)
				sel_text = sel_text.substr(0, 28) + "...";
			busca.setAttribute("label", "Buscar \"" + sel_text + "\" na Desciclop\u00E9dia");
	},

	get_selected_text: function()
	{
		var focused_window = document.commandDispatcher.focusedWindow;
		var sel_text = focused_window.getSelection();
		return sel_text.toString();
	}
}

desciclo = {
	init: function()
	{
		document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", desciclo.draw, false);
	},

	draw: function()
	{
		if (gContextMenu.isTextSelected)
		{
			document.getElementById("desciclo").setAttribute("hidden", false);
		}
		else {
			document.getElementById("desciclo").setAttribute("hidden", true); }
	}
}

window.addEventListener("load", aloogle.init, true); window.addEventListener("load", desciclo.init, true);