import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_countries } from "../Redux/CountriesSlice";
import { Link } from "react-router-dom";
import "../style/countries.css"

export default function Countries () {

    const { loading, error, countries, search_value, dark_mode_value } = useSelector(state => state.Country)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_countries())
    },[dispatch])
    
    const data = countries.filter((item) => item.name.common.toLowerCase().includes(search_value))
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {loading ? 
                <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>

            <div className="spinner-grow text-primary m-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> 
                    <div className="spinner-grow text-info m-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning m-1" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            </div>:
            
                data.length > 0 && data.map((item) => {
                    return(
                        <Link to={`/${item.cioc}`} className="card m-2 text-dark" style={{width: "18rem", cursor:"pointer"}} >
                            <img src={item.flags.png} className="card-img-top" alt={item.flags.alt} width={"100px"} height={"150px"}/>
                            <div className={dark_mode_value ? "card-body carddarkmood" : "card-body"} >
                                <h5 className={dark_mode_value ? "card-title text-light" : "card-title"}>{item.name.common}</h5>
                                <p className= "card-text">
                                        <p>
                                        <b className={dark_mode_value ? "text-light" : ""}>Population:</b> <span className= {dark_mode_value ? "text-light" : ""}>{item.population}</span>
                                        </p>    
                                        <p>
                                        <b className={dark_mode_value ? "text-light" : ""}>Region:</b> <span className= {dark_mode_value ? "text-light" : ""}>{item.region}</span>
                                        </p>    
                                        <p>
                                        <b className={dark_mode_value ? "text-light" : ""}>Capital:</b> <span className= {dark_mode_value ? "text-light" : ""}>{item.capital}</span>
                                        </p>    
                                    </p>
                                </div>
                        </Link>
                    )
                })
            
            }

        </div>
    )
}