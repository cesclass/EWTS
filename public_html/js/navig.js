//==========================================================================//
//                                                                          //
//  Projet EWTS-rt                                                          //
//  Fichier : navig.js                                                      //
//  Emplacement : /js/navig.js                                              //
//                                                                          //
//  DEV : Cyril ESCLASSAN (cesclass)                                        //
//                                                                          //
//==========================================================================//


var str_div_id = "";
var str_url_id = "";


$(init);
$(wait_nav_click);


function init()
{
    highlight_nav("#nav_accueil");
    display_div("#div_accueil");
    document.location.href = "#ACCUEIL";
}


function wait_nav_click()
{
    $('[id*="nav_"]').click(function()
    {
       highlight_nav(this);
       
        //   str_div_id = # + id de nav_* dont nav_ deviens div_
       str_div_id = "#" + $(this).attr("id").replace("nav_", "div_");
       display_div(str_div_id);
       
       str_url_id = "#" + $(this).attr("id").replace("nav_", "");
       document.location.href = str_url_id.toUpperCase();
       
    });
}


function reset_nav_style()
{
    $("li.navig").css({
        backgroundColor: "transparent",
        borderLeftStyle: "none",
        paddingLeft: "40px",
        textShadow: "none"
    });
    
}


function highlight_nav(select)
{
    reset_nav_style();
    
    $(select).css({
        backgroundColor: "#3399FF",
        borderLeftColor: "#0066CC",
        borderLeftStyle: "solid",
        borderLeftWidth: "25px",
        paddingLeft: "15px"
    });
    
}


function display_div(select)
{
    $("div.page").css("display", "none");
    $(select).css("display", "block");
    
}
