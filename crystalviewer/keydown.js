//mx
//this file takes the keycodes and matches them up with their proper function
//*****************Getoutput is undefined****************************
//calls functions based on their keycode
CrystalViewer.prototype.kdwn = function( kd ){
    var axistog = this.axistog;
    
    console.log("Kdwnfunction: ","User Pressed ", kd.keyCode);
    if (kd.keyCode == "13"){
	if (this.done == 1){
	    return;
	}
	console.log("Kdwnfunction: ", "Enter Pressed-finoutput");
	fin = getoutput();
	document.getElementById('output').innerHTML=(fin); //output to output div on html
    }
    else if (kd.keyCode == "72"){
	if (this.done == 1){
	    return;
	}
	console.log("Kdwnfunction: ", "H Pressed-outputting help");//calls help
	help();
    }
    else if (kd.keyCode == "82"){
	console.log("Kdwnfunction: ", "R Pressed-running resize");//for forced refresh (if corrupted) - fixes a rare bug in firefox
	re();
	
    }
    else if (kd.keyCode == "65"){
	console.log("Kdwnfunction: ", "A Pressed-toggle axis");//toggles axis
	axistog();
    }
    else if (kd.keyCode == "16"){
	if (this.done == 1){
	    return;
	}
	console.log("Kdwnfunction: ", "Shift Pressed-withmouseclick-showsidandaxis");//sets mode to shift
	this.shift = 1;
    }
    else if (kd.keyCode == "67"){
	if (this.done == 1){
	    return;
	}
	console.log("Kdwnfunction: ", "C Pressed-clearingtextoutput"); //this keycode clears text output in div in html
	document.getElementById('output').innerHTML="";

    }
};


//logs input
CrystalViewer.prototype.kup = function( kd ){
    console.log("Kupfunction: ","User released ", kd.keyCode);//logs any keypress-used for debugging
    if (kd.keyCode == "16"){
	console.log("Kupfunction: ", "Shift Released");//logs any keypress -used for debugging
	this.shift = 0;
    }
};