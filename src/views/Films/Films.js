import React from 'react';
import { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilmData = async () => {
      const data = await fetchFilms();
      console.log(data);
      setFilms(data);
    };
    fetchFilmData();
  }, []);

  return (
    <div>
      <h3>This is all of the films!!</h3>
      {films.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
