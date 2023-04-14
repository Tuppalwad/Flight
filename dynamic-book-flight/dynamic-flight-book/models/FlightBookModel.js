const { default: mongoose, model } = require("mongoose");




  const FlightSchema = new mongoose.Schema({    
    to: {
      type:String,
      required:true,
    },
    from: {
      type:String,
      required:true,
    },
    
    passanger_class:{
      type:String,
      required:true,
    }
})


module.exports = model('Train', TrainSchema)