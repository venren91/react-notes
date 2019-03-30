const noteRoutes = require('./notes-routes')
module.exports = function(app,db){
    noteRoutes(app,db);
}