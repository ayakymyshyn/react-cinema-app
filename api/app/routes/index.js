const cinemaRoutes = require('./cinema_routes');

module.exports = function(app, db){
    cinemaRoutes(app, db);
}

