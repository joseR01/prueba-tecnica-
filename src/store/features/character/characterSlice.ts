import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Character } from "../../../types/rickAndMorty.types"
import getCharacter from "../../../api/rick-and-morty/characters/getCharacter"
import CharacterLocalStorage from "../../../utils/CharacterLocalStorage.class"

export const loadNextCharacter = createAsyncThunk(
  "charactes/getOneCharacter",
  async (characterId: number) => {
    // con este codigo se unduce a un error
    // if (characterId === 5) {
    //   throw new Error("se volvio");
      
    // }
    const character = await getCharacter({characterId})
    return character
  }
)

export const loadDefaultCharacters = createAsyncThunk(
  "charactes/getfirstcharacters",
  async () => {
    const characterLocalStorage = new CharacterLocalStorage()
    const characters = characterLocalStorage.getLocalStorage()
    if (characters.length) {
      return characters
    } else {
      const firstCharacter = await getCharacter({characterId: 1})
      characterLocalStorage.setLocalStorage([firstCharacter])
      return [firstCharacter]
    }
  }
)

export const loadingStatus = {
  idle: "idle",
  pending: "pending",
  failed: "failed"
} as const

export type Loading = (typeof loadingStatus)[keyof typeof loadingStatus]

export interface CharactersState {
  value: Character[]
  loading: Loading
}

const initialState: CharactersState = {
  value: [],
  loading: loadingStatus.idle
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loadNextCharacter.pending, (state) => { 
      state.loading = loadingStatus.pending
    })
    builder.addCase(loadNextCharacter.rejected, (state) => { 
      state.loading = loadingStatus.failed
    })
    builder.addCase(loadNextCharacter.fulfilled, (state, action) => { 
      state.loading = loadingStatus.idle
      const newCharacters = [
        ...state.value,
        action.payload
      ]
      const characterLocalStorage = new CharacterLocalStorage()
      characterLocalStorage.setLocalStorage(newCharacters)
      state.value = newCharacters
    })

    builder.addCase(loadDefaultCharacters.pending, (state) => { 
      state.loading = loadingStatus.pending
    })
    builder.addCase(loadDefaultCharacters.rejected, (state) => { 
      state.loading = loadingStatus.failed
    })
    builder.addCase(loadDefaultCharacters.fulfilled, (state, action) => { 
      state.loading = loadingStatus.idle
      state.value = action.payload
    })
  }
})

export default counterSlice.reducer