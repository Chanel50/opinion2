import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ArticlesC.css';

const ArticlesC = () => {
  const [crudData, setCrudData] = useState({ titre: '', contenu: '', image: null });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titre', crudData.titre);
    formData.append('contenu', crudData.contenu);
    formData.append('image', crudData.image);

    // Make the POST request using axios
    axios.post('http://localhost:8000/api/cruds', formData)
      .then(response => {
        // Handle the successful response if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error response
        if (error.response) {
          const { status, data } = error.response;
          if (status === 422 && data && data.message) {
            setErrorMessage(data.message);
          } else {
            setErrorMessage('An error occurred. Please try again later.');
          }
        } else {
          setErrorMessage('Network error. Please check your internet connection.');
        }
      });
  };

  const handleChange = (e) => {
    setCrudData({ ...crudData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCrudData({ ...crudData, image: e.target.files[0] });
  };

  return (
    <div className="col-md-6 offset-md-3 mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Titre</label>
          <input
            type="text"
            name="titre"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter the title"
            required
            value={crudData.titre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Contenu</label>
          <input
            type="text"
            name="contenu"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your opinion"
            required
            value={crudData.contenu}
            onChange={handleChange}
          />
        </div>
        <hr />
        <div className="form-group mt-3">
          <label className="mr-2">Upload your image:</label>
          <input type="file" name="image" onChange={handleFileChange} />
        </div>
        <hr />
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default ArticlesC;








