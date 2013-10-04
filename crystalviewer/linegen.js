//mx
//this file generates cylinders connecting the two atoms based on the selected points
CrystalViewer.prototype.linegen = function(inputa,inputb){
    if (inputa==undefined || inputb==undefined) return;//cleanses input
    var scene = this.scene;
    var renderer = this.renderer;
    var linarr = this.linarr, delarr = this.delarr;
    var dial = this.dial;
    var atoms = this.atoms;
    
    scene.remove(delarr[linarr.length-1]); //removes previous cylinder object
    var in1 = inputa, in2 = inputb;
    console.log(in1,in2,"far");
    //return[i,j];
    var gCoordinate1 = atoms[in1][1]; //get coordinates
    var gCoordinate2 = atoms[in2][1];
    gCoordinate1 = gCoordinate1.toString();//parses coordinates
    gCoordinate2 = gCoordinate2.toString();
    var bCoordinate1=gCoordinate1.split(",");
    var bCoordinate2=gCoordinate2.split(",");
    var material =  new THREE.MeshPhongMaterial( { color:0xffffff, shading: THREE.SmoothShading } ); //sets type of material
    tall = findlength(bCoordinate1,bCoordinate2) * this.dial;
    var geometry = new THREE.CylinderGeometry(0.5,0.5,tall,this.rez,this.rez,false);
    delarr[linarr.length] = new THREE.Mesh(geometry, material); //creates new variable and points it to new object
    newpos = findcoor(bCoordinate1,bCoordinate2);
    console.log("aefae",newpos);
    delarr[linarr.length] .position.x = newpos[0]*dial; //sets attributes
    delarr[linarr.length] .position.y = newpos[1]*dial;
    delarr[linarr.length] .position.z = newpos[2]*dial;
    //	delarr[linarr.length].rotateonaxis("x", findangle(br1,br2,"x"));
    //	delarr[linarr.length].rotation.x = findangle(br1,br2,"x");
    //	delarr[linarr.length].rotation.y = findangle(br1,br2,"y");
    //	delarr[linarr.length].rotation.z = findangle(br1,br2,"z"); */
    //delarr[linarr.length].overdraw = true;
	
	//gets orientation of cylinder
    var oriX = bCoordinate2[0]-bCoordinate1[0], oriY = bCoordinate2[1]-bCoordinate1[1], oriZ = bCoordinate2[2] - bCoordinate1[2];
    
    var deg2rad = Math.PI/180;
    var theta = Math.atan(Math.sqrt(oriX*oriX+oriZ*oriZ)/oriY), phi = Math.atan(oriX/oriZ);
    if (theta == 0) {phi = 0;}
    if (oriY == 0){theta = Math.PI/2;}
    if (oriZ == 0 && oriX > 0){phi = Math.PI/2;}
    if (oriZ == 0 && oriX < 0){phi = 3*Math.PI/2;}
    if (theta < 0){
	theta += Math.PI;
    }
    if (oriZ < 0) {phi  = Math.PI + phi;}
    var vx = new THREE.Vector3(1,0,0), vy = new THREE.Vector3(0,1,0);
    
    rotateAroundWorldAxis(delarr[linarr.length], vx, theta);
    rotateAroundWorldAxis(delarr[linarr.length], vy, phi);
    renderer.render(this.scene, this.camera);
    scene.add(delarr[linarr.length]);
    console.log("Lingenfunction", gCoordinate1, " | ", gCoordinate2, "linarr", linarr.length);
    this.render();
    console.log(in1,in2,"close");
    return [in1,in2]; //returns last two values
};

//gets cordinates from ids given
function findcoor(a,b){
    var newpos = new Array();
    for (i=0; i<3; i++){
	newpos[i] =(parseFloat(a[i]) + parseFloat(b[i]))/2;
	console.log(a[i],b[i],newpos[i]);
    }
    return newpos;
}

//calculates length of cylinder
function findlength(a,b){
    var distance;
    distance = Math.sqrt(Math.pow((a[0]-b[0]),2) + Math.pow((a[1]-b[1]),2) + Math.pow((a[2]-b[2]),2));
    console.log("findlengthfunc", distance);
    return distance;
}

//obsolete: for line generation based on line. Uncalled function. Obsoleted because of ANGLE problem.
function findangle(a,b,c){
    //xy
    if (c=="x"){
	dz = b[2]-a[2];
	dy = b[1]-a[1];
	angle=Math.atan((dz/dy));
	console.log("Findanglefunc: X",angle);
	if (isNaN(dz/dy) == true){return Math.PI/2;}
	return angle;
    }

    else if (c=="y"){
	dz = b[2]-a[2];
	dx = b[0]-a[0];
	angle= Math.atan((dx/dz));
	console.log("Findanglefunc: Y",angle);
	if (isNaN(dx/dz) == true){return Math.PI/2;}
	return angle;
    }

    else if (c=="z"){
	dx = b[0]-a[0];
	dy = b[1]-a[1];
	angle= Math.atan((dx/dy));
	console.log("Findanglefunc: Z",angle);
	if (isNaN(dx/dy) == true){return 0;}
	return angle;
    }
}

//old line gen

/* function linegen(){
	scene.remove(delarr[linarr.length-1]);
	i = linarr[linarr.length-1];
	j = linarr[linarr.length-2];
	coor1 = atoms[i][1];
	var coor2 = atoms[j][1];
	coor1 = coor1.toString();
	coor2 = coor2.toString();
	var br1=coor1.split(",");
	var br2=coor2.split(",");
	var material = new THREE.LineBasicMaterial({color: 0xffffff});
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(br1[0]*dial,br1[1]*dial,br1[2]*dial));
	geometry.vertices.push(new THREE.Vector3(br2[0]*dial,br2[1]*dial,br2[2]*dial));
	delarr[linarr.length] = new THREE.Line(geometry, material); 
	scene.add(delarr[linarr.length]);
	console.log("Lingenfunction", coor1, " | ", coor2, "linarr", linarr.length);
	render();
	return [i,j];
}
 */