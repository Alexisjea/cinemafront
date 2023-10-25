import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {

     const [film, setFilm] = useState({
    nom: '',
    realisateur: '',
    annee: ''
  });
    const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilm({
      ...film,
      [name]: value
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/addFilm', film);
      console.log('Film added:', response.data);
    } catch (error) {
      console.error('Error adding film:', error);
    }
  };




    return(
        <>
        <h1>Ajouter Film</h1>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Titre du Film</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Entrez le titre du film" 
          name="nom" 
          value={film.nom}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDirector">
        <Form.Label>Réalisateur</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Entrez le nom du réalisateur" 
          name="realisateur" 
          value={film.realisateur}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formYear">
        <Form.Label>Année</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Entrez l'année de sortie" 
          name="annee" 
          value={film.annee}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Soumettre
      </Button>
    </Form>
        </>
    );
}