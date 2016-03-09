//  script.js

var emplacementCgi = "cgi-bin/trame.cgi";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();

function main()
{
    document.getElementById("trame").innerHTML = "Wait...";
    setInterval(sendXHR, 500);  //  Boucle
    xhr.addEventListener("readystatechange",response , false);
}

function sendXHR()
{
    xhr.open(methodSend, emplacementCgi, true);
    xhr.send(contenueSend);
}

function response()
{
    //  Si le script a fini son exécution (DONE) 
    //  et qu'il n'y a pas eu d'erreurs (200 OK)
    if(xhr.readyState === xhr.DONE && xhr.status === 200)
    {
        //  Si le contenue de la balise (id = trame) n'est pas 
        //  le même que celui retourné par le script
        if(document.getElementById("trame").innerHTML !== xhr.responseText)
        {
            document.getElementById("trame").innerHTML = xhr.responseText;
        }
    }
}

function test()
{
    alert("test appel fonction");
}