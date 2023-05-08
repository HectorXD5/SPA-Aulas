import React from 'react'
import LivroItem from './LivroItem'

const Livros = ( {livros} ) => {
  return livros.map( (livro) => (
    <LivroItem key= {livro.id} livro= {livro} />
  ))
}

export default Livros