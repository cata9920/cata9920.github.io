
var aboutmebox = document.getElementById("AboutMeBox");
var miniprojectsbox = document.getElementById("MiniProjects");

var aboutmephoto = document.getElementById("aboutmephoto");
var aboutmetextcontainer = document.getElementById("aboutmetextcontainer");

var contactbox = document.getElementById("ContactMe");
var contactcontainer = document.getElementById("contactcontainer");

var x = document.getElementById("x");
var o = document.getElementById("o");
var y = document.getElementById("y");

var project01 = document.getElementById("project01");
var project02 = document.getElementById("project02");
var project03 = document.getElementById("project03");

var textcontainer = document.getElementById("textcontainer");

var spannr1 = document.getElementById("nr01");
var spannr2 = document.getElementById("nr02");
var spannr3 = document.getElementById("nr03");

x.addEventListener("click",showproject01);
o.addEventListener("click",showproject02);
y.addEventListener("click",showproject03);

function aboutmefunction() {

    aboutmebox.setAttribute("style", "background-color: black;");
    miniprojectsbox.setAttribute("style", "background-color: rgba(0,0,0,0.4);");
    contactbox.setAttribute("style", "background-color: rgba(0,0,0,0.4);");
    aboutmephoto.setAttribute("style","visibility: initial");
    aboutmetextcontainer.setAttribute("style","visibility: initial");


    spannr1.setAttribute("style","visibility: hidden");
    spannr2.setAttribute("style","visibility: hidden");
    spannr3.setAttribute("style","visibility: hidden");

    x.setAttribute("style","visibility: hidden");
    o.setAttribute("style","visibility: hidden");
    y.setAttribute("style","visibility: hidden");

    project01.setAttribute("style","visibility: hidden");
    project02.setAttribute("style","visibility: hidden");
    project03.setAttribute("style","visibility: hidden");

    textcontainer.setAttribute("style","visibility: hidden");
    contactcontainer.setAttribute("style","visibility: hidden");


    //shownoprojects();
}

aboutmebox.addEventListener("click",aboutmefunction);

function contactmefunction() {
    contactbox.setAttribute("style", "background-color: black;");
    miniprojectsbox.setAttribute("style", "background-color: rgba(0,0,0,0.4);");
    aboutmebox.setAttribute("style","background-color: rgba(0,0,0,0.4);");
    contactcontainer.setAttribute("style","visibility: initial");
    textcontainer.setAttribute("style","visibility: hidden");

    spannr1.setAttribute("style","visibility: hidden");
    spannr2.setAttribute("style","visibility: hidden");
    spannr3.setAttribute("style","visibility: hidden");

    x.setAttribute("style","visibility: hidden");
    o.setAttribute("style","visibility: hidden");
    y.setAttribute("style","visibility: hidden");

    project01.setAttribute("style","visibility: hidden");
    project02.setAttribute("style","visibility: hidden");
    project03.setAttribute("style","visibility: hidden");

    aboutmephoto.setAttribute("style","visibility: hidden");
    aboutmetextcontainer.setAttribute("style","visibility: hidden");
}

contactbox.addEventListener("click",contactmefunction);


function miniprojectsfunction() {

    aboutmebox.setAttribute("style", "background-color: rgba(0,0,0,0.4);");
    contactbox.setAttribute("style", "background-color: rgba(0,0,0,0.4);");
    miniprojectsbox.setAttribute("style", "background-color: black;");
    aboutmephoto.setAttribute("style","visibility: hidden");
    aboutmetextcontainer.setAttribute("style","visibility: hidden");
    contactcontainer.setAttribute("style","visibility: hidden");

    x.setAttribute("style","visibility: initial");
    o.setAttribute("style","visibility: initial");
    y.setAttribute("style","visibility: initial");

    spannr1.setAttribute("style","visibility: initial");
    spannr2.setAttribute("style","visibility: initial");
    spannr3.setAttribute("style","visibility: initial");

   

    textcontainer.setAttribute("style","visibility: initial");

    let project01property = window.getComputedStyle(project01);
    let project02property = window.getComputedStyle(project02);
    let project03property = window.getComputedStyle(project03);

    if (project01property.visibility == "hidden" && project02property.visibility == "hidden" && project03property.visibility == "hidden" ) {
        console.log("super");
        project01.setAttribute("style","visibility: initial");
    }
}

miniprojectsbox.addEventListener("click",miniprojectsfunction);

function showproject01() {
    project01.setAttribute("style","visibility: initial");
    project02.setAttribute("style","visibility: hidden");
    project03.setAttribute("style","visibility: hidden");
}

function showproject02() {
    project01.setAttribute("style","visibility: hidden");
    project02.setAttribute("style","visibility: initial");
    project03.setAttribute("style","visibility: hidden");
}

function showproject03() {
    project01.setAttribute("style","visibility: hidden");
    project02.setAttribute("style","visibility: hidden");
    project03.setAttribute("style","visibility: initial");
}

function shownoprojects() {
    project01.setAttribute("style","visibility: hidden");
    project02.setAttribute("style","visibility: hidden");
    project03.setAttribute("style","visibility: hidden");
}


// Just a test to see if transiotion really affects the " visibility : hidden " property
/* textcontainer.addEventListener("click", function() {

    spannr1.setAttribute("style","visibility : hidden");

}); */


