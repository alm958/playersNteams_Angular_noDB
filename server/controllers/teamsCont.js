var mongoose = require('mongoose');
var Team = mongoose.model('Team');

module.exports = {
    create: function(req, res){
        Team.create(req.body)
            .then(function(team){
                console.log(team);
                res.json(team);
            })
            .catch(function(err){
                console.log(err);
                res.jason(err);
            });
    },
    index: function(req, res){
        Team.find({})
            .then(function(teams){
                res.json(teams);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    delete: function(req, res){
        console.log(req.params);
        Team.remove({_id:req.params.id})
            .then(function(){
                res.json(true);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }


}
