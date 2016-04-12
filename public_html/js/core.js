//==========================================================================//
//                                                                          //
//  Projet EWTS-rt                                                          //
//  Fichier : core.js                                                       //
//  Emplacement : /js/core.js                                               //
//                                                                          //
//  DEV : Cyril ESCLASSAN (cesclass)                                        //
//                                                                          //
//==========================================================================//


//  Variables de Debug
var debugCycle = 400;       //  Temps entre chaque MaJ des infos
var debugLoop = null;       //  ID de la boucle d'info
var debugHTML = "";         //  String pour les infos
var d_nbRQ = 0;             //  Nombre de requêtes
var d_nbTR = 0;             //  Nombre de trames reçus
var d_nbERR = 0;            //  Nombre d'erreurs serveurs
var debug = null;           //  Variable servant au Debug...


//  Variable de fonctionnement
var cycleAJAX = 2000;       //  Temps entre chaque requetes AJAX
var loopAJAX = null;        //  ID de la boucle AJAX
var datasHTML = "";         //  String pour les données
var str_start = "";         //  Strinog d'info sur le status d'execution
var starting = false;       //  Determine si le script est en execution


//  Objet JSON
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
}];


$(main);
$(debugging);


//  Fonction main déclenché quand le document 
//  (HTML) a fini son chargement
function main()
{
    //  Start des fonctions de debugs
    
    if(!starting)
    {
        str_start = "START"; // debug
        starting = true;
        ajaxRequest();
        loopAJAX = setInterval(ajaxRequest, cycleAJAX);
    } 
    else 
    {
        str_start = "STOP"; // debug
        starting = false;
        clearInterval(loopAJAX);
    }
}


//  Fonction ajaxRequest() déclenché par la fonction main() | (boucle)
//  Chargée de l'envoie de requêtes AJAX en JQuery
function ajaxRequest()
{
    d_nbRQ++; // debug
    $.get("cgi-bin/script_cgi.cgi", null, ajaxResponse);
}


//  Fonction ajaxResponse() declenche en tant que callback 
//  par l'appel a $.get() dans la fonction ajaxRequest()
//  Chargé de vérifier le status de la requete AJAX et
//  de passer l'objet retourné par ajaxRequest() dans un 
//  objet local. Enfin, appel de la fonction dataToHTML()
function ajaxResponse(dataAJAX, statusAJAX)
{
    debug = statusAJAX; // debug
    if(statusAJAX !== "success")
    {
        d_nbERR++; // debug
    }
    else
    {
        d_nbTR++; // debug
        
        //  Essaie de convertir les donnees json en objet
        //  si ce n'est pas deja fait...
        //  Permet le fonctionnement sour Chrome et Firefox
        try
        {
            dataAJAX = JSON.parse(dataAJAX);
        } 
        catch(e) {}
        
        if(dataAJAX !== capteur)
        {
            capteur = dataAJAX;
            datasToHTML();
        }
    }
}


//  Fonction jsonToInnerHTML() declenche par ajaxResponse()
//  Charge de l'affichage des valeurs contenues dans l'objet capteur
function datasToHTML()
{
    datasHTML = "<table> <tr>" 
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
        datasHTML += "<tr>"
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
    
    datasHTML += "<table> <br />";
    $("#div_js_mesures").html(datasHTML);
}

//==============================================//
//                                              //
//          /!\ Debug Zone /!\                  //
//          /!\  Keep Out  /!\                  //
//                                              //
//==============================================//


function debugToHTML()
{
    debugHTML = "";
    debugHTML += "<table>"
            + '<tr> <th> Status </th> <td id="td_status">' + str_start + "</td> </tr>"
            + "<tr> <th> Nb de Requêtes </th> <td>" + d_nbRQ + "</td> </tr>"
            + "<tr> <th> Trames reçus </th> <td>" + d_nbTR + "</td> </tr>"
            + "<tr> <th> Erreurs </th> <td>" + d_nbERR + "</td> </tr>"
            + "<tr> <th> Cycle </th> <td>" +  cycleAJAX/1000 + "s</td> </tr>"
            + "</table> <br />";
    $("#div_js_debug").html(debugHTML);
    
    
    if(starting){
        $("#td_status").css({
            backgroundColor: "#66FF33",
            color: "#FFFFFF",
            fontWeight: "bold"
        });
        
    } 
    else
    {
        $("#td_status").css({
            backgroundColor: "#151515",
            color: "#FFFFFF",
            fontWeight: "bold"
        });
    }
}


function debugging()
{
    debugToHTML();
    loopINFO = setInterval(debugToHTML, debugCycle);
    $("button#d_button").click(function(){
        if(!starting)
        {
            str_start = "START"; // debug
            starting = true;
            ajaxRequest();
            loopAJAX = setInterval(ajaxRequest, cycleAJAX);
        } 
        else 
        {
            str_start = "STOP"; // debug
            starting = false;
            clearInterval(loopAJAX);
        }
    });
}