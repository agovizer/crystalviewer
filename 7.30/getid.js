//mx
var errororig = new Array();
function getid(x, y, z){
				var error = new Array();
					for ( var i = 0; i < atoms.length; i ++ ) {
					var coor = atoms[i][1];
					coors=coor.toString();
					var br=coors.split(",");
					var xd = Math.abs(br[0] - x);
					var yd = Math.abs(br[1] - y);
					var zd = Math.abs(br[2] - z);
					var total = xd + yd + zd;
					error[i] = total;
					console.log("getidfunction: x,y,z , total ", x,y,z, total);
					}
					errororig = error.slice(0);
					error.sort(numasc);
					goal=error[0];
					index=look(goal);
					console.log("getidfunction: coors, index ", coors, index);
					return index;
				}
				
//aux functions			
function numasc(a,b){
					return (a - b);
}
function look(g){
// doesnt work: var num = errororig.indexOf(g);
for(ii=0; ii<errororig.length; ii++){
if(errororig[ii] == g){
return ii;
}
}
}