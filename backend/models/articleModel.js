const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	titre:{
        type: String, 
        required: true
    },
    contenu:{ 
        type: String, 
        required: true 
    },
        
    image: {
        type: String,
        required: true
      },
      



});

module.exports = mongoose.model("Crud", crudSchema);