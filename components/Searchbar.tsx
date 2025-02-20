"use client";

import { useState } from "react";
import SearchServices from "./SearchServices";
import { SearchServicesProps } from "@/types";

const Searchbar = ({service,setService}:SearchServicesProps) => {
  const handleSearch=()=>{}
  return (
    <div>
      <form onClick={handleSearch} className="searchbar">
        <div className="searchbar__item">
          <SearchServices
          service={service}
          setService={setService} 
          />
        </div>
      </form>
    </div>
  )
}

export default Searchbar
