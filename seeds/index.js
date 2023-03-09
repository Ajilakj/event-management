const sequelize = require('../config/connection');
const seedEvent = require('./eventData');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEvent();
  
  process.exit(0);
};

seedAll();