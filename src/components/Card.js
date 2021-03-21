import React from 'react';

export default function Card({ title, img }) {
  return (
    <div className="card">
      <img
        className="card__image"
        alt={`card-${title}`}
        title={title}
        src={`/images/games/${img}`}
      />
    </div>
  );
}
