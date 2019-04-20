const strUtil=require('../../utils/strUtil');
const sql={
  getAll:()=>{
    return `SELECT a.*, 
    b.description AS create_way_description, 
    c.description AS warning_level_description, 
    d.description AS warning_type_description
    FROM warning a,create_way b,warning_level c, warning_type d
    WHERE a.create_way = b.create_way
    AND a.warning_level = c.warning_level
    AND a.warning_type = d.warning_type_id `;
  },
  getByIds:(ids)=>{
    return sql.getAll() + `and warning_id in (${ids.join(',')})`;
  },
  insert:(data)=>{
    return `insert into warning ${strUtil.jsObjToSQLProp_insert(data)}`;
  },
  deleteAll:()=>{
    return `delete from warning `;
  },
  deleteByIds:(ids)=>{
    return sql.deleteAll() + `where warning_id in (${ids.join(',')})`;
  },
  deleteByAimIds:(aim,aimIds)=>{
    return `delete from warning where warning_aim_id in (${aimIds.join(',')}) and warning_aim='${aim}'`;
  }
}
module.exports=sql;