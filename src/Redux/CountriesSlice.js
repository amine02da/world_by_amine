import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// GET ALL THE COUNTRIES
export const get_countries = createAsyncThunk("countries/get", async () => {
    const countries_res = await axios.get("https://restcountries.com/v3.1/all")
    return countries_res.data   
})

// GET COUNTRY BY CODE
export const get_country_details = createAsyncThunk("countries/details", async(cioc) => {
    const countries_details = await axios.get(`https://restcountries.com/v3.1/alpha/${cioc}`)
    return countries_details.data
})

// GET COUNTRY BY REGION

export const get_country_by_region = createAsyncThunk("country/by_region", async(region) => {
    const country_res = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
    return country_res.data
})

export const CountrieSlice = createSlice({
    name: "countries",

    initialState:{
        loading: false,
        error: false,
        country: [],
        countries: [],
        search_value: "",
        dark_mode_value : false
    },

    reducers:{
        reset : (state) => {
            state.loading = false
            state.error = false
            state.country = []
            state.countries = []
            state.search_value = ""
        },

        handle_search_value : (state, action ) => {
            state.search_value = action.payload
        },

        darkmode : (state, action) => 
        {
            state.dark_mode_value = action.payload
        }
    },

    extraReducers:{
// GET ALL THE COUNTRIES
        [get_countries.pending] : (state) => {
            state.loading = true
        },

        [get_countries.fulfilled] : (state, action) => {
            state.countries = action.payload
            state.loading = false
        },

        [get_countries.rejected] : (state) => {
            state.loading = false
            state.error = true
        },

// GET COUNTRY BY CODE
        [get_country_details.pending] : (state) => {
            state.loading = true
        },

        [get_country_details.fulfilled] : (state, action) => {
            state.country = action.payload
            state.loading = false
        },

        [get_country_details.rejected] : (state) => {
            state.loading = false
            state.error = true
        },

// GET COUNTRY BY REGION
        [get_country_by_region.pending] : (state) => {
            state.loading = true
        },

        [get_country_by_region.fulfilled] : (state, action) => {
            state.countries = action.payload
            state.loading = false
        },

        [get_country_by_region.rejected] : (state) => {
            state.loading = false
            state.error = true
        }
    }
})

export const { handle_search_value, reset, darkmode } = CountrieSlice.actions
export default CountrieSlice.reducer