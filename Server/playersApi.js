
export function getPlayerData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/player", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}