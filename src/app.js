

var textFieldLogin = null;

var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;


        //////////////////////////////
        // gui


        textFieldLogin = new ccui.TextField();
        textFieldLogin.setTouchEnabled(true);
        textFieldLogin.fontName = "Times New Roman";
        textFieldLogin.string = "Логин";
        textFieldLogin.fontSize = 24;
        textFieldLogin.x = size.width/2;
        textFieldLogin.y = size.height/2;

        this.addChild(textFieldLogin);

        


        //////////////////////////////
        // online

        var xhr = cc.loader.getXMLHttpRequest();

        xhr.open("GET", "bssoft.pro/rbu/testJ.php");
        xhr.setRequestHeader("Content-Type", "x-www-form-urlencoded");


        xhr.send();

        xhr.onreadystatechange = function ()
        {
            if(xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207))
            {
                var httpStatus = xhr.statusText;
                cc.log(httpStatus);

                var jData = JSON.parse(xhr.responseText);

                cc.log(jData["key1"]);
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

