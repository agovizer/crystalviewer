//mx

CrystalViewer.prototype.addatoms = function(rez,rad){
    var atoms = this.atoms;
    var scene = this.scene;
    var dial = this.dial;
    this.rez = rez;
    this.rad = rad;
    
    var geometry = new THREE.SphereGeometry(rad,rez,rez,0,Math.PI * 2,0, Math.PI); //creates the basic sphere geo
    console.log("Buildfunc4: rez,rad", rez, rad);
    for ( var i = 0; i < atoms.length; i++ ) {
	var cpk = cpkquery(atoms[i][0]); //calls cpk to get atomic num
	var material =  new THREE.MeshPhongMaterial( { color:eval(cpk), shading: THREE.SmoothShading } ); //sets the material using cpk color
	var coor = atoms[i][1]; 
	coors=coor.toString();
	console.log("Buildfunc4:", coors);
	var br=coors.split(",");
	var item = new THREE.Mesh( geometry, material );
	item.position.x = br[0]*dial;
	item.position.y = br[1]*dial;
	item.position.z = br[2]*dial;
	item.updateMatrix();
	item.matrixAutoUpdate = false;
	scene.add(item);
    }
};

CrystalViewer.prototype.buildframe = function(){
    var scene = this.scene;
    var bases = this.bases;
    bases.a = bases.a.map(function(x) { return x * 100; });
    bases.b = bases.b.map(function(x) { return x * 100; });
    bases.c = bases.c.map(function(x) { return x * 100; });
    var one = [0,0,0];
    var two = bases.a;
    var three = comb(bases.a,bases.b);
    var four = bases.b;
    var five = comb(one, bases.c);
    var six = comb(two, bases.c);
    var seven = comb(three, bases.c);
    var eight = comb(four, bases.c);
    var material5 = new THREE.LineBasicMaterial({color: 0x808080});
    var geometry5 = new THREE.Geometry();
    for (var i=1; i<5; i++){
	var cor=eval(basenum[i]);
	geometry5.vertices.push(new THREE.Vector3(cor[0],cor[1],cor[2]));
	var base = new THREE.Line(geometry5, material5); 
	scene.add(base);
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

function comb(x,y){
    var out = new Array();
    for ( var k=0; k<bases.a.length; k++){
	out[k] = parseInt(x[k]) + parseInt(y[k]);
    }
    return out;
}

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