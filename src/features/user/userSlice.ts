import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserReduxState {
  userId: number;
  username: string;
  savedRecipeIds: number[];
  likedRecipeIds: number[];
}

const initialState: UserReduxState = {
  userId: 1,
  username: 'Thomas',
  savedRecipeIds: [],
  likedRecipeIds: [],
};

interface Recipe {
  recipeId: number;
}

const payloadGenerator = (recipeId: number) => ({
  payload: { recipeId },
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    likeRecipe: {
      reducer: (state, action: PayloadAction<Recipe>) => {
        state.likedRecipeIds.push(action.payload.recipeId);
      },
      prepare: payloadGenerator,
    },
    unlikeRecipe: {
      reducer: (state, action: PayloadAction<Recipe>) => {
        state.likedRecipeIds = state.likedRecipeIds.filter(
          (id) => id !== action.payload.recipeId
        );
      },
      prepare: payloadGenerator,
    },
    saveRecipe: {
      reducer: (state, action: PayloadAction<Recipe>) => {
        state.savedRecipeIds.push(action.payload.recipeId);
      },
      prepare: payloadGenerator,
    },
    unsaveRecipe: {
      reducer: (state, action: PayloadAction<Recipe>) => {
        state.savedRecipeIds = state.savedRecipeIds.filter(
          (id) => id !== action.payload.recipeId
        );
      },
      prepare: payloadGenerator,
    },
  },
});

const { actions, reducer } = userSlice;
export const { likeRecipe, unlikeRecipe, saveRecipe, unsaveRecipe } = actions;
export default reducer;
