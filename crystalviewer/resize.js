//mx

//calls resize function if the window size changes
CrystalViewer.prototype.re = function() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );//sets new size
    console.log("REfunction: window was resized: ", window.innerWidth, window.innerHeight, " Aspect ratio ", this.camera.aspect);
    this.render();
};