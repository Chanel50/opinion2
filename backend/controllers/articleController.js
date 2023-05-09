const Crud = require("../models/articleModel");

// Display All CRUD Data
const crud_index = (req, res) => {
    Crud.find()
      .then(cruds => {
        res.json(cruds);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };

// Create New CRUD
const crud_create_post = (req, res) => {
  let crud = new Crud(req.body);
  crud
    .save()
    .then((crud) => {
      res.send(crud);
    })
    .catch(function (err) {
      res.status(422).send("Crud add failed");
    });
};

// Show a particular CRUD Detail by Id
const crud_details = (req, res) => {
  Crud.findById(req.params.id, function (err, crud) {
    if (!crud) {
      res.status(404).send("No result found");
    } else {
      res.json(crud);
    }
  });
};

// Update CRUD Detail by Id
const crud_update = (req, res) => {
  Crud.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json("Crud updated");
    })
    .catch(function (err) {
      res.status(422).send("Crud update failed.");
    });
};

// Delete CRUD Detail by Id
const crud_delete = (req, res) => {
    Crud.findById(req.params.id)
      .then((crud) => {
        if (!crud) {
          res.status(404).send("Crud not found");
        } else {
          Crud.findByIdAndRemove(req.params.id)
            .then(() => {
              res.status(200).json("Crud deleted");
            })
            .catch((err) => {
              res.status(400).send("Crud delete failed.");
            });
        }
      })
      .catch((err) => {
        res.status(500).send("Server error.");
      });
  };
  

const crud_search = async (req, res) => {
    const { titre, contenu } = req.query;
    const searchCriteria = {};
    if (titre) {
      searchCriteria.titre = titre;
    }
    if (contenu) {
      searchCriteria.contenu = contenu;
    }
    try {
      const cruds = await Crud.find(searchCriteria);
      res.send(cruds);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error searching for data");
    }
  };
  
  



module.exports = {
  crud_index,
  crud_details,
  crud_create_post,
  crud_update,
  crud_delete,
  crud_search
};