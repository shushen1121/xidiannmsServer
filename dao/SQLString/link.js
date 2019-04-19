const strUtil=require('../utils/strUtil');
const sql={
  getAll:()=>{
    return `select * from link`;
  },
  getById:(id)=>{
    return `select * from link where link_id in (${id.join(',')})`;
  },
  getByMachineId:(id)=>{
    return `select * from link where from_machine in (${id.join(',')}) or to_machine in (${id.join(',')})`;
  },
  add:(data)=>{
    return `insert into link ${strUtil.jsObjToSQLProp_insert(data)}`;
  },
  deleteAll:()=>{
    return `delete from link`;
  },
  deleteById:(id)=>{
    return `delete from link where link_id in (${id.join(',')})`;
  },
  deleteByMachine:(id)=>{
    return `delete from link where from_machine in (${id.join(',')}) or to_machine in (${id.join(',')})`;
  },
  change:(data)=>{
    return `update link set ${strUtil.jsObjToSQLProp_update(data)} where link_id=${data.link_id}`;
  }
}
module.exports=sql;