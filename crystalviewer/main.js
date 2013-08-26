CrystalViewer.prototype.build = function(rez, rad){
    //prompt ("Dialation Factor"); //obsolete
    this.addatoms(rez,rad);
    if (typeof(bases) !== 'undefined') {
	console.log("bases array exists");
	this.buildframe();
    }
    else{
	console.log("bases array does not exist");
    }
    //see input.js

    //below is a related to getcoor.js

    //end read from file
    //}
    /*else{
      alert("No selection made");
      }*/
};

CrystalViewer.prototype.light = function(){
    var scene = this.scene;
    var amblight = new THREE.AmbientLight( 0x222222 );
    scene.add( amblight );
    var dirlight = new THREE.DirectionalLight( 0xffffff );
    dirlight.position.set( 1, 1, 1 );
    scene.add( dirlight );
    dirlight = new THREE.DirectionalLight( 0x002288 );
    dirlight.position.set( -1, -1, -1 );
    scene.add( dirlight );
};
