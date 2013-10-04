//mx
//builds scene

//handles atom drawing
CrystalViewer.prototype.addatoms = function(resolution,rad){
    var atoms = this.atoms;
    var scene = this.scene;
    var dialationFactor = this.dial; //dialates input coordinate system
    this.resolution = resolution; //quality of the spheres and lighting
    this.rad = rad; 
    
    var geometry = new THREE.SphereGeometry(rad,resolution,resolution,0,Math.PI * 2,0, Math.PI); //creates the basic sphere geometry
    console.log("Buildfunc4: resolution,rad", resolution, rad);//debug info
    for ( var i = 0; i < atoms.length; i++ ) {//creates for every atom
	var cpk = cpkquery(atoms[i][0]); //calls cpk to get atomic num
	var material =  new THREE.MeshPhongMaterial( { color:eval(cpk), shading: THREE.SmoothShading } ); //sets the material using cpk color
	var coordinate = atoms[i][1]; //get coordinate
	var pCoordinate=coordinate.toString();//parse coordinate
	console.log("Buildfunc4:", pCoordinate);
	var bCoordinate=pCoordinate.split(",");
	var item = new THREE.Mesh( geometry, material );
	item.position.x = bCoordinate[0]*dialationFactor;//sets position
	item.position.y = bCoordinate[1]*dialationFactor;
	item.position.z = bCoordinate[2]*dialationFactor;
	item.updateMatrix();
	item.matrixAutoUpdate = false;
	scene.add(item);//adds to scene
    }
};

//handles basis vector drawing
CrystalViewer.prototype.buildframe = function(){
    var scene = this.scene;
    var bases = this.bases;
    bases.a = bases.a.map(function(x) { return x * 100; });//scalar multiplication
    bases.b = bases.b.map(function(x) { return x * 100; });
    bases.c = bases.c.map(function(x) { return x * 100; });
    var one = [0,0,0];
    var two = bases.a;
    var three = vectorAdd(bases.a,bases.b);
    var four = bases.b;
    var five = vectorAdd(one, bases.c);
    var six = vectorAdd(two, bases.c);
    var seven = vectorAdd(three, bases.c);
    var eight = vectorAdd(four, bases.c);
    var material5 = new THREE.LineBasicMaterial({color: 0x808080});
    var geometry5 = new THREE.Geometry();
    for (var i=1; i<5; i++){
	var cor=eval(basenum[i]);
	geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
	var base = new THREE.Line(geometry5, material5); 
	scene.add(base);
	//if statements needed to combine all the vertices with appropriate lines
	if (i==4){
	    var cor=eval(basenum[1]);
	    geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
	    base = new THREE.Line(geometry5, material5); 
	    scene.add(base);
	    for (var i=5; i<9; i++){
		var cor=eval(basenum[i]);
		geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
		base = new THREE.Line(geometry5, material5); 
		scene.add(base);
		if (i==6){
		    var cor=eval(basenum[2]);
		    geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
		    base = new THREE.Line(geometry5, material5); 
		    scene.add(base);
		    var cor=eval(basenum[6]);
		    geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
		}
		if (i==7){
		    var cor=eval(basenum[3]);
		    geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
		    base = new THREE.Line(geometry5, material5); 
		    scene.add(base);
		    var cor=eval(basenum[7]);
		    geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
		}
		if (i==8){
		    var cor=eval(basenum[4]);
		    geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
		    base = new THREE.Line(geometry5, material5); 
		    scene.add(base);
		    var cor=eval(basenum[8]);
		    geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
		    var cor=eval(basenum[5]);
		    geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
		    base = new THREE.Line(geometry5, material5); 
		    scene.add(base);
		}
	    }
	}
	
    }
    
    console.log("basebuildfunc: ",one, two, three, four, five, six, seven, eight);
};

//combines arrays
function vectorAdd(x,y){
    var out = new Array();
    var l1 = x.length, l2 = y.length;
    if (l1!=l2) throw "vector length mismatch " + l1 + ", " + l2;
    for ( var k=0; k<l1; k++){
	out[k] = parseInt(x[k]) + parseInt(y[k]);
    }
    return out;
}

//dictionary for basenum
var basenum = {
    "1":"one",
    "2":"two",
    "3":"three",
    "4":"four",
    "5":"five",
    "6":"six",
    "7":"seven",
    "8":"eight",
}