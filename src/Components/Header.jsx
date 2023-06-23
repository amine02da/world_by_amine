import React from "react";
import "../style/header.css"
import { useDispatch, useSelector } from "react-redux";
import { darkmode } from "../Redux/CountriesSlice";

export default function Header()
{
    const { dark_mode_value } = useSelector(state => state.Country)
    const dispatch = useDispatch()

    const dark_mode_handle = (e) => 
    {
        e.preventDefault();
        dispatch(darkmode(!dark_mode_value))
    }
    return (
        <div className={dark_mode_value ? "headerdarkmood header" : "header"}>
            <div className="logo d-flex align-self-center">
                <b className={dark_mode_value ? "logo text-light" : "logo"}>WorldByAmine</b>
            </div>
            <div className="dark_mode logo d-flex align-self-center m-3">
                {dark_mode_value == false 
                
                ? 
                    <i class="fa-solid fa-moon fs-4" style={{ marginTop: "6px" }} onClick={(e) => dark_mode_handle(e)}></i>
                :
                
                <i class="fa-solid fa-sun fs-4 text-light" style={{ marginTop: "6px" }} onClick={(e) => dark_mode_handle(e)}></i>
                }
            </div>
        </div>
    )
}