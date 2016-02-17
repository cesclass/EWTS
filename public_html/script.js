//  script.js

var emplacementCgi = "cgi-bin/trame.cgi";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();

function findTrame()
{
    document.getElementById("trame").innerHTML = "...";
    setInterval(function()
    {
        xhr.open(methodSend, emplacementCgi, true);
        xhr.send(contenueSend);
        xhr.addEventListener("readystatechange", function()
        {
            if(xhr.readyState === xhr.DONE && xhr.status === 200)
            {
                if(document.getElementById("trame").innerHTML !== xhr.responseText)
                {
                    document.getElementById("trame").innerHTML = xhr.responseText;
                }
            }
        }, false);
    }, 3000);
}
