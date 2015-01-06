(function(){
    /**
     * 获取元素
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    function $(str){
        return document.querySelector(str);
    }

    function getLen(node){
        return Math.max(parseInt(node.value) || 14, 4);
    }

    var result = $('.result');
    var app = $('#app');
    var length = $('#length');
    var num = $('.num');
    var hmac = $('#hmac');
    /**
     * 生成器
     * @return {[type]} [description]
     */
    function generate(){
        var Hash = Hashes['SHA512'];

        var crpty = new Hash;

        var st = app.value;
        var size = getLen(length);
        var key = hmac.value;

        var pwd = crpty.b64_hmac(key, st);

        console.log(pwd);

        result.innerHTML = pwd.replace(/\W/g, '').substring(0, size).toLowerCase();

    }

    function range(){
        var size = getLen(length);
        num.innerHTML = size;
        generate();
    }

    length.oninput = range;
    [app, hmac].forEach(function(item){
        item.onkeyup = generate;
    });
})();