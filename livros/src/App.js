import Header from "./components/Header";
import { useState } from 'react';
import Livros from "./components/Livros";

function App() {
  const [books, setBooks] = useState([
    {
      id: '1',
      author: 'Leo Tolstói',
      title: 'Guerra e Paz',
      pages: 1296,
      year_1st_es: 1867,
    },

    {
      id: '2',
      author: 'Malba Tahan',
      title: 'O Homem que calculava',
      pages: 286,
      year_1st_ed: 1938,
    },
  ]);
  return (
    <div className="container">
      <Header title="Lista de Livros" />
      <Livros livros={books} />
    </div>
  );
}

export default App;
