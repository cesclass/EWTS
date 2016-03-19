//  OLD SCRIPT

//==========================================================================//
//                                                                          //
//  Projet EWTS-rt                                                          //
//  Fichier : script.js                                                     //
//  Emplacement : siteRoot/script/script.js                                 //
//                                                                          //
//  DEV : Cyril ESCLASSAN (cesclass)                                        //
//                                                                          //
//==========================================================================//


//  Variables AJAX XMLHTTP
var xhr = new XMLHttpRequest();
var url = "cgi-bin/script_cgi.cgi";
var method = "GET";
var contentGET = null;


//  Variables String, JSON (manipulation de données)
//  Et compteurs de passages pour informations
var cycle = 2000;           //  Temps entre chaque requêtes
var boucle = null;          //  ID de la boucle
var datas = "";             //  String pour les données
var infos = "";             //  String pour les infos
var nbRQ = 0;               //  Nombre de requêtes
var nbTR = 0;               //  Nombre de trames reçus
var nbERR = 0;              //  Nombre d'erreurs serveurs


var capteur = [{
    "brute":"", 
    "id":"", 
    "version":"", 
    "reserve":"", 
    "type":"", 
    "coup":"", 
    "etat":"", 
    "U_pile":"", 
    "U_capa":"", 
    "temperature":"",
    "debit":"",
    "C_inhibition":"",
    "C_fuite":"",
    "C_absence":"",
    "conso":""
}];     //  Objet JSON


//  Fonction start déclenché par le clic sur le bouton
//  dans la page HTML
function start()
{
    infosRT();
    sendXHR();  //  Premier Appel au start (pas d'attente due au SetInterval)
    setInterval(infosRT, 200);
    boucle = setInterval(sendXHR, cycle);
    xhr.addEventListener("readystatechange", responseXHR, false);
}


//  Fonction sendXHR() déclenché par la fonction start() | (boucle)
//  Chargée de l'envoie de requêtes XMLHttpRequest
function sendXHR()
{
    xhr.open(method, url, true);
    xhr.send(contentGET);
    nbRQ++;
}


//  Fonction responseXHR() déclenché par événement (xhr.readystatechange)
//  Chargé de vérifier l'état et le status de xhr ET de convertir la réponse
//  en JSON pour puis appeler la fonciton jsonToInnerHTML()
function responseXHR()
{
    if(xhr.readyState === xhr.DONE && xhr.status !== 200)
    {
        nbERR++;
    }
    
    //  Si xhr a fini son travail et que le code retourné par le serveur
    //  est 200, Alors, conversion Reponse JSON --> Objet (capteur)
    //  ET exécution de la fonction jsonToInnerHTML()
    if(xhr.readyState === xhr.DONE && xhr.status === 200)
    {
        nbTR++;
        if(JSON.parse(xhr.responseText) !== capteur)
        {
            capteur = JSON.parse(xhr.responseText);
            jsonToInnerHTML();
        }
    }
}


//  Fonction infosRT() déclenché par la fonction start() | (boucle)
//  Chargé de l'affichage des infos d'exécution
function infosRT()
{
    infos = "";
    infos += "<table>"
            + "<tr> <th> Nb de Requêtes </th> <td>" + nbRQ + "</td> </tr>"
            + "<tr> <th> Trames reçus </th> <td>" + nbTR + "</td> </tr>"
            + "<tr> <th> Erreurs </th> <td>" + nbERR + "</td> </tr>"
            + "<tr> <th> Intervalle </th> <td>" +  cycle/1000 + "s</td> </tr>"
            + "</table> <br />";
    document.getElementById("infos").innerHTML = infos;
}


//  Fonction jsonToInnerHTML() déclenché par responseXHR()
//  Chargé de l'affichage des valeurs contenues dans l'objet capteur
function jsonToInnerHTML()
{
    datas = "<table> <tr>" 
            + "<th> brute </th>" 
            + "<th> id </th>" 
            + "<th> version </th>" 
            + "<th> reserve </th>" 
            + "<th> type </th>" 
            + "<th> coup </th>" 
            + "<th> etat </th>" 
            + "<th> U_pile </th>" 
            + "<th> U_capa </th>" 
            + "<th> temperature </th>" 
            + "<th> debit </th>" 
            + "<th> C_inhibition </th>" 
            + "<th> C_fuite </th>" 
            + "<th> C_absence </th>"
            + "<th> conso </th>"
            + "</tr> <br />";
    
    for(var i = 0; i < capteur.length; i++)
    {
        datas += "<tr>"
                + "<td>" + capteur[i].brute + "</td>" 
                + "<td>" + capteur[i].id + "</td>" 
                + "<td>" + capteur[i].version + "</td>" 
                + "<td>" + capteur[i].reserve + "</td>" 
                + "<td>" + capteur[i].type + "</td>" 
                + "<td>" + capteur[i].coup + "</td>" 
                + "<td>" + capteur[i].etat + "</td>" 
                + "<td>" + capteur[i].U_pile + "</td>" 
                + "<td>" + capteur[i].U_capa + "</td>" 
                + "<td>" + capteur[i].temperature + "</td>" 
                + "<td>" + capteur[i].debit + "</td>" 
                + "<td>" + capteur[i].C_inhibition + "</td>" 
                + "<td>" + capteur[i].C_fuite + "</td>" 
                + "<td>" + capteur[i].C_absence + "</td>" 
                + "<td>" + capteur[i].conso + "</td>" 
                + "</tr>";
    }
    datas += "<table> <br />";
    document.getElementById("datas").innerHTML = datas;
}


function bonus()
{
    var blink = false;
    setInterval(function()
    {
        if(!blink)
        {
            $("#titre").css("color", "#0066ff");
            blink = true;
        } else {
            $("#titre").css("color", "#E5E5E5");
            blink = false;
        }
    }, 200);
}
