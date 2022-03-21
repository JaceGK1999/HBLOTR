import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters('All', '');
        console.log(data);
        setCharacters(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Characters from LOTR!!!</h1>
      {error && <p>{error}</p>}
      {characters.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
  /* <option value="All">All</option>
<option value="Dwarf">Dwarf</option>
<option value="Elf">Elf</option>
<option value="Hobbit">Hobbit</option>
<option value="Human">Human</option>
<option value="Maiar">Maiar</option>
<option value="Orc">Orc</option> */
}
