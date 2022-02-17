const dao = (fastify) => {
  const getAll = () => {
    return fastify.db.query('select * from test');
  };

  const save = (title) => {
    return fastify.db.one('INSERT INTO test(title) VALUES($1) RETURNING id', [
      title,
    ]);
  };

  return {
    getAll,
    save,
  };
};

module.exports = dao;
