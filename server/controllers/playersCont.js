var mongoose = require('mongoose');
var Player = mongoose.model('Player');


module.exports = {
    create: function(req, res){
        Player.create(req.body)
            .then(function(player){
                console.log(player);
                res.json(player);
            })
            .catch(function(err){
                console.log(err);
                res.jason(err);
            });
    },
    index: function(req, res){
        Player.find({})
            .then(function(players){
                res.json(players);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    delete: function(req, res){
        console.log(req.params);
        Player.remove({_id:req.params.id})
            .then(function(){
                res.json(true);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    update: function(req, res){
        Player.update({_id:req.param.id}, req.body)
            .then(function(updatedPlayer){
                res.json(updatedPlayer);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }

}
