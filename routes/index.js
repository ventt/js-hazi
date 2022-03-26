const getCarsMw = require('../Middlewares/carMiddlewares/getCarsMw');
const renderMw = require('../Middlewares/renderMw');
const getCarByIdMw = require('../Middlewares/carMiddlewares/getCarByIdMw');
const getPartsByCarIdMw = require('../Middlewares/partMiddlewares/getPartsByCarIdMw');
const getPartByIdMw = require('../Middlewares/partMiddlewares/getPartByIdMw');
const deleteCarByIdMw = require('../Middlewares/carMiddlewares/getCarByIdMw');
const saveCarMw = require('../Middlewares/carMiddlewares/saveCarMw');
const savePartMw = require('../Middlewares/partMiddlewares/savePartMw');
const deletePartById = require('../Middlewares/partMiddlewares/deletePartById');

module.exports = function (app) {
  const objRepo = {};

  app.use('/',
      getCarsMw(objRepo),
      renderMw(objRepo, 'index',{title:"Cars"}));

  app.get('/car-window:carId',
      getCarByIdMw(objRepo),
      getPartsByCarIdMw(objRepo),
      renderMw(objRepo, 'car-window', {title:"Car Window"}));

  app.use('/newCar',
      saveCarMw(objRepo),
      renderMw(objRepo, 'car-details-form', {title:"Car Window"}));

  app.use('/car-window/edit/:carId',
      getCarByIdMw(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'car-details-form', {title:"Car Window"}));

  app.use('/delete:carId',
      deleteCarByIdMw(objRepo),
      renderMw(objRepo, 'car-window', {title:"Car Window"})
      );


  app.use('/car-window:carId/newPart/',
      getCarByIdMw(objRepo),
      savePartMw(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'car-details-form', {title:"Car Window"}));

  app.use('/car-window:carId/editPart:partId/',
      getCarByIdMw(objRepo),
      getPartByIdMw(objRepo),
      savePartMw(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'part-window', {title:"Car Window"}));

  app.use('/car-window:carId/deletePart:partId/',
      getCarByIdMw(objRepo),
      deletePartById(objRepo),
      saveCarMw(objRepo),
      renderMw(objRepo, 'car-details-form', {title:"Car Window"}));


};