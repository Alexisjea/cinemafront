
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {

    const [film, setFilm] = useState([]);
     const navigate = useNavigate();
    const [editData, setEditData] = useState({
        nom: '',
        realisateur: '',
        annee: ''
    });
    const params = useParams();
   

 const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
       e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/films/${params.id.toString()}`, editData);
            const updatedFilms = film.map(film =>
                film._id === editData.id ? response.data : film
            );
            setFilm(updatedFilms);
            setTimeout(() => {
          navigate("/");
        }, 500);
        } catch (error) {
            console.error('Error updating film:', error);
        }
  };

    return(
        <>
        <h1>Editer Film</h1>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Titre du Film</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Entrez le titre du film" 
          name="nom" 
          value={film.nom}
          onChange={handleEditChange}
          
        />
      </Form.Group>

      <Form.Group controlId="formDirector">
        <Form.Label>Réalisateur</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Entrez le nom du réalisateur" 
          name="realisateur" 
          value={film.realisateur}
          onChange={handleEditChange}
        />
      </Form.Group>

      <Form.Group controlId="formYear">
        <Form.Label>Année</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Entrez l'année de sortie" 
          name="annee" 
          value={film.annee}
          onChange={handleEditChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Soumettre
      </Button>
    </Form>
        </>
    );
}