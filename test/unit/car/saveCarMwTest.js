const expect = require('chai').expect;
const saveCarMw = require('../../../Middlewares/carMiddlewares/saveCarMw');

describe('saveCar middleware', function () {
    it('should ', function (done) {
        const mw = saveCarMw({});
        mw(
            {
                body: {
                    manufacturer: 'Porsche',
                    type: 'Cayman',
                    date: '2002',
                    mileage: '74420',
                    fuelType: 'Petrol'
                },
                params: {
                    carId: '1'
                }
            },
            {
                car:{
                    save: (cb) => {
                        cb(null);
                    }
                },
                redirect: (where) => {
                    expect(where).to.be.eql('/index');
                    done();
                }
            }, err => {

            }
        );
    });
});