//main container that contains the input bases and atoms.
function main(contaierID) {
    
    var bases = {a: [1,0,0], b:[0,1,0], c:[0,0,1]};

    var atoms = [
	['Na', [0, 0, 0]],
	//
	['Na', [-.5, -.5, 0]],
	['Na', [-.5, 0, 0]],
	//
	['Na', [0.5, 0.5, 0]],
	['Na', [0.5, 0, 0.5]],
	['Na', [0, 0.5, 0.5]],
	['Cl', [0.5, 0, 0]],
	['Cl', [0, 0.5, 0]],
	['Cl', [0, 0, 0.5]],
	['Cl', [0.5, 0.5, 0.5]],
    ];

    // crystal viewer
    var cv = new CrystalViewer(bases, atoms, contaierID);	//initializes object crystal viewer


    //
    var rez = 50 //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO prompt ("Enter sphere resolution"); //number of vertices being rendered, the less, the less (c/g)pu cycles used
    var rad = 5; //prompt ("Radius"); // radius of spheres

    //
    cv.build(rez, rad); //calls scene builder from variety of sources
    cv.light();
    cv.animate();
    
}
