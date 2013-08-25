//mx			
CrystalViewer.prototype.msedwn = function( msd ) {
    if (this.done == 1){
	return;
    }
    msd.preventDefault();
    var vector = new THREE.Vector3( ( msd.clientX / window.innerWidth ) * 2 - 1, - ( msd.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    this.projector.unprojectVector( vector, this.camera );
    var raycaster = new THREE.Raycaster( this.camera.position, vector.sub( this.camera.position ).normalize() );
    var intersects = raycaster.intersectObjects(this.scene.children);
    if ( intersects.length > 0 ) {
	onex = intersects[ 0 ].point.x / 100;
	oney = intersects[ 0 ].point.y / 100;
	onez = intersects[ 0 ].point.z / 100;
	this.select(onex,oney,onez);
    }
};

CrystalViewer.prototype.select = function(x,y,z){
    if (this.shift == 1){
	this.selshift(x,y,z); //see selectfunc.js
    }
    else if (this.shift == 0){
	if (this.linarr.length == 0){
	    this.shift = 1;
	    this.first = 1;
	    this.select(x,y,z);
	}
	var id = this.getid(x,y,z);
	var insert = this.linarr.length;
	this.linarr[insert] = id;
	var lasttwo= this.getlinarr();
	var both=this.linegen(lasttwo[0],lasttwo[1]);
	if (both == null) return;
	var b1=both[0];
	var b2=both[1];
	this.sel(b1,b2);
    }
};

CrystalViewer.prototype.getlinarr = function(){
    linarr = this.linarr;
    var i = linarr[linarr.length-1];
    var j = linarr[linarr.length-2];
    return [i,j];
};
