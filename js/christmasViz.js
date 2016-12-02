/**
 * Created by tonyg on 01/12/2016.
 */


//Init this app from base
function Christmas() {
    BaseApp.call(this);
}

Christmas.prototype = new BaseApp();

Tate.prototype.init = function(container) {
    BaseApp.prototype.init.call(this, container);
};

Tate.prototype.createScene = function() {
    BaseApp.prototype.createScene.call(this);
};

$(document).ready(function() {
    //See if we have WebGL support
    if(!Detector.webgl) {
        $('#notSupported').show();
    }

    //Initialise app
    var container = document.getElementById("WebGL-output");
    var app = new Christmas();
    app.init(container);
    app.createScene();

    //GUI callbacks
    app.run();
});