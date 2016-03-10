//  script.js

var url = "cgi-bin/json.cgi";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();
var cycle = 1000;
var capteur;
var datas;
var nbSend = 0;
var nbErr = 0;
var nbTrame = 0;
var infos = "";

function main()
{
    setInterval(infoFonctionnement, 500);
    setInterval(sendXHR, cycle);
    xhr.addEventListener("readystatechange", response, false);
}

function sendXHR()
{
    xhr.open(methodSend, url, true);
    xhr.send(contenueSend);
    nbSend++;
}

function response()
{
    if(xhr.readyState === xhr.DONE && xhr.status !== 200)
    {
        nbErr++;
    }
    
    if(xhr.readyState === xhr.DONE && xhr.status === 200)
    {
        capteur = JSON.parse(xhr.responseText);
        datas = "<table> <tr> <th>ID</th> <th>DATAS</th> <th>TRAME</th> </tr> <br />";
        for(var i = 0; i < capteur.length; i++)
        {
            datas += "<tr>"
                    + "<td>" + capteur[i].id.toUpperCase() + "</td>"
                    + "<td>" + capteur[i].data + "</td>"
                    + "<td>" + capteur[i].brut.toUpperCase() + "</td>" 
                    + "</tr>";
        }
        datas += "<table> <br />";
        nbTrame++;
        document.getElementById("datas").innerHTML = datas;
       
    }
}

function infoFonctionnement()
{
    infos = "";
    infos += "<table>"
            + "<tr> <th>SEND</th> <td>" + nbSend + "</td> </tr>"
            + "<tr> <th>TRAMES</th> <td>" + nbTrame + "</td> </tr>"
            + "<tr> <th>ERREURS</th> <td>" + nbErr + "</td> </tr>" 
            + "</table> <br />";
    document.getElementById("infos").innerHTML = infos;
}
