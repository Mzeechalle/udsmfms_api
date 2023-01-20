//data object layer handler for statics methods of positions schema
var mongoose = require("mongoose");
var positionSchema = require("../../models/position");

positionSchema.statics = {

    //function to create a position
    create: function(data, cb){
        var position = new this(data);
        position.save(cb);
    },

    //function to get all positions
    get: function(query, cb){
        this.find(query, cb).sort({ pos_id: 1 });
    },

    //function to update a position
    update_position: function(query, updateDate, cb){
        this.findOneAndUpdate(query, { $set: updateDate }, { new: true }, cb)
    },

    //function to delete a position
    delete_position: function(query, cb){
        this.findOneAndDelete(query, cb);
    }

};

var positionModel = mongoose.model("Positions", positionSchema);

module.exports = positionModel;