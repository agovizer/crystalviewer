//mx
//displays selected atoms on the console
function getoutput(){
	i = linarr[linarr.length-1];
	j = linarr[linarr.length-2];
	var out;	
	if (typeof i === "undefined" || typeof j === "undefined" || i == j){
		console.log("Output function: error");
		out = "Error: 2 atoms not selected";
	}
	else {
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
}

function outputheaderchg(){
		document.getElementById('outputheader').innerHTML="Output:";
}