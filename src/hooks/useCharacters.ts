import { useEffect } from "react"
import { Character } from "../types/rickAndMorty.types"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { Loading, loadDefaultCharacters, loadNextCharacter } from "../store/features/character/characterSlice"

const useCharacters = (): ([Character[], () => Promise<void>, Loading]) => {
  const characters = useSelector((state: RootState) => state.characters.value)
  const loadingCharacters = useSelector((state: RootState) => state.characters.loading)
  const dispatch = useDispatch<AppDispatch>()

  const getNextCharacter = async () => {
    try {
      const nextCharacterId = characters.length === 0 ? 1 : (characters[characters.length - 1].id + 1)
      dispatch(loadNextCharacter(nextCharacterId))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(loadDefaultCharacters())
  }, [dispatch])
  
  return [characters, getNextCharacter, loadingCharacters]
}

export default useCharacters
