//mx
//this module: Listens to any change in windows size and renders the scene appropriately  with the correct width, height and aspect ratio.
window.addEventListener( 'resize', re, false );
function re() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	console.log("REfunction: window was resized: ", window.innerWidth, window.innerHeight, " Aspect ratio ", camera.aspect);
	render();
}