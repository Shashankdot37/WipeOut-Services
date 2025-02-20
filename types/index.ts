import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
}

export interface CustomFilterProps {
    title:string;
    // containerStyles?:string;
    // handleClick?:MouseEventHandler<HTMLButtonElement>;
    // btnType?:"button" | "submit";
}

export interface SearchServicesProps {
   service:string;
   setService:(service:string)=>void
}

export type onLocationSelectProps = (lat:number, lng:number)=>void;