import { createStore } from "redux";
import RootReducer from '../Reduce';

const store = createStore(rootReducer);

export default store