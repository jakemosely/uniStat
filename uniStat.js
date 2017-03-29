// Universe Stats v.0.0.1


//increment/decrement click code
$(document).ready(function() {

 $('#plus').click(function() {
  $('.counter').increment();
	});
 $('#minus').click(function() {
 	if ($('.counter').counterValue() > 1) {
  $('.counter').decrement();
		}
	});
});




var interval = setInterval( engine, 1000);

var engine = (function () {
	var i = 0;
	var H = 1E+09;
	var He = 0;
	display();
	protonProton();
}		
   
function statBox()  {
	var rateFusion = $('.counter').counterValue();
	var pctConv = (1E+9-H)/1E+9 * 100;
	var daysRemain = (H/86400) / rateFusion;
	return [pctConv, daysRemain];

}


function display() {
	var stats = statBox();
	var pctDisp = stats[0];
	var timeDisp = stats[1];
	document.getElementById("H_count").innerHTML = H;
	document.getElementById("He_count").innerHTML = He;
	document.getElementById("pct-out").innerHTML = pctDisp.toPrecision(2);
	document.getElementById("time-out").innerHTML = timeDisp.toPrecision(3);
}

function protonProton() {              //simple v1.1
	var rateFusion = 1;
	rateFusion = $('.counter').counterValue();
	H = H - (2*rateFusion);
	He= He +(1*rateFusion);

}
