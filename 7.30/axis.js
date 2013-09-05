//mx
//this module draws the axis of the coordinate grid
var xaxis;
var yaxis;
var zaxis;

function axistog(){
	if (axisenabled == 0){
		//x
		var material = new THREE.LineBasicMaterial({color: 0x363636});
		var geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(-1000,0,0));
		geometry.vertices.push(new THREE.Vector3(1000,0,0));
		xaxis= new THREE.Line(geometry, material); 
		scene.add(xaxis);
		console.log("togaxisfunction: xaxis created");
		//y
		var geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(0,-1000,0));
		geometry.vertices.push(new THREE.Vector3(0,1000,0));
		yaxis= new THREE.Line(geometry, material); 
		scene.add(yaxis);
		console.log("togaxisfunction: yaxis created");
		//z
		var geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3(0,0,-1000));
		geometry.vertices.push(new THREE.Vector3(0,0,1000));
		zaxis= new THREE.Line(geometry, material); 
		scene.add(zaxis);
		console.log("togaxisfunction: z created");
		//r
		render();
		axisenabled = 1;
		return;
	}
	else {
		scene.remove(xaxis);scene.remove(yaxis);scene.remove(zaxis);
		console.log("togaxisfunction: all axis deleted");
		axisenabled = 0;
		render();
		return;

	}
}