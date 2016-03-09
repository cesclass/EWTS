
var url = "tests/testJson.json";
var methodSend = "GET";
var contenueSend = null;
var xhr = new XMLHttpRequest();
var jsonOBJ;

function main()
{
    document.getElementById("trame").innerHTML = "Wait...";
    setInterval(sendXHR, 1000);
    xhr.addEventListener("readystatechange", response, false);
}

function sendXHR()
{
    xhr.open(methodSend, url, true);
    xhr.send(contenueSend);
}

function response()
{
    if(xhr.readyState === xhr.DONE && xhr.status === 200)
    {
        jsonOBJ = JSON.parse(xhr.responseText);
        document.getElementById("trame").innerHTML =
            "<tr> <td>ID</td> <span class=\"tabul\" /> <td>DATAS</td> </tr> <br />" +
            "<tr> <td>" + jsonOBJ.Trames[0].id + "</td> <span class=\"tabul\" /> <td>" + jsonOBJ.Trames[0].data + "</td> </tr> <br />" +
            "<tr> <td>" + jsonOBJ.Trames[1].id + "</td> <span class=\"tabul\" /> <td>" + jsonOBJ.Trames[1].data + "</td> </tr> <br />" +
            "<tr> <td>" + jsonOBJ.Trames[2].id + "</td> <span class=\"tabul\" /> <td>" + jsonOBJ.Trames[2].data + "</td> </tr> <br />" +
            "<br />";
    }
}