document.getElementById('player').addEventListener('mouseover', SumarPuntos);



Puntos = 0
Tiempo = 180
necesario = 30
function SumarPuntos() {
    Puntos++;
    document.getElementById('puntos').innerHTML = "Puntos: <b>" + Puntos +"/"+ necesario +"</b>" ;
    Notas = Math.round(Math.random()*500);
    NotasDos = Math.round(Math.random()*500);
    document.getElementById('player').style.marginTop = Notas + 'px';
    document.getElementById('player').style.marginLeft = NotasDos + 'px';
    if (Puntos == 30) {
        alert('Gntes Bro');
    }
}








function restarTiempo(params) {
    Tiempo--;
    document.getElementById('tiempo').innerHTML = 'Tiempo:  '+ Tiempo + '';
    if (Tiempo === 0) {
        alert('Perdiste el Juego');
        Tiempo = 0;
        Puntos = 0;

    }
}


setInterval(restarTiempo, 3000)