import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <header class = "title">
                <div class = "logo">
                    <img src = "/images/uis-logo.svg" alt = "logo de la UIS"/>
                </div>
                <div class = "title-content">
                    <h1>UISport</h1>
                    <p>¡Consulta nuestros espacios de gimnasio disponibles para tu próxima sesión!</p>
                    <Button
                        text="¡Reserva ahora!"
                        onClick={() => navigate('/login')}
                    />
                </div>
            </header>
            <main></main>
            <footer></footer>
        </div>
    );
}

export default Home; //default Home--> Este es el componente principal de este archivo Home
