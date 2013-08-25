//mx
CrystalViewer.prototype.getid = function(x, y, z){
    var atoms = this.atoms;
    var errororig = new Array();
    var error = new Array();
    for ( var i = 0; i < atoms.length; i ++ ) {
	var coor = atoms[i][1];
	var coors=coor.toString();
	var br=coors.split(",");
	var xd = Math.abs(br[0] - x);
	var yd = Math.abs(br[1] - y);
	var zd = Math.abs(br[2] - z);
	var total = xd + yd + zd;
	error[i] = total;
	console.log("getidfunction: x,y,z , total ", x,y,z, total);
    }
    errororig = error.slice(0);
    error.sort(numasc);
    var goal=error[0];
    var index=look(goal, errororig);
    console.log("getidfunction: coors, index ", coors, index);
    return index;
};

//aux functions			
function numasc(a,b){
    return (a - b);
}
function look(g, errororig){
    // doesnt work: var num = errororig.indexOf(g);
    for(var ii=0; ii<errororig.length; ii++){
	if(errororig[ii] == g){
	    return ii;
	}
    }
}