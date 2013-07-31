//mx
function selshift(x,y,z){
		shift = 0;
		var id = getid(x,y,z);
		var coor1 = atoms[id][1];
		var type = atoms [id][0];
		coor1 = coor1.toString();
		console.log(first);
		if (first == 1){
		stringdiag = "Selected \"" + type + "\"" + " (ID \"" + id + "\"" + ")" + " at" + " (" + coor1 + ")";
		first = 0;
		}
		else {
		stringdiag = "This: \"" + type + "\"" + " (ID \"" + id + "\"" + ")" + " at" + " (" + coor1 + ")";
		}
		console.log(first);
		document.getElementById('output').innerHTML=stringdiag;
		return;
}

function sel(i, j){
	coor1 = atoms[i][1];
	var coor2 = atoms[j][1];
	coor1 = coor1.toString();
	coor2 = coor2.toString();
	var br1=coor1.split(",");
	var br2=coor2.split(",");
	var type1 = atoms [i][0];
	var type2 = atoms [j][0];
	if (i != j){
	stringdiag = "Selected \"" + type1 + "\"" + " (ID \"" + i + "\"" + ")" + " at" + " (" + coor1 + ") <br>" + "Selected \"" + type2 + "\"" + " (ID \"" + j + "\"" + ")" + " at" + " (" + coor2 + ") <br>";
	}
	else {
	stringdiag = "Selected \"" + type1 + "\"" + " (ID \"" + i + "\"" + ")" + " at" + " (" + coor1 + ") "
	}
	document.getElementById('output').innerHTML=stringdiag;
	return;
	}