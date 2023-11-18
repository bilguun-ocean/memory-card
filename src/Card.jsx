import React, { useEffect, useState } from 'react';
import charactersData from './data.json';
import './Card.css'

export default function Card({ index, onClick }) {

  const character = charactersData.characters.find((char) => char.id == index);


  return (
    <div onClick={()=> onClick(index)} className='card'>
      <img src={character.imageUrl} alt={character.name} />
      <p>{character.name}</p>
    </div>
  );
}
