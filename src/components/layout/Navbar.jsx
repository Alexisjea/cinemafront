
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
export default function NavBar()  {
    return(
      
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <h1>Home</h1>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Créer Film
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/filmList">
               List Film
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
    
   </div>
    );

}