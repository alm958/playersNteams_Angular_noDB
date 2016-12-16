var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema(
    {
        name:{type:String}
        // team:{type: Schema.Types.ObjectId, ref: 'Team'}
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Player', PlayerSchema);
