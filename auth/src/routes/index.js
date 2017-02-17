const publicRoutes = require('./public');
const secureRoutes = require('./secure');

const routes = function(app) {
  app.use('/', publicRoutes);
  app.use('/auth', secureRoutes);
}

module.exports = routes