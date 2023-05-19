const express = require("express");
// const { body } = require("express-validator");
const multer = require('multer');
const path = require("path");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');


const {getCrud, addCrud, deleteCrud, editCrud,crud_search } = require("../controllers/articleController");
const paginatedResults = require('../pagination/paginatedResults')
const Crud = require("../models/articleModel");

const router = express.Router();

//image upload func

var uniqueId = uuidv4()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../frontend/public/uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, uniqueId  + file.originalname);
    },
});
  
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

//fetch all Crud with paginatedResults
router.get('/', paginatedResults(Crud), getCrud)

//post new Crud data
router.post('/add', upload.single("image") ,addCrud);
// Search for Cruds
router.get("/search", crud_search);
//deletes a particular Crud's data
router.delete('/:id', deleteCrud);

//updates a particular Crud's data
router.put('/edit', upload.single("image") , editCrud);

module.exports = router;
