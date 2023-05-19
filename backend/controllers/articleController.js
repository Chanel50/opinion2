const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

const Crud = require("../models/articleModel");

const getCrud = (req, res) => {
  res.json(res.pagination);
};

const addCrud = (req, res, next) => {
  const id = uuidv4()
  const titre = req.body.titre;
  const contenu = req.body.contenu;
  const image = req.file.path;
  const data = { id,titre, contenu, image }; // Remove `id` from the data object
  console.log(data);

  const errors = validationResult(req);
  if( !errors.isEmpty() ) {
      res.status(404).send({ error: 'true', msg: errors.errors[0]});
      res.end();
  }else {
    const newCrud = new Crud(data);
    newCrud
      .save()
      .then(() => res.status(200).json("Crud's Data Added Successfully"))
      .catch((err) => res.status(400).json("Error: " + err));
  }
};

const deleteCrud = (req, res) => {
  const CrudId = req.params.id;

  Crud.findByIdAndDelete(CrudId)
    .then(() => res.json("Crud's Data Deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const editCrud = (request, response) => {
  const id = request.body._id;
  const titre = request.body.titre;
  const contenu = request.body.contenu;
  const image = request.file.path;
  const updatedData = { titre, contenu, image };

  Crud.updateOne({_id: id}, updatedData )
  .then((update) => {
      if(update) {
          return response.status(200).json("Updated Successfully");
      } else {
          return response.status(404).json("Error while Updating")
      }
  })
  .catch((err) => response.status(404).json("Error:" + err)); 

}


const db = mongoose.connection;
db.once("open", async () => {
  if ((await Crud.countDocuments().exec()) > 0) {
    return;
  }
  Crud.insertMany([]) // Pass an empty array instead of `Crud`
    .then(() => console.log("Crud added Successfully"))
    .catch((err) => console.log("Error: " + err));
});

const crud_search = async (req, res) => {
  const { titre, contenu } = req.query;
  const searchCriteria = {};

  if (titre) {
    searchCriteria.titre = titre;
  }
  if (contenu) {
    searchCriteria.contenu = { $regex: new RegExp(contenu, 'i') };
  }

  try {
    const cruds = await Crud.find(searchCriteria);
    res.send(cruds);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error searching for data");
  }
};

module.exports = { getCrud, addCrud, deleteCrud, editCrud, crud_search };
