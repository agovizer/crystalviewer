//mx

//queries the input array and returns the id of the selected atom (select.js returns approx location)
CrystalViewer.prototype.getid = function(x, y, z){ //uses error to find correct id
    var atoms = this.atoms;
    var originalError = new Array();
    var error = new Array();
    for ( var i = 0; i < atoms.length; i ++ ) {
	var coordinates = atoms[i][1];
	var sCoordinate=coordinates.toString();
	var bCoordinate=sCoordinate.split(",");
	var xError = Math.abs(bCoordinate[0] - x);
	var yError = Math.abs(bCoordinate[1] - y);
	var zError = Math.abs(bCoordinate[2] - z);
	var totalError = xError + yError + zError;
	error[i] = totalError;
	console.log("getidfunction: x,y,z , totalError ", x,y,z, totalError);
    }
    originalError = error.slice(0);
    error.sort(sortNumerically);
    var goal=error[0];
    var index=retrieveID(goal, originalError); //gets index based on lowest error
    console.log("getidfunction: sCoordinate, index ", sCoordinate, index);
    return index;
};

//aux functions		

//sorts array	
function sortNumerically(a,b){
    return (a - b);
}

//gets index 
function retrieveID(g, originalError){
    // doesnt work: var num = originalError.indexOf(g);
    for(var indexID=0; indexID<originalError.length; indexID++){
	if(originalError[indexID] == g){
	    return indexID;
	}
    }
}