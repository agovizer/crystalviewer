//mx			
document.addEventListener( 'mousedown', msedwn, false );
function msedwn( msd ) {
	if (done == 1){
	return;
	}
	msd.preventDefault();
	var vector = new THREE.Vector3( ( msd.clientX / window.innerWidth ) * 2 - 1, - ( msd.clientY / window.innerHeight ) * 2 + 1, 0.5 );
	projector.unprojectVector( vector, camera );
	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
	var intersects = raycaster.intersectObjects(scene.children);
	if ( intersects.length > 0 ) {
		onex = intersects[ 0 ].point.x / 100;
		oney = intersects[ 0 ].point.y / 100;
		onez = intersects[ 0 ].point.z / 100;
		select(onex,oney,onez);
	}
}

var first;
function select(x,y,z){
	if (shift == 1){
		selshift(x,y,z); //see selectfunc.js
	}
	else if (shift == 0){
		if (linarr.length == 0){
		shift = 1;
		first = 1;
		select(x,y,z);
		}
		var id = getid(x,y,z);
		insert = linarr.length;
		linarr[insert] = id;
		var both=linegen();
		b1=both[0];
		b2=both[1];
		sel(b1,b2);
		}
}

