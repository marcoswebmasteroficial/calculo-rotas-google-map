document.querySelector("button").addEventListener("click", () =>{
var inicio = document.getElementById("origem").value;
var fim = document.getElementById("destino").value;
var request = {origin: inicio,destination: fim,travelMode: 'DRIVING'};
var direcao = new google.maps.DirectionsService();
direcao.route(request, function(result, status) {
if (status == 'OK') {
document.getElementById("resultado").textContent = result.routes[0].legs[0].distance.text;
}else{
alert('ERROR !! '+result)
}
});
})