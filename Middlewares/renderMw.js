/**
 * Renders the view which given by the viewName
 */

//const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName, paramList) {
    return function (req, res) {
        res.render(viewName, paramList);
        console.log('render: ' + viewName);
        res.end('Template: ' + viewName);
    };
};