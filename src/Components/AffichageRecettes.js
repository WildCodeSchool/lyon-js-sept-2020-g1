import React from 'react';

export default function AffichageRecettes({ image, titre }) {
  return (
    <div>
      <h1>{titre}</h1>
      <img src={image} alt="visuel de la recette" />
      <p>données rapides sur recette</p>
    </div>
  );
}
