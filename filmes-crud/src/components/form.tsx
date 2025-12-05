import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  titulo: string;
  setTitulo: (value: string) => void;
  ano: string;
  setAno: (value: string) => void;
  genero: string;
  setGenero: (value: string) => void;
}

export default function Form({
  onSubmit,
  titulo,
  setTitulo,
  ano,
  setAno,
  genero,
  setGenero,
}: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      <label>Título:</label>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <label>Ano:</label>
      <input
        type="text"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />

      <label>Gênero:</label>
      <input
        type="text"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />

      <button type="submit">Salvar</button>
    </form>
  );
}
