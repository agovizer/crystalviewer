function build(bases, atoms){
    rez = 50 //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO prompt ("Enter sphere resolution"); //number of vertices being rendered, the less, the less (c/g)pu cycles used
    var rad =5; //prompt ("Radius"); // radius of spheres
    //prompt ("Dialation Factor"); //obsolete
    crystalbuild(rez,rad, atoms);
    if (typeof(bases) !== 'undefined') {
	console.log("bases array exists");
	basebuild(bases);
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
}

function light(){
    amblight = new THREE.AmbientLight( 0x222222 );
    scene.add( amblight );
    dirlight = new THREE.DirectionalLight( 0xffffff );
    dirlight.position.set( 1, 1, 1 );
    scene.add( dirlight );
    dirlight = new THREE.DirectionalLight( 0x002288 );
    dirlight.position.set( -1, -1, -1 );
    scene.add( dirlight );
}


function animate() {
    requestAnimationFrame( animate );
    controls.update();
}
function render() {
    console.log("Renderfunction was called"); // disable to prevent consolespam
    renderer.render( scene, camera );
}
