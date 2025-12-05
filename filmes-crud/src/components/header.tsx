import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <h1>🎬 Catálogo de Filmes</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Adicionar Filme</Link>
      </nav>
    </header>
  );
}