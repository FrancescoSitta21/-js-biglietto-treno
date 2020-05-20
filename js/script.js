var etaPasseggero = prompt('Quanti anni hai?');
console.log(etaPasseggero);

var distanza = prompt('Quanti chilometri devi percorrere?');
console.log(distanza);

var costo = 0.21

var costocomplessivo = (costo * distanza);
console.log(costocomplessivo);

var scontoMinorenni = (costocomplessivo * 80 / 100);
console.log(scontoMinorenni);

var scontoAnziani = (costocomplessivo * 60 / 100);
console.log(scontoAnziani);

var costofinale = costo;

if (etaPasseggero < 18) {
  costofinale = scontoMinorenni
} else if (etaPasseggero >= 65) {
  costofinale = scontoAnziani
}

document.getElementById('Costo').innerHTML = costofinale + '€';
