var descicloWindow = null;

AloogleDescicloAppButton = {
1: function() {
  if (descicloWindow && !descicloWindow.closed) {
    descicloWindow.close();
  } else {
    descicloWindow = window.open('chrome://descicloapp/content/DescicloApp/popup.html', 'descicloapp', 'titlebar=no,width=325,height=420,left=' + (document.documentElement.clientWidth - 330) + ',top=' + 60);
  }
}
}
