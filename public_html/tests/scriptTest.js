//==========================================================================//
//                                                                          //
//  Projet EWTS-rt                                                          //
//  Fichier : script.js                                                     //
//  Emplacement : siteRoot/script/script.js                                 //
//                                                                          //
//  DEV : Cyril ESCLASSAN (cesclass)                                        //
//                                                                          //
//==========================================================================//


var cycleAJAX = 2000;       //  Temps entre chaque requetes AJAX
var cycleINFO = 400;        //  Temps entre chaque MaJ des infos
var loopAJAX = null;        //  ID de la boucle AJAX
var loopINFO = null;        //  ID de la boucle d'info
var datasHTML = "";         //  String pour les données
var infosHTML = "";         //  String pour les infos
var nbRQ = 0;               //  Nombre de requêtes
var nbTR = 0;               //  Nombre de trames reçus
var nbERR = 0;              //  Nombre d'erreurs serveurs
var str_start = "";         //  Strinog d'info sur le status d'execution
var starting = false;       //  Determine si le script est en execution

var debug = null;

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


$(document).ready(main);



//  Fonction main déclenché quand le document 
//  (HTML) a fini son chargement
function main()
{
    infosToHTML();
    loopINFO = setInterval(infosToHTML, cycleINFO);
    
    $("#startBTN").click(start);
    $("#titre").click(bonus);
}


//  Fonction start déclenché par le clic sur le bouton
//  dans la page HTML
function start()
{
    if(!starting)
    {
        starting = true;
        ajaxRequest();
        loopAJAX = setInterval(ajaxRequest, cycleAJAX);
    } 
    else 
    {
        starting = false;
        clearInterval(loopAJAX);
    }
}


//  Fonction ajaxRequest() déclenché par la fonction start() | (boucle)
//  Chargée de l'envoie de requêtes AJAX en JQuery
function ajaxRequest()
{
    nbRQ++;
    $.get("cgi-bin/script_cgi.cgi", null, ajaxResponse);
}


//  Fonction ajaxResponse() declenche en tant que callback 
//  par l'appel a $.get() dans la fonction ajaxRequest()
//  Chargé de vérifier le status de la requete AJAX et
//  de passer l'objet retourné par ajaxRequest() dans un 
//  objet local. Enfin, appel de la fonction dataToHTML()
function ajaxResponse(dataAJAX, statusAJAX)
{
    debug = statusAJAX;
    if(statusAJAX === "success")
    {
        nbTR++;
        if(dataAJAX !== capteur)
        {
            capteur = dataAJAX;
            datasToHTML();
        }
    }
    else
    {
        nbERR++;
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
    $("#datas").html(datasHTML);
}


//  Fonction infosToHTML() declenche par la fonction start() | (boucle)
//  Charge de l'affichage des infos d'execution
function infosToHTML()
{
    if(starting)
    {
        str_start = "START";
    }
    else
    {
        str_start = "STOP";
    }
    infosHTML = "";
    infosHTML += "<table>"
            + "<tr> <th> Status </th> <td>" + str_start + "</td> </tr>"
            + "<tr> <th> Nb de Requêtes </th> <td>" + nbRQ + "</td> </tr>"
            + "<tr> <th> Trames reçus </th> <td>" + nbTR + "</td> </tr>"
            + "<tr> <th> Erreurs </th> <td>" + nbERR + "</td> </tr>"
            + "<tr> <th> Cycle </th> <td>" +  cycleAJAX/1000 + "s</td> </tr>"
            + "</table> <br />";
    $("#infos").html(infosHTML);
}


//  /!\ ATTENTION 
//  ZONE DE NON PRODUCTIVITE
//  FONCTION INNUTILE
function bonus()
{
    var blink = false;
    setInterval(function(){
        if(!blink)
        {
            $("#titre").css("color", "#0066ff");
            blink = true;
        } 
        else
        {
            $("#titre").css("color", "#E5E5E5");
            blink = false;
        }
    }, 300);
}
