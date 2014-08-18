var httpRequest;

if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
  try {
    httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
  }
  catch (e) {
    try {
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (e) {}
  }
}

httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState === 4) {

    // 0 (uninitialized)
    // 1 (loading)
    // 2 (loaded)
    // 3 (interactive)
    // 4 (complete)

    if (httpRequest.status === 200) {
      alert(httpRequest.responseText);
    } else {
      alert('There was a problem with the request.');
    }
  }
}

httpRequest.open('GET', 'http://bekk.no/api'); // Initialiserer forespørsel
httpRequest.send(); // Sender forespørselen (); // Sender forespørselen
