
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var xhr = cc.loader.getXMLHttpRequest();

        xhr.open("GET", "bssoft.pro/rbu/testJ.php");
        xhr.setRequestHeader("Content-Type", "text/plain");

        xhr.onreadystatechange = function ()
        {
            if(xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207))
            {
                var httpStatus = xhr.statusText;
                cc.log(httpStatus);
            }
        }

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

