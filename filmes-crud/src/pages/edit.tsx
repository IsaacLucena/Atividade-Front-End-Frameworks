import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import Form from "../components/form";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");

  useEffect(() => {
    api.get(`/filmes/${id}`).then((res: any) => {
      setTitulo(res.data.titulo);
      setAno(res.data.ano);
      setGenero(res.data.genero);
    });
  }, []);

  function atualizar(e: React.FormEvent) {
    e.preventDefault();

    api
      .put(`/filmes/${id}`, {
        titulo,
        ano,
        genero,
      })
      .then(() => navigate("/"));
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Editar Filme</h2>
      <Form
        onSubmit={atualizar}
        titulo={titulo}
        setTitulo={setTitulo}
        ano={ano}
        setAno={setAno}
        genero={genero}
        setGenero={setGenero}
      />
    </div>
  );
}
