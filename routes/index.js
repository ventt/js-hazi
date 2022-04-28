const getCarsMw = require('../Middlewares/carMiddlewares/getCarsMw');
const renderMw = require('../Middlewares/renderMw');
const getCarByIdMw = require('../Middlewares/carMiddlewares/getCarByIdMw');
const getPartsByCarIdMw = require('../Middlewares/partMiddlewares/getPartsByCarIdMw');
const getPartByIdMw = require('../Middlewares/partMiddlewares/getPartByIdMw');
const deleteCarByIdMw = require('../Middlewares/carMiddlewares/getCarByIdMw');
const saveCarMw = require('../Middlewares/carMiddlewares/saveCarMw');
const savePartMw = require('../Middlewares/partMiddlewares/savePartMw');
const deletePartById = require('../Middlewares/partMiddlewares/deletePartById');
const authMw = require('../Middlewares/authMiddlewares/authMw');
const checkPassMw = require('../Middlewares/authMiddlewares/checkPassMw');
const logoutMw = require('../Middlewares/authMiddlewares/logoutMw');
const CarModel = require('../models/car');
const PartModel = require('../models/part');
module.exports = function (app) {
  const objRepo = {
    CarModel: CarModel,
    PartModel: PartModel
  };
  app.get('/car-window:carId',
      authMw(objRepo),
      getCarByIdMw(objRepo),
      getPartsByCarIdMw(objRepo),
      renderMw(objRepo, 'car-window', {title:"Car Window"}));

  app.use('/newCar',
      authMw(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'car-details-form', {title:"Car Window"}));

  app.use('/car-window/edit/:carId',
      authMw(objRepo),
      getCarByIdMw(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'car-details-form', {title:"Car Window"}));

  app.use('/delete:carId',
      authMw(objRepo),
      deleteCarByIdMw(objRepo),
      renderMw(objRepo, 'car-window', {title:"Car Window"})
      );


  app.use('/car-window:carId/newPart/',
      authMw(objRepo),
      getCarByIdMw(objRepo),
      savePartMw(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'car-details-form', {title:"Car Window"}));

  app.use('/car-window:carId/editPart:partId/',
      authMw(objRepo),
      getCarByIdMw(objRepo),
      getPartByIdMw(objRepo),
      savePartMw(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'part-window', {title:"Car Window"}));

  app.use('/car-window:carId/deletePart:partId/',
      authMw(objRepo),
      getCarByIdMw(objRepo),
      deletePartById(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'car-details-form', {title:"Car Window"}));
  app.use('/logout',
      authMw(objRepo),
      logoutMw(objRepo));

  app.use('/index',
      authMw(objRepo),
      getCarsMw(objRepo),
      renderMw(objRepo, 'index',{title:"Cars and parts"}));
  app.use('/',
      checkPassMw(objRepo),
      renderMw(objRepo, 'login', {title:"Cars and parts login"}));
};