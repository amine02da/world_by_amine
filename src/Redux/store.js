import { configureStore } from "@reduxjs/toolkit";
import CountriesSlice from "./CountriesSlice";


export const store = configureStore({
    reducer:{
        Country:CountriesSlice
    }
})