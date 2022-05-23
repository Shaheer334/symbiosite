import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./CategorySlice";


const configStore = configureStore({
    reducer: {
        reducer: rootReducer
    }
})
export default configStore