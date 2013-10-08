//mx

//finals selection and disables selection. Outputs data to backend
CrystalViewer.prototype.getoutput = function(){
    var linarr = this.linarr;
    i = linarr[linarr.length-1];//gets id //i is most recent
    j = linarr[linarr.length-2];//gets id
    var output;	
    if (typeof i === "undefined" || typeof j === "undefined" || i == j){//cleans input
	console.log("Output function: error");
	output = "Error: 2 atoms not selected";
    }
    else {
	//output in standardized order
	if (i>j){
	    output = j + ", " + i;
	    output = "Final Ids: " + output;
	    console.log("Output function: ", output);
	    done = 1;
	}
	else{
	    output = i + ", " + j;
	    output = "Final Ids: " + output;
	    ("Output function: ", output);
	    done = 1;
	}
    }
    return output;
};

