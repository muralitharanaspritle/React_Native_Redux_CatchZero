import { createStore } from "redux";
import catchZeroReducer from "./Reducer";

const store = createStore(catchZeroReducer);

export default store;