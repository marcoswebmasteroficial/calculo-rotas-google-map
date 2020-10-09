function initization() {
  var direcao = new google.maps.DirectionsService();
  document.querySelector("button").addEventListener("click", () => {
    document.getElementById("resultado").style.display = 'none';
    var inicio = document.getElementById("origem").value;
    var fim = document.getElementById("destino").value;
    var travel = document.getElementById("travel").value;
    var frete = document.getElementById("km").value;
    var mode;
    switch (travel) {
      case 'publico':
        mode = 'TRANSIT'
        break;
      case 'carro':
        mode = 'DRIVING';
        break;
      case 'ape':
        mode = 'WALKING';
        break;
    }
    var request = {
      origin: inicio,
      destination: fim,
      travelMode: mode
    };
    direcao.route(request, function(result, status) {
      if (status == 'OK') {
        document.getElementById("resultado").style.display = 'block';
        document.getElementById("resultado").innerHTML = '<span>'+result.routes[0].legs[0].distance.text + '<span> <br> Valor  Estimando do Frete :' + (result.routes[0].legs[0].distance.text.split(' ')[0] * frete).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        });
      } else {
        console.log(result.status);
      }
    });
  })


}
