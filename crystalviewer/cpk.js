//mx
//this file gets the cpk colors from input

//queries cpkdictionary and returns result
function cpkquery(x){
	console.log("cpqueryfunctionorig: ", x);
	var y = "0x" + cpk[x];
	console.log("cpqueryfunctionnew: ", y);
	return(y);
}
//cpk dictionary
var cpk = { //cpk colors in their html color codes
"H":"FFFFFF",
"He":"FF1493",
"Li":"FF1493",
"Be":"FF1493",
"B":"FF1493",
"C":"C8C8C8",
"N":"8F8FFF",
"O":"F00000",
"F":"FF1493",
"Ne":"FF1493",
"Na":"0000FF",
"Mg":"228B22",
"Al":"FF1493",
"Si":"FF1493",
"P":"FFA500",
"S":"FFC832",
"Cl":"00FF00",
"Ar":"FF1493",
"K":"FF1493",
"Ca":"808090",
"Sc":"FF1493",
"Ti":"FF1493",
"V":"FF1493",
}
