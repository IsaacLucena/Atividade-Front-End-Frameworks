// import { useEffect, useState } from "react";
// import api from "../services/api";
// import Card from "../components/card";

// export default function Home() {
//   const [filmes, setFilmes] = useState<any[]>([]);

//   function carregar() {
//     api.get("/filmes").then((res: any) => {
//       setFilmes(res.data);
//     });
//   }

//   useEffect(() => {
//     carregar();
//   }, []);

//   function deletar(id: number) {
//     api.delete(`/filmes/${id}`).then(() => {
//       carregar();
//     });
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Lista de Filmes</h2>

//       {filmes.map((filme) => (
//         <Card
//           key={filme.id}
//           id={filme.id}
//           titulo={filme.titulo}
//           ano={filme.ano}
//           genero={filme.genero}
//           onDelete={deletar}
//         />
//       ))}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/card";

export default function Home() {
  const [filmes, setFilmes] = useState<any[]>([]);

  function carregar() {
    api.get("/filmes").then((res: any) => {
      setFilmes(res.data);
    });
  }

  useEffect(() => {
    carregar();
  }, []);

  function deletar(id: number) {
    // Adicionei um confirm simples para segurança
    if (window.confirm("Tem certeza que deseja excluir este filme?")) {
      api.delete(`/filmes/${id}`).then(() => {
        carregar();
      });
    }
  }

  return (
    <div>
      <h2>Lista de Filmes</h2>
      
      {filmes.length === 0 ? (
        <p style={{color: '#a8a8b3'}}>Nenhum filme cadastrado.</p>
      ) : (
        <div className="movie-grid">
          {filmes.map((filme) => (
            <Card
              key={filme.id}
              id={filme.id}
              titulo={filme.titulo}
              ano={filme.ano}
              genero={filme.genero}
              onDelete={deletar}
            />
          ))}
        </div>
      )}
    </div>
  );
}