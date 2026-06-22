import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center mt-5 mb-5">
      <h1>🍕 ¡Oops! 404 🍕</h1>
      <h2>Página no encontrada</h2>
      <p>Parece que la pizza que buscas se quemó en el horno o no existe.</p>
      <Link to="/" className="btn btn-dark mt-3">Volver al Inicio</Link>
    </div>
  );
}

export default NotFound;