//  script.js

var emplacementCgi = "cgi-bin/trame.cgi";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();
var returnCgi = "null";

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
                returnCgi = xhr.responseText;
                if(document.getElementById("trame").innerHTML !== returnCgi)
                {
                    document.getElementById("trame").innerHTML = returnCgi;
                }
            }
        }, false);
    }, 3000);
}
