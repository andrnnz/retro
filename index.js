
function info(){
    /*document.getElementById("btn-info").style.display="none";
    document.getElementById("btn-regresar").style.display="inline";
    document.getElementById("stats").style.display="inline";
    document.getElementById("info-schumacher").style.display="none";*/
    document.getElementById("schumacher").src="sf.jpg";
    $("#btn-info").css("display", "none");
    $("#btn-regresar").css("display", "inline");
    $("#stats").css("display", "inline");
    $("#info-schumacher").css("display", "none");
    $("#sch2").css("display", "none");
    $("#container-preStats").css("display", "none");

}

function ajax(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("bio").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "schumBio.txt");
    xhttp.send();
}

function ajax2(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("bio").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "intro.txt");
    xhttp.send();
}

function regresar(){
    document.getElementById("btn-info").style.display="inline";
    document.getElementById("btn-regresar").style.display="none";
    document.getElementById("schumacher").src="michael.jpeg";
    document.getElementById("stats").style.display="none";
    $("#sch2").css("display", "inline");
    $("#container-preStats").css("display", "inline");
}