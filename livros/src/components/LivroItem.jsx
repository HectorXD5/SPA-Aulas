import React from 'react'
import Proptypes from 'prop-types';
import StarRating from './StarRating';

const LivroItem = ({livro}) => {
    const {title, author, pages, year_1st_ed} = livro;
    return (
    <div className= "itemLivro">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>Páginas: {pages}</p>
        <p>Ano da 1ª edição {year_1st_ed}</p>
        <StarRating />
    </div>
    )
};

LivroItem.propTypes = {
    livro: Proptypes.object.isRequired
}

export default LivroItem;