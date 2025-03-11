"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { CleaningQuoteData } from "@/types";
import { CleaningServiceType } from "@/types";
const glassmorphism =
  "bg-white/30 p-8 rounded-lg shadow-xl space-y-6 max-w-3xl mx-auto backdrop-blur-md border border-white/30";

const CleaningQuote = () => {
  const onSubmit = async (data: CleaningQuoteData) => {
    try {
      const response = await fetch("/api/cleaning",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if(response.ok)
      {
        toast.success("Quote recieved successfully!");
        reset();
      }
      else{
        throw new Error("Failed to submit quote!")
      }
    console.log("Cleaning Quote Details: ", await response.json());
    
    } catch (error) {
      console.error("Error submitting the form.",error)
    }
    
  };
  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CleaningQuoteData>();

  const [selectedService, setSelectedService] = useState<CleaningServiceType | "">("");

  return (
    <div className="flex justify-center mt-[5vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${glassmorphism} w-[60vw]`}
      >
        <h2 className="text-gray-800 text-3xl font-semibold">
          Cleaning Service Appointment
        </h2>
        <div>
          <Label htmlFor="serviceType" className="text-gray-900 mb-2">
            Service Type
          </Label>
          <Select
            onValueChange={(value:CleaningServiceType)=>{
                setSelectedService(value);
                setValue("serviceType", value);
            }}
          >
            <SelectTrigger className="bg-gray-200 text-gray-900 w-full">
              <SelectValue placeholder="Please select the service type" />
            </SelectTrigger>
            <SelectContent className="bg-gray-100 text-gray-900">
              <SelectItem value="end-of-lease-cleaning">End of Lease Cleaning</SelectItem>
              <SelectItem value="office-cleaning">Office cleaning</SelectItem>
              <SelectItem value="general-cleaning">General Cleaning</SelectItem>
              <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
              <SelectItem value="regular-cleaning">Regular Cleaning</SelectItem>
              <SelectItem value="restaurant-cleaning">Restaurant Cleaning </SelectItem>
              <SelectItem value="construction-cleaning">Construction Cleaning</SelectItem>
              <SelectItem value="commercial-cleaning">Commercial Cleaning</SelectItem>
              <SelectItem value="carpet-cleaning">Carpet Cleaning</SelectItem>
              <SelectItem value="apartment-cleaning">Apartment Cleaning</SelectItem>
            </SelectContent>
          </Select>
          {!selectedService && (
            <p className="text-red-500">Please select a service type</p>
          )}
          {errors.serviceType && (
            <p className="text-red-500">{errors.serviceType.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="location" className="mb-2">
            Location
          </Label>
          <Input
            id="location"
            type="text"
            {...register("location", { required: "Please enter the location" })}
            className="bg-gray-200 text-gray-900"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone" className="text-gray-900 mb-2">
            Phone Number
          </Label>
          <Input
            id="phone"
            className="bg-gray-200 text-gray-900 w-full"
            placeholder="Please enter your phone number"
            {...register("phone", {
              required: "Phone Number is required.",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be exactly 10 digits",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-900 mb-2">
            Email Address
          </Label>
          <Input
            id="email"
            className="bg-gray-200 text-gray-900 w-full"
            placeholder="Please enter your email address"
            {...register("email", {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="bedroom" className="mb-2">
              Number of Bedrooms
            </Label>
            <Input
              className="bg-gray-200 text-gray-900"
              id="bedroom"
              inputMode="numeric"
              pattern="[0-9]*"
              min={1}
              {...register("bedrooms", { valueAsNumber: true })}
            ></Input>
          </div>

          <div>
            <Label htmlFor="bathroom" className="mb-2">
              Number of Bathrooms
            </Label>
            <Input
              className="bg-gray-200 text-gray-900"
              id="bathroom"
              inputMode="numeric"
              pattern="[0-9]*"
              min={1}
              {...register("bathrooms", { valueAsNumber: true })}
            ></Input>
          </div>
        </div>
        <div>
          <Label htmlFor="date" className="mb-2">
            Preferred Date
          </Label>
          <Input
            className="bg-gray-200 text-gray-900"
            id="date"
            type="date"
            {...register("date", { required: "Please select a date" })}
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>

        <div>
          <Label htmlFor="time" className="mb-2">
            Preferred Time (24hr-format){" "}
          </Label>
          <Input
            className="bg-gray-200 text-gray-900"
            id="time"
            type="time"
            {...register("time")}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-orange-700 hover:bg-orange-900 text-white font-bold cursor-pointer"
        >
          Book Now
        </Button>
      </form>
    </div>
  );
};

export default CleaningQuote;
