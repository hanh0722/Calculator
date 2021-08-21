import { configureStore, createSlice } from "@reduxjs/toolkit";
import calculationFunction from "./calculation";
const state = {
  currentResult: "",
  lastResult: "",
  operator: null,
};
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: state,
  reducers: {
    calculateFirst(state, action) {
      state.currentResult = state.currentResult + action.payload;
    },
    save(state) {
      if (state.currentResult === "" || state.lastResult === "") {
        return;
      }
      const result = calculationFunction(
        +state.lastResult,
        +state.currentResult,
        state.operator
      );
      state.currentResult = result.toString();
      state.lastResult = "";
      state.operator = null;
    },
    getOperator(state, action) {
      if (state.currentResult.length === 0) {
        return;
      }
      state.operator = action.payload;
      state.lastResult = state.currentResult;
      state.currentResult = "";
    },
    delete(state) {
      state.currentResult = "";
      state.lastResult = "";
      state.operator = null;
      // delete all result we have
    },
    removeOneCharacter(state) {
      if (state.currentResult.length === 0) {
        return;
      }
      state.currentResult = state.currentResult.slice(0, -1);
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});

export default store;
