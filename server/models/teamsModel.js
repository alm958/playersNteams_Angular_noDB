var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema(
    {
        name: {type:String}
        // players: [{type:mongoose.Schema.Types.ObjectId, ref: 'Player'}]
    },
    {
        timestamps: {createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Team', TeamSchema);
