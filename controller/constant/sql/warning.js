const queryBasic = `SELECT a.*, 
  b.description AS create_way_description, 
  c.description AS warning_level_description, 
  d.description AS warning_type_description
  FROM warning a,create_way b,warning_level c, warning_type d
  WHERE a.create_way = b.create_way
  AND a.warning_level = c.warning_level
  AND a.warning_type = d.warning_type_id`;

const queryWarningAll =  `${queryBasic}`;

// 错误命令
// const queryWarningByWarningId = (id) => `${queryBasic} AND warning_id = ${id}`;

const queryWarningById = (id) => `SELECT * FROM warning WHERE warning_id = ${id}`;


module.exports = {
  queryWarningAll,
  queryWarningById
};
