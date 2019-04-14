module.exports={
  queryTableName:function(data){
    if(data[0].link_id){
      return 'link';
    }else if(data[0].machine_id){
      return 'machine';
    }
  },
  whetherTopologyChange:function(data){
    if(data.from_machine||data.to_machine){
      return true;
    }else{
      return false;
    }
  }
}