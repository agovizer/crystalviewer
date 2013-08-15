//mx
window.addEventListener( 'resize', re, false );
function re() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	console.log("REfunction: window was resized: ", window.innerWidth, window.innerHeight, " Aspect ratio ", camera.aspect);
	render();
}