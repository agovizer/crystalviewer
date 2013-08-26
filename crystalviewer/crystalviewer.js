function CrystalViewer(bases, atoms, containerID)
{
    //preconfigdata
    // renderer
    var renderer = new THREE.WebGLRenderer( { antialias: true } );
    //renderer.setClearColor( scene.fog.color, 1 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    // add to container div
    var container = document.getElementById( containerID );
    container.appendChild( renderer.domElement );
    
    // camera
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
    camera.position.z = 250;
    // controls
    var controls = new THREE.OrbitControls( camera ); //see oc.js
    
    // scene
    var scene = new THREE.Scene(); // inits scene
    //scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

    var self = this;
    this.bases = bases; this.atoms = atoms;
    // from index.html
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;
    this.renderer = renderer;
    controls.addEventListener( 'change', function() {self.render();}); //listens to any event
    
    this.delarr = new Array(); // global(not nec) used to manage the deletion of prior lines
    this.linarr = new Array(); //global array used by lingen.js and whose last 2 entries represented selected atom
    this.dial=100; //global dialation factor
    this.rez = null;
    console.log("Dialation factor: ", this.dial);
    this.done = 0;

    //mouse vector
    this.mouse = new THREE.Vector2();
    this.INTERSECTED = null;
    this.projector = new THREE.Projector(); 
    this.raycaster = new THREE.Raycaster(); 

    // from axis.js
    this.axisenabled = 0;
    this.xaxis = null;
    this.yaxis = null;
    this.zaxis = null;

    // from keydown.js
    this.shift = 0;
    document.addEventListener('keydown', function(kd) {self.kdwn(kd);}, false);
    document.addEventListener('keyup', function(kd) {self.kup(kd);}, false);
    
    // from resize.js
    window.addEventListener( 'resize', function(){self.re();}, false );

    // from select.js
    this.first = null;
    document.addEventListener( 'mousedown', function(msd){self.msedwn(msd);}, false );
}

CrystalViewer.prototype = {
    'render': function() {
	console.log("Renderfunction was called"); // disable to prevent consolespam
	this.renderer.render( this.scene, this.camera );
    }
    , 'animate': function() {
	var self = this;
	requestAnimationFrame(function() {self.animate();});
	this.controls.update();
    }
};