export type CleaningFormData = {
  serviceType:
    | "general-cleaning"
    | "end-of-lease-cleaning"
    | "office-cleaning"
    | "deep-cleaning"
    | "regular-cleaning"
    | "construction-cleaning"
    | "commercial-cleaning"
    | "carpet-cleaning"
    | "apartment-cleaning"
    | "restaurant-cleaning";
  location: string;
  phone: number;
  email: string;
  bedrooms: number;
  bathrooms: number;
  date: string;
  time: string;
};
export type CleaningQuoteData = {
  name:string;
  serviceType:
    | "general-cleaning"
    | "end-of-lease-cleaning"
    | "office-cleaning"
    | "deep-cleaning"
    | "regular-cleaning"
    | "construction-cleaning"
    | "commercial-cleaning"
    | "carpet-cleaning"
    | "apartment-cleaning"
    | "restaurant-cleaning";
  location: string;
  phone: number;
  email: string;
  bedrooms: number;
  bathrooms: number;
  date: string;
  time: string;
};


export type RemovalFormData = {
  from: string;
  to: string;
  serviceType: "1helper"| "1van1helper"| "1van2helpers"|"4.5ton1helper"|"4.5ton2helpers"|"4.5ton3helpers";
  phone: number;
  email: string;
  date: string;
};

export type RemovalQuoteData = {
  name: string;
  from: string;
  to: string;
  serviceType: "1helper"| "1van1helper"| "1van2helpers"|"4.5ton1helper"|"4.5ton2helpers"|"4.5ton3helpers";
  phone: number;
  email: string;
  date: string;
};


export type RemovalServiceType ="1helper"| "1van1helper"| "1van2helpers"|"4.5ton1helper"|"4.5ton2helpers"|"4.5ton3helpers";

export type CleaningServiceType =
  | "general-cleaning"
  | "end-of-lease-cleaning"
  | "office-cleaning"
  | "deep-cleaning"
  | "regular-cleaning"
  | "construction-cleaning"
  | "commercial-cleaning"
  | "carpet-cleaning"
  | "apartment-cleaning"
  | "restaurant-cleaning";

export type ToastData = {
  message: string;
  type: "sucess" | "error";
};

//For showing in Admin Table at admin page
export type CleaningForm = {
  _id: string;
  serviceType:
    | "general-cleaning"
    | "end-of-lease-cleaning"
    | "office-cleaning"
    | "deep-cleaning"
    | "regular-cleaning"
    | "construction-cleaning"
    | "commercial-cleaning"
    | "carpet-cleaning"
    | "apartment-cleaning"
    | "restaurant-cleaning";
  location: string;
  phone: number;
  email?: string;
  bedrooms?: number;
  bathrooms?: number;
  date: string;
  time?: string;
  status: "pending" | "done";
  adminNote?:string;
};

export type CleaningQuoteAdmin = {
  _id: string;
  name:string;
  serviceType:
    | "general-cleaning"
    | "end-of-lease-cleaning"
    | "office-cleaning"
    | "deep-cleaning"
    | "regular-cleaning"
    | "construction-cleaning"
    | "commercial-cleaning"
    | "carpet-cleaning"
    | "apartment-cleaning"
    | "restaurant-cleaning";
  location: string;
  phone: number;
  email?: string;
  bedrooms?: number;
  bathrooms?: number;
  date: string;
  time?: string;
  status: "pending" | "done";
};

export type RemovalForm = {
  _id: string;
  from: string;
  to: string;
  serviceType: "1helper"| "1van1helper"| "1van2helpers"|"4.5ton1helper"|"4.5ton2helpers"|"4.5ton3helpers";
  phone: number;
  email?: string;
  date: string;
  status: "pending" | "done";
  adminNote:string;
};

export type RemovalQuoteAdmin = {
  _id: string;
  name:string;
  from: string;
  to: string;
  serviceType: "1helper"| "1van1helper"| "1van2helpers"|"4.5ton1helper"|"4.5ton2helpers"|"4.5ton3helpers";
  phone: number;
  email?: string;
  date: string;
  status: "pending" | "done";
};
