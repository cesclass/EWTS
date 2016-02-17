//  script.js

var emplacementCgi = "cgi-bin/trame.cgi";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();


function main()
{
    document.getElementById("trame").innerHTML = "...";
    xhr.open(methodSend, emplacementCgi, true);
    xhr.addEventListener("readystatechange",event , false);
    setInterval(sendXHR(), 5000);
}

function sendXHR()
{
    xhr.send(contenueSend);
}

function event()
{
    if(xhr.readyState === xhr.DONE && xhr.status === 200)
    {
        if(document.getElementById("trame").innerHTML !== xhr.responseText)
        {
            document.getElementById("trame").innerHTML = xhr.responseText;
        }
    }
}