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

export type RemovalFormData = {
  from: string;
  to: string;
  serviceType: "furniture-removal" | "house-moving" | "office-relocation";
  phone: number;
  email: string;
  date: string;
};

export type RemovalServiceType =
  | "furniture-removal"
  | "house-moving"
  | "office-relocation";

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
};

export type RemovalForm = {
  _id: string;
  from: string;
  to: string;
  serviceType: "furniture-removal" | "house-moving" | "office-relocation";
  phone: number;
  email?: string;
  date: string;
  status: "pending" | "done";
};
