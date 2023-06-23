import React, { useEffect, useState } from "react";
import "../style/search.css";
import { useDispatch, useSelector } from "react-redux";
import { handle_search_value, reset } from "../Redux/CountriesSlice";

export default function Search()
{
    const [search_value, setSearch_value] = useState("")
    const { dark_mode_value } = useSelector(state => state.Country)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch_value(e.target.value)
    }

    useEffect(() => {
        if ( search_value != ""){
            dispatch( handle_search_value(search_value) )
        }

        // dispatch(reset())
    }, [dispatch, search_value])
    return(
        <div className="search">
            <form action="">
                <i className={dark_mode_value ? "fa-solid fa-magnifying-glass text-light" : "fa-solid fa-magnifying-glass"}></i>
                <input type="search" className={dark_mode_value ? "searchforminputdarkmood input-dark" : ""} onChange={(e) => handleSearch(e)} placeholder="Search for a country..."/>
            </form>
        </div>
    )
}