//mx
//listens to the keypresses and calls the appropriate functions
document.addEventListener('keydown', kdwn, false);
var shift = 0;
function kdwn( kd ){
	console.log("Kdwnfunction: ","User Pressed ", kd.keyCode);
	if (kd.keyCode == "13"){
		if (done == 1){
			return;
		}
		console.log("Kdwnfunction: ", "Enter Pressed-finoutput");
		fin = getoutput();
		document.getElementById('output').innerHTML=(fin);
	}
	else if (kd.keyCode == "72"){
		if (done == 1){
			return;
		}
		console.log("Kdwnfunction: ", "H Pressed-outputting help");
		help();
	}
	else if (kd.keyCode == "82"){
		console.log("Kdwnfunction: ", "R Pressed-running resize");
		re();
		
	}
	else if (kd.keyCode == "65"){
	console.log("Kdwnfunction: ", "A Pressed-toggle axis");
	axistog();
	}
	else if (kd.keyCode == "16"){
	if (done == 1){
			return;
		}
	console.log("Kdwnfunction: ", "Shift Pressed-withmouseclick-showsidandaxis");
	shift = 1;
	}
	else if (kd.keyCode == "67"){
	if (done == 1){
			return;
		}
	console.log("Kdwnfunction: ", "C Pressed-clearingtextoutput");
	document.getElementById('output').innerHTML="";

	}
}



document.addEventListener('keyup', kup, false);
function kup( kd ){
	console.log("Kupfunction: ","User released ", kd.keyCode);
		if (kd.keyCode == "16"){
		console.log("Kupfunction: ", "Shift Released");
		shift = 0;
	}
}