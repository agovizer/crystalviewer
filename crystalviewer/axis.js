//mx
//draws axis on scene
//***************problem with scene being undefined************************

CrystalViewer.prototype.axistog = function(){
    var axisenabled = this.axisenabled;
    var scene = this.scene;
    
    if (axisenabled == 0){
	//x
	var material = new THREE.LineBasicMaterial({color: 0x363636});
	var xgeometry = new THREE.Geometry();
	xgeometry.vertices.push(new THREE.Vector3(-1000,0,0));
	xgeometry.vertices.push(new THREE.Vector3(1000,0,0));
	this.xaxis= new THREE.Line(xgeometry, material); 
	scene.add(this.xaxis);
	console.log("togaxisfunction: xaxis created");
	//y
	var ygeometry = new THREE.Geometry();
	ygeometry.vertices.push(new THREE.Vector3(0,-1000,0));
	ygeometry.vertices.push(new THREE.Vector3(0,1000,0));
	this.yaxis= new THREE.Line(ygeometry, material); 
	scene.add(this.yaxis);
	console.log("togaxisfunction: yaxis created");
	//z
	var zgeometry = new THREE.Geometry();
	zgeometry.vertices.push(new THREE.Vector3(0,0,-1000));
	zgeometry.vertices.push(new THREE.Vector3(0,0,1000));
	this.zaxis= new THREE.Line(zgeometry, material); 
	scene.add(this.zaxis);
	console.log("togaxisfunction: zaxis created");
	//r
	this.render();
	axisenabled = 1;
	return;
    }
	//removes axis
    else {
	scene.remove(this.xaxis);scene.remove(this.yaxis);scene.remove(this.zaxis);
	console.log("togaxisfunction: all axis deleted");
	axisenabled = 0;
	render();
	return;

    }
};