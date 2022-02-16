const DBMigrate = require('db-migrate');

const applyMigration = () => {
  return new Promise((resolve, reject) => {
    const dbMigrate = DBMigrate.getInstance(true);
    dbMigrate.silence(true);
    dbMigrate.up((error, result = []) => {
      if (error) {
        reject();
      }
      resolve(result.length);
    });
  });
};

module.exports = applyMigration;
