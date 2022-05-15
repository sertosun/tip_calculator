// erstellen von globalen Variablen, damit am Anfang die value vom Slider steht

let tipAmount = document.getElementById("tipAmount");
const slider = document.getElementById("sliderRange");
tipAmount.innerHTML = slider.value + "%";

// durch oninput wird je nach input sofort die funktion ausgeführt und die Werte verändert
document.getElementById("tip_form").oninput = function () {
  let bill = document.getElementById("billingAmount").value;

  const tipInEuros = document.getElementById("tipInEuros");
  const totalBilling = document.getElementById("totalBill");

  // dadurch wird der slider mit der Prozentschrift verbunden
  slider.oninput = function () {
    tipAmount.innerHTML = this.value + "%";
  };

  // berechnung für das Trinkgeld
  var tipValue = bill * (slider.value / 100);
  tipValue = tipValue.toFixed(2); // sorgt dafür, dass wir nur zwei Dezimalstellen haben

// macht aus den beiden Werten Numbers
  tipValue = parseFloat(tipValue);
  bill = parseFloat(bill);

  // zusammenrechen von rechnung und trinkgeld
  var finalBill = bill + tipValue;

  // ausgabe im browser
  tipInEuros.innerHTML = tipValue + "€";
  totalBilling.innerHTML = finalBill + "€";
};
