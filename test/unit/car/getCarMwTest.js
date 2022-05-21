const except = require('chai').expect;
const getCarByIdMw = require('../../../Middlewares/carMiddlewares/getCarByIdMw');

describe('getCarByIdMw middleware', function () {
    it('should set res.locals.car with a car object', function (done) {
        const mw = getCarByIdMw({
            CarModel:{
                findOne:(stuff, cb)=>{
                    except(stuff).to.be.eql({_id: '1' });
                    cb(null, 'mockCar');
                }
            }
        });
        const resMock={
            locals: {}
        };

        mw({
            params:{carId: '1'}
        },resMock,(err)=>{
            except(err).to.be.eql(undefined);
            except(resMock.locals).to.be.eql( {car: 'mockCar'});
            done();
        });
    });
    it('should call next with error when db problem occur', function (done) {
        const mw = getCarByIdMw({
            CarModel:{
                findOne:(stuff, cb)=>{
                    except(stuff).to.be.eql({_id: '1' });
                    cb('mockDbError', 'mockCar');
                }
            }
        });
        const resMock={
            locals: {}
        };

        mw({
            params:{carId: '1'}
        },resMock,(err)=>{
            except(err).to.be.eql('mockDbError');
            done();
        });
    });
    it('should call next when no car', function (done) {
        const mw = getCarByIdMw({
            CarModel:{
                findOne:(stuff, cb)=>{
                    except(stuff).to.be.eql({_id: '1' });
                    cb(undefined, null);
                }
            }
        });
        const resMock={
            locals: {}
        };

        mw({
            params:{carId: '1'}
        },resMock,(err)=>{
            except(err).to.be.eql(undefined);
            except(resMock.locals).to.be.eql({});
            done();
        });
    });
});