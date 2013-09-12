//mx
//draws axis on scene

CrystalViewer.prototype.axistog = function(){
    var axisenabled = this.axisenabled;
    var scene = this.scene;
    
    if (axisenabled == 0){
	//x
	var material = new THREE.LineBasicMaterial({color: 0x363636});
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(-1000,0,0));
	geometry.vertices.push(new THREE.Vector3(1000,0,0));
	this.xaxis= new THREE.Line(geometry, material); 
	scene.add(this.xaxis);
	console.log("togaxisfunction: xaxis created");
	//y
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(0,-1000,0));
	geometry.vertices.push(new THREE.Vector3(0,1000,0));
	this.yaxis= new THREE.Line(geometry, material); 
	scene.add(this.yaxis);
	console.log("togaxisfunction: yaxis created");
	//z
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(0,0,-1000));
	geometry.vertices.push(new THREE.Vector3(0,0,1000));
	this.zaxis= new THREE.Line(geometry, material); 
	scene.add(this.zaxis);
	console.log("togaxisfunction: zaxis created");
	//r
	render();
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