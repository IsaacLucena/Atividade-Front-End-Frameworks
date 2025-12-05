import { Link } from "react-router-dom";

interface Props {
  id: number;
  titulo: string;
  ano: number;
  genero: string;
  onDelete: (id: number) => void;
}

export default function Card({ id, titulo, ano, genero, onDelete }: Props) {
  return (
    <div
      style={{
        padding: 20,
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h3>{titulo}</h3>
      <p><strong>Ano:</strong> {ano}</p>
      <p><strong>Gênero:</strong> {genero}</p>

      <div style={{ marginTop: 10 }}>
        <Link to={`/edit/${id}`} style={{ marginRight: 10 }}>
          Editar
        </Link>

        <button
          onClick={() => onDelete(id)}
          style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}