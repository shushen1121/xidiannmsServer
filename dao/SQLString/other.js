const strUtil=require('../../utils/strUtil');
const sql={
  getPassword_and_Authority:(account)=>{
    return `select password,authority from account where account='${account}'`;
  },
  getTable:(tableName)=>{
    return `select * from ${tableName.join(';select * from ')}`;
  }
}
module.exports=sql;