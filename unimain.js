$(document).ready(function(){
  $(".currency").hide();
  $(".object").hide();
  $("#starA").hide();
  $("#sing").click(function(){
    $("#sing").hide();
    $(".currency").show();
    $(".object").show();
    $("#starA").show();
  });
});

var lightSpeed = 3;
var hydrogen = 750;
var helium = 247;
var lithium = 2;
var beryllium = 1;
var energy = 0;
var starAcount = 0;


function displayCounts() {
document.getElementById('hydrogen').innerHTML = hydrogen;
document.getElementById('helium').innerHTML = helium;
document.getElementById('lithium').innerHTML = lithium;
document.getElementById('beryllium').innerHTML = beryllium;
document.getElementById('energy').innerHTML = energy;
};

function displayObjects() {
document.getElementById('starAcount').innerHTML = starAcount;
};

function typeAfusion () {

};

function typeAstarcreate() {
  var starCost = 100;
  if (hydrogen >= starCost) {
    hydrogen = hydrogen - starCost;
    starAcount = starAcount + 1;
  };

};

console.log (starAcount);
console.log (hydrogen);

window.setInterval(function(){
  displayCounts();
  displayObjects();
  console.log (starAcount);
  console.log (hydrogen);

}, 1000);