const errLog=require('../log/errLog');

module.exports=getter;
// req = { type:'get', id:Array, attr:String|Array }
function getter(req,wsInfo){
    var cmd,form;
    // 表内所有信息
    if(typeof req.attr==='string'){
        // 表名有效
        if(handle.testForm(req.attr)){
            form=req.attr;
            cmd='select * from '+req.attr;
        }
        // 表名无效
        else{
            // 无效属性类型
            global.WSEmitter.emit('send',errLog(201),wsInfo);
            return;
        }
    }
    // 表内部分信息
    else if(req.attr instanceof Array){
        [form,attrs]=handle.findForm(req.attr);
        // 属性同表且有效
        if(!!form){
            cmd='select `id`,`'+attrs.join('`,`')+'` from '+form;
        }
        // 属性不同表或存在无效
        else{
            // 无效属性类型
            global.WSEmitter.emit('send',errLog(201),wsInfo);
            return;
        }
    }
    // 所有id
    if(!req.id||req.id.length==0){
        cmd+=';';
    }
    // 指定id
    else{
        cmd+=' where id in ('+req.id.join(',')+');'
    }

    global.DBEmitter.emit('request',cmd,form,wsInfo);
}

var handle={
    // 检测表名是否有效
    testForm:function(attr){
        switch(attr){
            case 'os0':
            case 'topo':
            case 'info':
            return true;
            default:
            return false;
        }
    },
    // 检测属性是否同表且有效
    findForm:function(attr){
        var attrs=[],form;
        switch(attr[0]){
            case 'endianness':
            case 'hostname':
            case 'type':
            case 'platform':
            case 'arch':
            case 'release':
            case 'totalmem':
            case 'ip':
            form='os0';
            break;
            default:
            return [undefined,undefined];
        }
        for(var i=0;i<attr.length;i++){
            switch(attr[i]){
                case 'endianness':
                case 'hostname':
                case 'type':
                case 'platform':
                case 'arch':
                case 'release':
                case 'totalmem':
                case 'ip':
                if(form=='os0'){
                    attrs.push(attr[i]);
                }else{
                    return [undefined,undefined];
                }
                break;
                default:
                return [undefined,undefined];
            }
        }
        return [form,attrs];
    }
}