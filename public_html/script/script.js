//  script.js

var emplacementCgi = "cgi-bin/json.cgi";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();
var jsonOBJ;
var jsonTXT;
var datas;

function main()
{
    document.getElementById("trame").innerHTML = "Wait...";
    setInterval(sendXHR, 1000);
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
        jsonTXT = xhr.responseText;
        if(JSON.parse(jsonTXT) !== jsonOBJ)
        {
            jsonOBJ = JSON.parse(xhr.responseText);
            datas = "";
            datas += "<tr> <td>ID</td> <span class=\"tabul\" /> <td>DATAS</td> </tr> <br />";
            for(var i = 0; i < jsonOBJ.Trames.length; i++){
                datas += "<tr> <td>" + jsonOBJ.Trames[i].id + "</td> <span class=\"tabul\" /> <td>" 
                    + jsonOBJ.Trames[i].data + "</td> </tr> <br />";
            }
            datas += "<br />";
            /*
            "<tr> <td>" + jsonOBJ.Trames[0].id + "</td> <span class=\"tabul\" /> <td>" + jsonOBJ.Trames[0].data + "</td> </tr> <br />" +
            "<tr> <td>" + jsonOBJ.Trames[1].id + "</td> <span class=\"tabul\" /> <td>" + jsonOBJ.Trames[1].data + "</td> </tr> <br />" +
            "<tr> <td>" + jsonOBJ.Trames[2].id + "</td> <span class=\"tabul\" /> <td>" + jsonOBJ.Trames[2].data + "</td> </tr> <br />" +
            "<br />";
            */
            document.getElementById("trame").innerHTML = datas;
        }
    }
}
