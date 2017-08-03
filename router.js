const express = require('express');
const controllers = require('./controllers/controllers.js');

module.exports = function(app){
  const robotRouter = express.Router();
  const profileRouter = express.Router();

  robotRouter.get('/', controllers.home);
  robotRouter.get('/lookingForWork', controllers.lookingForWork);
  robotRouter.get('/employed', controllers.employed);
  app.use('/robots', robotRouter);

  profileRouter.get('/:id', controllers.robotProfile);
  app.use('/progile', profileRouter);
};


//http://jilles.me/express-routing-advanced-techniques/
