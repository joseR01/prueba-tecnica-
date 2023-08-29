import { Character } from "../../types/rickAndMorty.types";
import CharacterDescription from "../character/CharacterDescription";

interface Props {
  character: Character
}

const CharacterCard = ({ character }: Props) => {
  return (
    <div className="rounded-xl w-[300px] bg-white py-9 shadow-inner">
      <img src={character?.image} alt="" 
        className="h-52 object-cover w-[100%]"
      />
      <div className="px-6 pt-2">
        <CharacterDescription
          name='Name'
          value={character.name}
        />
        <CharacterDescription
          name='Gender'
          value={character.gender}
        />
        <CharacterDescription
          name='Species'
          value={character.species}
        />
        <CharacterDescription
          name='Origin'
          value={character.origin.name}
        />
      </div>
    </div> 
  )
};

export default CharacterCard;