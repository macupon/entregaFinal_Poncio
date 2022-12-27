/* ####################################################
                    IMPORTACIONES
######################################################*/
import styles from "./NavBar.css";
import CardWidget from "../cardWidget/CardWidget.js";
import {FaStar} from "react-icons/fa";
// import portada from "../img/prin.jpg";



/* ####################################################
                    LOGICA
######################################################*/
const NavBar = (props) => {
  //Funcion constructora
  // retorno que se va a randerizar
  return (
    <header className="navbar row">
        {/* <img src={portada} width="1410px"/> */}
      <h1 className="apliques col-4">Apliques Marian <FaStar size={20}/> </h1> 
      <nav className="navbar navbar-expand-lg nav-custom-purple col-7">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active px-3" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  Presupuesto
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Personajes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Famosos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Nombres 
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CardWidget cantidad="10" />
    </header>
  );
};

/* ####################################################
                    EXPORTACIONES
######################################################*/
export default NavBar;