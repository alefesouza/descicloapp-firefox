AloogleDescicloAppButton = {

1: function () {
      window.open('chrome://descicloapp/content/DescicloApp/popup.html', '', 'titlebar=no,width=325,height=400,left=' + (document.documentElement.clientWidth - 330) + ',top=' + 60);
},
}

function installButton()
{
var id = "descicloapp-button-1";
var toolbarId = "nav-bar";
 
var toolbar = document.getElementById(toolbarId);
 
toolbar.insertItem(id, toolbar.lastChild);
toolbar.setAttribute("currentset", toolbar.currentSet);
document.persist(toolbar.id, "currentset");
 
toolbar.collapsed = false;
}
 
function firstRun(extensions)
{
    var extension = extensions.get("descicloapp@aloogle");
 
    if (extension.firstRun)
     installButton();
}
 
if (Application.extensions)
    firstRun(Application.extensions);
else
    Application.getExtensions(firstRun);