//  script.js

var emplacementCgi = "cgi-bin/trame.cgi";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();

function main()
{
    document.getElementById("trame").innerHTML = "...";
    setInterval(sendXHR, 500);
    xhr.addEventListener("readystatechange",response , false);
}

function sendXHR()
{
    xhr.open(methodSend, emplacementCgi, true);
    xhr.send(contenueSend);
}

function response()
{
    if(xhr.readyState === xhr.DONE && xhr.status === 200)
    {
        if(document.getElementById("trame").innerHTML !== xhr.responseText)
        {
            document.getElementById("trame").innerHTML = xhr.responseText;
        }
    }
}
