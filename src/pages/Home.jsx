import React from "react";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import Countries from "../Components/Countries";

export default function Home()
{
    return (
        <>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            marginTop:"40px"
        }}>
            <Search />
            <Filter />
        </div>
        <div className="mt-4">
            <Countries/>
        </div>
        </>
    )
}