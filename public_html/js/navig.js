
var navigCSS;


$(navClick);


function navClick()
{
    $.get("css/navig.css", null, function(data)
    {
        navigCSS = data;
    });
    
    //  selectNavStyle("li#navHOME");
    displayDiv("#homeDiv");
    
    $("li#navHOME").click(function()
    {
        //  selectNavStyle(this);
        displayDiv("#homeDiv");
    });
    
    $("li#navDATAS").click(function()
    {
        //  selectNavStyle(this);
        displayDiv("#datasDiv");
    });
    
    $("li#navINFOS").click(function()
    {
        //  selectNavStyle(this);
        displayDiv("#infosDiv");
    });
    
    $("li#navABOUT").click(function()
    {
        //  selectNavStyle(this);
        displayDiv("#aboutDiv");
    });
    
}


function resetNavStyle()
{
    $("li.navig").css("background-color", "transparent");
    $("li.navig").css("border-left-style", "none");
    $("li.navig").css("padding-left", "40px");
    $("li.navig").mouseover(function()
    {
       $(this).css("background-color", "#66cc00"); 
       $(this).css("border-left-color", "#408000");
       $(this).css("border-left-style", "solid");
       $(this).css("border-left-width", "25px");
       $(this).css("padding-left", "15px");
       $(this).css("cursor", "pointer");
    }).mouseout(function()
    {
        $(this).css("background-color", "transparent");
        $(this).css("border-left-style", "none");
        $(this).css("padding-left", "40px");
    });
}


function selectNavStyle(select)
{
    resetNavStyle();
    $(select).css("background-color", "#66cc00");
    $(select).css("border-left-color", "#408000");
    $(select).css("border-left-style", "solid");
    $(select).css("border-left-width", "25px");
    $(select).css("padding-left", "15px");
    /*
    $(select).mouseover(function()
    {
        $(this).css("background-color", "#408000"); 
        $(this).css("border-left-color", "#66cc00");
        $(this).css("border-left-style", "solid");
        $(this).css("border-left-width", "25px");
        $(this).css("padding-left", "15px");
        $(this).css("cursor", "pointer");
    }).mouseout(function()
    {
        $(this).css("background-color", "#66cc00");
        $(this).css("border-left-color", "#408000");
        $(this).css("border-left-style", "solid");
        $(this).css("border-left-width", "25px");
        $(this).css("padding-left", "15px");
    });
    */
}

function displayDiv(select)
{
    $("div.page").css("display", "none");
    $(select).css("display", "block");
}
