module.exports={
  // {key:val,key:val} -> key='val',key='val'
  jsObjToSQLProp_update:function(data){
    data=JSON.stringify(data);
    data=data.replace(/{?"([^":,{}]+)":"?([^":,{}]+)"?}?/g,"$1='$2'");
    return data;
  },
  // {key:val,key:val} -> (key,key) values (val,val)
  jsObjToSQLProp_insert:function(data){
    data=JSON.stringify(data);
    var arrKey=[],arrVal=[];
    data.replace(/{?"([^":,{}]+)":"?([^":,{}]+)"?}?/g,function(data){
      arrKey.push(data.replace(/{?"([^":,{}]+)":"?([^":,{}]+)"?}?/,"$1"));
      arrVal.push(data.replace(/{?"([^":,{}]+)":([^:,{}]+)}?/,"$2").replace(/"/g,`'`));
    })
    data=`(${arrKey.join(',')}) values (${arrVal.join(',')})`;
    return data;
  }
}