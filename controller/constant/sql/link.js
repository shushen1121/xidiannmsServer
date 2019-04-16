const queryBasic = `SELECT a.*, 
    b.name AS from_machine_name, 
    (SELECT c.name FROM machine c WHERE a.to_machine = c.machine_id) AS to_machine_name 
    FROM link a, machine b 
    WHERE a.from_machine = b.machine_id`;

const queryLinkAll =  `${queryBasic} AND a.mark_delete = 0`;

const queryLinkByLinkId = (id) => `${queryBasic} AND link_id = ${id}`;

module.exports = {
  queryLinkAll,
  queryLinkByLinkId
};
