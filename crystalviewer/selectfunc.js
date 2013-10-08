//mx

//display information pertaining to the model


//get atom information if shift key is pressed
CrystalViewer.prototype.selshift = function(x,y,z){
    this.shift = 0;
    var id = this.getid(x,y,z); //get id
    var coor1 = this.atoms[id][1];
    var type = this.atoms [id][0];
    coor1 = coor1.toString();
    console.log(this.first);
    var stringdiag;
    if (this.first == 1){
	stringdiag = "Selected \"" + type + "\"" + " (ID \"" + id + "\"" + ")" + " at" + " (" + coor1 + ")"; //concats info string 
    }
    else {
	stringdiag = "This: \"" + type + "\"" + " (ID \"" + id + "\"" + ")" + " at" + " (" + coor1 + ")";//concats info string 
    }
    console.log(this.first);
    var container = $('#'+this.containerID);
    container.children('.output').html(stringdiag); //write to div
    return;
};

//get atom information
CrystalViewer.prototype.sel = function(i, j){
    var atoms = this.atoms;
    coor1 = atoms[i][1];
    var coor2 = atoms[j][1]; 
    coor1 = coor1.toString();
    coor2 = coor2.toString();
    var br1=coor1.split(",");
    var br2=coor2.split(",");
    var type1 = atoms [i][0];
    var type2 = atoms [j][0];
    var stringdiag;
    if (i != j){
	stringdiag = "Selected \"" + type1 + "\"" + " (ID \"" + i + "\"" + ")" + " at" + " (" + coor1 + ") <br>" + "Selected \"" + type2 + "\"" + " (ID \"" + j + "\"" + ")" + " at" + " (" + coor2 + ") <br>"; //concats info string 
	console.log("good", stringdiag, "|", br1, "|", br2);
    }
    else {
	stringdiag = "Selected \"" + type1 + "\"" + " (ID \"" + i + "\"" + ")" + " at" + " (" + coor1 + ") " //concats info string if first selection
	console.log("bad", stringdiag, "|", br1, "|", br2);
    }
    var container = $('#'+this.containerID);
    container.children('.output').html(stringdiag); //write to div
    return;
};
