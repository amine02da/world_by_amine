import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_country_details, reset } from "../Redux/CountriesSlice";
import "../style/countries_details.css"

export default function Countries_details ()
{

    const cioc = useParams("cioc");
    const { loading, error, country, dark_mode_value } = useSelector(state => state.Country)
    
    const dispatch = useDispatch()

    useEffect(() => {
        if (cioc){
            dispatch(get_country_details(cioc.cioc.toLowerCase()))
        }


        return () => {
            dispatch(reset())
        }
    } ,[dispatch])

    return (
        <div>
            {loading ? 
                <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
                    <div class="spinner-grow text-warning m-1" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
                </div> : country.length > 0 ? (
                <>
                <div className="container mt-3">
                            <Link className={dark_mode_value ? "btn btn-back btndark btn-backdarkmood" : "btn btn-back"} to={"/"}>
                        <i class="fa-solid fa-arrow-left m-1"></i>
                        Back
                    </Link>
                </div>
                <div class="card mb-3 w-75 mx-auto mt-3">
                        <img src={country[0].flags.png} width={"200px"} height={"200px"} class="card-img-top" alt={country[0].flags.alt} />
                            <div class={dark_mode_value ? "card-body carddarkmood" : "card-body"}>
                                <h5 class={dark_mode_value ? "card-title text-light" : "card-title"}>{country[0].name.common}</h5>
                                <div class="card-text d-flex justify-content-evenly">
                                    <div>
                                <p> <b className={dark_mode_value ? "text-light" : ""}>Offcial Name:</b> <span className= {dark_mode_value ? "text-light" : ""}>{country[0].name.official}</span></p>
                                <p> <b className={dark_mode_value ? "text-light" : ""}>Population:</b> <span className= {dark_mode_value ? "text-light" : ""}>{country[0].population}</span></p>
                                <p> <b className={dark_mode_value ? "text-light" : ""}>Region:</b> <span className= {dark_mode_value ? "text-light" : ""}>{country[0].region}</span></p>
                                <p> <b className={dark_mode_value ? "text-light" : ""}>SubRegion:</b> <span className= {dark_mode_value ? "text-light" : ""}>{country[0].subregion}</span></p>
                                <p> <b className={dark_mode_value ? "text-light" : ""}>Capital:</b> <span className= {dark_mode_value ? "text-light" : ""}>{country[0].capital}</span></p>
                                    </div>
                                    <div>
                                    <p> <b className={dark_mode_value ? "text-light" : ""}>Top Level Domain:</b> <span className= {dark_mode_value ? "text-light" : ""}>{country[0].tld[0]}</span></p>
                                    <p> <b className={dark_mode_value ? "text-light" : ""}>Currencies:</b> <span className= {dark_mode_value ? "text-light" : ""}>{Object.values(country[0].currencies).map((item) => {
                                        return item.name
                                    }).join(",")}</span></p>
                                    <p> <b className={dark_mode_value ? "text-light" : ""}>Languages:</b> <span className= {dark_mode_value ? "text-light" : ""}>{Object.values(country[0].languages).map((item) => {
                                        return item
                                    }).join(",")}</span></p>

                                    </div>
                                </div>
                            <div class="card-text d-flex flex-wrap  justify-content-center">
                                    <b className={dark_mode_value ? "text-light mt-2 " : "mt-2"}>Border Countries :</b>  {
                                    country[0].borders ? (country[0].borders.map((item, i) => {
                                        return (
                                            <Link to={`/${item}`} className={dark_mode_value ? "btn btndark btn-border m-1 btn-borderdarkmood" : "btn btn-border m-1"} key={i}>{item}</Link>
                                        )
                                    })
                                    
                                        ) : (<span className="mt-2 ">no Border Countries found !</span>)
                                }
                                </div>
                            </div>
                    </div>
                    </>) : 
                    (
                        <div class="alert alert-warning text-center" role="alert">
                            404 not found !
                        </div>
                    )
                   
                    
                
            }
            {error && <div class="alert alert-warning text-center" role="alert">
                Error !
            </div>}
        </div>
    )
}