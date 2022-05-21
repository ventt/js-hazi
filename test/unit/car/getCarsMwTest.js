const except = require('chai').expect;
const getCarsMw = require('../../../Middlewares/carMiddlewares/getCarsMw');
describe('getCars middleware', function () {
    it('should set res.locals with list of car objects', function (done) {
        var reqMock = {};
        var resMock = {
            locals: {}
        };
       var fakeCarModel ={
           find: function (stuff, cb) {
               cb(undefined, ['Car1', 'Car2'])
           }
       };
       var  objRep = {
          CarModel: fakeCarModel
       };
       var mw = getCarsMw(objRep);
       mw(reqMock, resMock, function (err){
           except(resMock.locals.cars).to.eqls(['Car1', 'Car2']);
           except(err).to.be.equal(undefined);
           done();
       });
    });
    it('should call next error when db problem occur', function (done) {
        var reqMock = {};
        var resMock = {
            locals: {}
        };
        var fakeCarModel ={
            find: function (stuff, cb) {
                cb('mockDbError', ['Car1', 'Car2'])
            }
        };
        var  objRep = {
            CarModel: fakeCarModel
        };
        var mw = getCarsMw(objRep);
        mw(reqMock, resMock, function (err){
            except(err).to.be.eql('mockDbError');
            done();
        });
    });
});