//mx
var i;
function linegen(){
	scene.remove(delarr[linarr.length-1]);
	i = linarr[linarr.length-1];
	j = linarr[linarr.length-2];
	coor1 = atoms[i][1];
	var coor2 = atoms[j][1];
	coor1 = coor1.toString();
	coor2 = coor2.toString();
	var br1=coor1.split(",");
	var br2=coor2.split(",");
	var material =  new THREE.MeshPhongMaterial( { color:0xffffff, shading: THREE.SmoothShading } ); 
	tall = findlength(br1,br2);
	var geometry = new THREE.CylinderGeometry(0.5,0.5,tall,rez,rez,false);
	delarr[linarr.length] = new THREE.Mesh(geometry, material);
	newpos = findcoor(br1,br2);
	console.log("aefae",newpos);
	delarr[linarr.length] .position.x = newpos[0]*dial;
	delarr[linarr.length] .position.y = newpos[1]*dial;
	delarr[linarr.length] .position.z = newpos[2]*dial;
//	delarr[linarr.length].rotateonaxis("x", findangle(br1,br2,"x"));
	delarr[linarr.length].rotation.x = findangle(br1,br2,"x");
	delarr[linarr.length].rotation.y = findangle(br1,br2,"y");
//	delarr[linarr.length].rotation.z = findangle(br1,br2,"z");
	scene.add(delarr[linarr.length]);
	console.log("Lingenfunction", coor1, " | ", coor2, "linarr", linarr.length);
	render();
	return [i,j];
}
function findcoor(a,b){
var newpos = new Array();
for (i=0; i<3; i++){
newpos[i] =(parseFloat(a[i]) + parseFloat(b[i]))/2;
console.log(a[i],b[i],newpos[i]);
}
return newpos;
}
function findlength(a,b){
var distance;
distance = Math.sqrt(Math.pow((a[0]-b[0]),2) + Math.pow((a[1]-b[1]),2) + Math.pow((a[2]-b[2]),2));
console.log("findlengthfunc", distance);
return distance*dial;
}
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