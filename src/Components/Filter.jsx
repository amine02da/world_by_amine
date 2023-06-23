import React, { useEffect, useState } from "react";
import "../style/filter.css";
import { useDispatch, useSelector } from "react-redux";
import { get_country_by_region, reset } from "../Redux/CountriesSlice";

export default function Filter()
{
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    const [filter_value, setFilter_value] = useState("")
    const { dark_mode_value } = useSelector(state => state.Country)
    const dispatch = useDispatch()

    useEffect(() => {
        if(filter_value != ""){
            dispatch(get_country_by_region(filter_value))

        }
        // dispatch(reset())
    }, [dispatch, filter_value])
    return (
        <div>
            <form >
                <select onClick={(e) => setFilter_value(e.target.value)} className={dark_mode_value ? "formselectdarkmood" : ""}>
                    <option value="">Filter by Region</option>
                    {regions.map((region) => {
                        return (
                            <option value={region}>{region}</option>
                        )
                    })}
                </select>
            </form>
        </div>
    )
}