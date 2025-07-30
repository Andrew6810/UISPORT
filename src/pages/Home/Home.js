import Button from "../../components/Button";
import LugaresInfo from "../../components/LugaresInfo";
import { useNavigate } from "react-router-dom";
import "./Home.css";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="title">

        <div className="logo">
          <img src="/images/uis-logo.svg" alt="logo de la UIS" />
        </div>
        <div className="title-uis">
          <h1>
            <span className="UIS-verde">UIS</span>port
          </h1>
          <p>
            ¡Consulta nuestros espacios de gimnasio disponibles para tu próxima
            sesión!
          </p>
        </div>

      </header>

      <main className="main-content">

        <Button className="btn btn-reserve"text="¡Reserva ahora!" onClick={() => navigate("/login")} />
        <h3 className="main-title">Más lugares donde puedes Entrenar en la UIS</h3>

        <LugaresInfo />
        
      </main>

      <footer className="footer-content">

        <h1>UISport</h1>
        <p>¡Tú web te reserva espacios en el Gimnasio-uis este 2025!</p>
      </footer>
    </div>
  );
}

export default Home; //default Home--> Este es el componente principal de este archivo Home
