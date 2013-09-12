//mx

//finals selection and disables selection. Ouputs data to backend
CrystalViewer.prototype.getoutput = function(){
    var linarr = this.linarr;
    i = linarr[linarr.length-1];//gets id
    j = linarr[linarr.length-2];//gets id
    var out;	
    if (typeof i === "undefined" || typeof j === "undefined" || i == j){//cleans input
	console.log("Output function: error");
	out = "Error: 2 atoms not selected";
    }
    else {
	//output in standardized order
	if (i>j){
	    out = j + ", " + i;
	    out = "Final Ids: " + out;
	    console.log("Output function: ", out);
	    done = 1;
	    outputheaderchg();
	}
	else{
	    out = i + ", " + j;
	    out = "Final Ids: " + out;
	    ("Output function: ", out);
	    done = 1;
	    outputheaderchg();
	}
    }
    return out;
};

//outputs to inner div
function outputheaderchg(){
    document.getElementById('outputheader').innerHTML="Output:";
}