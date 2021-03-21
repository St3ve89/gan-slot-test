import React, { useContext } from 'react';
import { GamesContext } from '../../context/gamesContext';
import Card from '../Card/Card';

export default function CardList() {
  const { games } = useContext(GamesContext);

  return (
    <div className="card-list">
      {games.map(({ id, title, img }) => (
        <Card key={id} title={title} img={img} />
      ))}
    </div>
  );
}
