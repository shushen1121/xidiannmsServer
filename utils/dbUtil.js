module.exports={
  queryTableName:function(data){
    if(data[0].link_id){
      return '链路';
    }else if(data[0].machine_id){
      return '设备';
    }
  }
}