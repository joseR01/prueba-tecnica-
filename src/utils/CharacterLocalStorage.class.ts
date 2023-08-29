import { Character } from "../types/rickAndMorty.types"

class CharacterLocalStorage {
  name = "characters"

  setLocalStorage = (characters:Character[]) => {

    if (!characters) throw new Error("characters is required")
    
    const charactersToString = JSON.stringify(characters)
    localStorage.setItem(this.name,charactersToString)
  }
  
  getLocalStorage = (): Character[] => {    
    const storaged = localStorage.getItem(this.name)
    const characters = storaged ? (JSON.parse(storaged) as Character[]) : []
    return characters
  }
  
  deleteLocalStorage = () => {
    localStorage.removeItem(this.name)
  }
}

export default CharacterLocalStorage