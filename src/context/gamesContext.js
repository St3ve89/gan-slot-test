import React, { createContext, useState } from 'react';
import initialGames from '../fixtures/games.json';

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState(initialGames);
  const [sort, setSort] = useState({
    sort: 'all',
    search: '',
  });
  return (
    <GamesContext.Provider value={{ games, setGames, sort, setSort }}>
      {children}
    </GamesContext.Provider>
  );
};
