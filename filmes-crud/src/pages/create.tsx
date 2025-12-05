import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Form from "../components/form";

export default function Create() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");

  function salvar(e: any) {
    e.preventDefault();

    api
      .post("/filmes", {
        titulo,
        ano,
        genero,
      })
      .then(() => navigate("/"));
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Adicionar Filme</h2>

      <Form
        onSubmit={salvar}
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
