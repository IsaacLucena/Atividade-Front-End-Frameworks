import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import Edit from "./pages/edit";

export default function App() {
  return (
    <div>
      <header style={{ padding: "20px", background: "#222", color: "white" }}>
        <h1>Catálogo de Filmes</h1>
        <nav>
          <Link to="/" style={{ color: "white", marginRight: 10 }}>Home</Link>
          <Link to="/create" style={{ color: "white" }}>Adicionar Filme</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}
