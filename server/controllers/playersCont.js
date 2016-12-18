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
        console.log("in update");
        console.log(req.params.id);
        console.log(req.body);
        Player.findByIdAndUpdate(req.params.id, req.body, { new: true})
            .then(function(updatedPlayer){
                res.json(updatedPlayer);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    indexUnsigned: function(req, res){
        Player.find({team: {$exists: false}})
            .then(function(unsignedPlayers){
                res.json(unsignedPlayers);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    indexSigned: function(req, res){
        Player.find({team: {$exists: true}}).populate('team')
            .then(function(unsignedPlayers){
                res.json(unsignedPlayers);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    cut: function(req, res){
        console.log("now in cut");
        console.log(req.params.pId);
        Player.findByIdAndUpdate(req.params.id, { $unset: { team: 1 }}, { new: true})
            .then(function(updatedPlayer){
                console.log(updatedPlayer);
                res.json(updatedPlayer);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    addTeam: function(req, res){
        console.log("in my addTeam");
        console.log(req.params.pId);
        console.log(req.params.tId);
        Player.findByIdAndUpdate(req.params.pId, { $set: { team: req.params.tId }}, { new: true})
            .then(function(updatedPlayer){
                console.log(updatedPlayer);
                res.json(updatedPlayer);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }
}
