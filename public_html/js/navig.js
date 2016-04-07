//==========================================================================//
//                                                                          //
//  Projet EWTS-rt                                                          //
//  Fichier : navig.js                                                      //
//  Emplacement : /js/navig.js                                              //
//                                                                          //
//  DEV : Cyril ESCLASSAN (cesclass)                                        //
//                                                                          //
//==========================================================================//


var navigCSS;


$(navClick);


function navClick()
{
    selectNavStyle("li#navHOME");
    displayDiv("#homeDiv");
    
    $("li#navHOME").click(function()
    {
        selectNavStyle(this);
        displayDiv("#homeDiv");
    });
    
    $("li#navDATAS").click(function()
    {
        selectNavStyle(this);
        displayDiv("#datasDiv");
    });
    
    $("li#navINFOS").click(function()
    {
        selectNavStyle(this);
        displayDiv("#infosDiv");
    });
    
    $("li#navABOUT").click(function()
    {
        selectNavStyle(this);
        displayDiv("#aboutDiv");
    });
    
}


function resetNavStyle()
{
    $("li.navig").css({
        backgroundColor: "transparent",
        borderLeftStyle: "none",
        paddingLeft: "40px",
        textShadow: "none"
    });
    
}


function selectNavStyle(select)
{
    resetNavStyle();
    
    $(select).css({
        backgroundColor: "#3399FF",
        borderLeftColor: "#0066CC",
        borderLeftStyle: "solid",
        borderLeftWidth: "25px",
        paddingLeft: "15px",
        textShadow: "0px 0px 2px white"
    });
    
}

function displayDiv(select)
{
    $("div.page").css("display", "none");
    $(select).css("display", "block");
    
}
