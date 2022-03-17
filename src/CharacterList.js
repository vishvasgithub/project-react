import { useContext } from "react";
import Character from "./Character";
import DataContext from "./DataContext";
const CharacterList = () => {
  const {characters, error} = useContext(DataContext);

  return (
    <div className="character-list-container">
      {characters.length === 0 ? <h2>{error}</h2> :
        characters.map((character, idx) => (
          <Character key={character.char_id} data={character} />
        ))}
    </div>
  );
};

export default CharacterList;