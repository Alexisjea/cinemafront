import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
export default function FilmList() {
    const [filmsList, setFilmList] = useState([]);
    const navigate = useNavigate();
     const params = useParams();
    const editFilm= (id) => {
    navigate(`/update/${id}`);
  };

    const deleteFilm = (_id) => {
    axios
      .delete(`http://localhost:5000/films/${_id}`)
      .then((response) => {
        
       
        console.log("Film supprimé avec succès."); 
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du film :", error);
       
      });
  };

    useEffect(() => {
        
        axios.get("http://localhost:5000/films").then((response) => {
          
        setFilmList(response.data);
            
        });
        

    },[])
    return(
        <>
        <h1>FilmList</h1>
        
             <Table striped bordered hover>
      <thead>
        <tr>
            <th>Film Id</th>
          <th>Film Name</th>
          <th>Film Annee</th>
          <th>Réalisateur</th>
          <th>Actions</th>
        </tr>
      </thead>{filmsList.map((film) => (
      <tbody>
        <tr>
            <td>{film._id}</td>
          <td>{film.nom}</td>
          <td>{film.annee}</td>
          <td>{film.realisateur}</td>
          <td>  
            <Button variant="warning"  onClick={() => editFilm(film._id)}>Editer</Button>
            <Button variant="danger" onClick={() => deleteFilm(film._id)}>Suprimmer</Button>
          </td>
        </tr>
       
       
      </tbody> ))}
    </Table>
           


       
           

        
        </>
    );
}