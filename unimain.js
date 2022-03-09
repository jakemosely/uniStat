$(document).ready(function(){
  $(".currency").hide();
  $("#sing").click(function(){
    $("#sing").hide();
    $(".currency").show();
  });
});

var lightSpeed = 3;
var hydrogen = 750;
var helium = 247;
var lithium = 2;
var beryllium = 1;
var energy = 0;
var massONEstar = 0;


function displayCounts() {
document.getElementById('hydrogen').innerHTML = hydrogen;
document.getElementById('helium').innerHTML = helium;
document.getElementById('lithium').innerHTML = lithium;
document.getElementById('beryllium').innerHTML = beryllium;
document.getElementById('energy').innerHTML = energy;
};

function massONEstarcreate() {
  var starCost = 100;
  if (hydrogen >= starCost) {
    massONEstar = massONEstar + 1;
  }

}

window.setInterval(function(){
  displayCounts();

}, 1000);