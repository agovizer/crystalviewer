//mx

//displays help to div
CrystalViewer.prototype.help = function(){
    var helpstr = "Help:<br> If ui is slow, refresh and use a lower resolution <br> Press R if aspect ratio is off, or just to rerender the scene.";
    var container = $('#'+this.containerID);
    container.children('.output').html(helpstr);
}