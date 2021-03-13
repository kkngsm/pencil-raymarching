function addGUI(){
    // GUIパラメータ
    let guiCtrl = function(){
        //this.resolution = 1;
        this.light_power = 1.;
        this.light_col_rgb = {r:0, g:0, b:0};
    };

    gui = new dat.GUI();
    guiObj = new guiCtrl();
    //gui.add( guiObj, 'resolution', {'x0.5': 0.5, 'x1': 1}).onChange(onWindowResize());
    gui.add(guiObj, 'light_power', 0, 9.99999);
    gui.open();
    
    function onWindowResize() {
        width = window.innerWidth;
        height = window.innerHeight;
    
        canvas.width = width * this.resolution;
        canvas.height = height * this.resolution;
    
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
    }
    return guiObj;
}