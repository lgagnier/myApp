
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, 
                                                          errorCallback,
                                                          {enableHighAccuracy:true,timeout:60000,maximumAge:0});
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";}
    }
    
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
	writePosition(position.coords.latitude,position.coords.longitude);
}

function errorCallback() {}

function writePosition(latitude,longitude) {

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                x.innerHTML = "Je passe ici";
            } else {
				x.innerHTML = "Fonctionne pas";
			}
        };
	x.innerHTML = "Je passe ici 2";
        xmlhttp.open("GET","https://mocfpg.dyndns.org/gps/gps.php?latitude="+latitude+"&longitude="+longitude,true);
        xmlhttp.send();
}
