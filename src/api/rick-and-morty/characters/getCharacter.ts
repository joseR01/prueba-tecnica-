import axios from "axios"
import { rickAndMortyApiUrl } from "../constants"
import { Character } from "../../../types/rickAndMorty.types"

interface Params {
  characterId: number
}

async function getCharacter ({characterId}: Params) {
  const response = await axios.get(`${rickAndMortyApiUrl}/character/${characterId}`)
  if (response.data.error) {
    throw new Error(response.data.error)
  }
  const character = response.data as Character
  return character
}

export default getCharacter
