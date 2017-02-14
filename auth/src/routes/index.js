const testRoutes = require('./test');

const routes = function(app) {
  app.use('/test', testRoutes)
  /*
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  */
}

module.exports = routes