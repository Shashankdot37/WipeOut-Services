export type CleaningFormData = {
  serviceType: "general-cleaning" | "deep-cleaning" | "carpet-cleaning";
  location: string;
  bedrooms: number;
  bathrooms: number;
  date: string;
  time:string;
};

export type RemovalFormData = {
    from: string;
    to: string;
    serviceType: "furniture-removal" | "house-moving" | "office-relocation";
    phone:number;
    email:string;
    date:string;
}

export type RemovalServiceType = "furniture-removal" | "house-moving" | "office-relocation"; 

export type CleaningServiceType = "general-cleaning" | "deep-cleaning" | "carpet-cleaning";