var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){

    app.get('/list/:listURL', function (req, res) {
        const url_pretty = req.params.listURL;
        db.collection('lists').findOne({up: url_pretty}, (err, item) => {
           if(err){
               res.send({ 'error': 'An error has occured'});
           }else{
               res.send(item);
           }
        }); 
    }); 

}