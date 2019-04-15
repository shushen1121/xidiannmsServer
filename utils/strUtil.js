module.exports={
  // {key:val,key:val} -> key='val',key='val'
  jsObjToSQLProp_update:function(data){
    var keys=[],vals=[];
    data=JSON.stringify(data);
    data=data.replace(/'/g,"\\'");
    var arr=data.slice(2,-1).split(',"');
    for(var i=0;i<arr.length;i++){
      arr[i].replace(/[^"]+/,function(data){
        keys.push(data);
      })
      vals.push(arr[i].replace(/[^"]+":/,'').replace(/^"([^\n]+)"$/,"'$1'"))
    }
    for(var i=0;i<arr.length;i++){
      arr[i]=keys[i]+'='+vals[i];
    }
    data=arr.join(',');
    return data;
  },
  // {key:val,key:val} -> (key,key) values (val,val)
  jsObjToSQLProp_insert:function(data){
    var keys=[],vals=[];
    data=JSON.stringify(data);
    data=data.replace(/'/g,"\\'");
    var arr=data.slice(2,-1).split(',"');
    for(var i=0;i<arr.length;i++){
      arr[i].replace(/[^"]+/,function(data){
        keys.push(data);
      })
      vals.push(arr[i].replace(/[^"]+":/,'').replace(/^"([^\n]+)"$/,"'$1'"))
    }
    data=`(${keys.join(',')}) values (${vals.join(',')})`;
    return data;
  }
}