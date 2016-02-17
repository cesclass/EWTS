//  script.js

var emplacementCgi = "cgi-bin/trame.cgi";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();

function findTrame()
{
    xhr.open(methodSend, emplacementCgi, true);
    xhr.send(contenueSend);
    xhr.addEventListener("readystatechange", function()
    {
        //  Si le script (cgi) à fini son travail (readyState = DONE) 
        //  et qu'il n'y a pas d'erreur HTTP (status = 200)
        if(xhr.readyState === xhr.DONE && xhr.status === 200)
        {
            //  Le contenue (innerHTML) de la balise ayant l'id "trame" prend
            //  le contenur text retourné par le script cgi
            document.getElementById("trame").innerHTML += xhr.responseText;
        }
    }, false);
}

