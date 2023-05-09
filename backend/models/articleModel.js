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
        
    image:{
        data: Buffer,
        contentType: String
    }



});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");