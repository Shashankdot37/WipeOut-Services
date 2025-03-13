"use client";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { RemovalQuoteData } from "@/types";
import { useState } from "react";
import { RemovalServiceType } from "@/types";
import { toast } from "sonner";
const glassmorphism =
  "bg-white/30 p-8 rounded-lg shadow-xl space-y-6 max-w-3xl mx-auto backdrop-blur-md border border-white/30";

const RemovalQuote = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<RemovalQuoteData>();
  const [selectedService, setSelectedService] = useState<
    RemovalServiceType | ""
  >("");
  
  const calculatePrice = (service:RemovalServiceType) : string =>{
      const prices:Record<RemovalServiceType,string> ={
        "1helper": "$40 per hr per man - minimum 2hr",
        "1van1helper": "$60 per hr - minimum 2hr",
        "1van2helpers": "$95 per hr - minimum 2hr",
        "4.5ton1helper": "$85 per hr - minimum 2hr",
        "4.5ton2helpers": "$110 per hr - minimum 2hr",
        "4.5ton3helpers": "$145 per hr - minimum 2hr",
      }
      return prices[service] || "";
    }
    const handleServiceChange = (value: RemovalServiceType) => {
      setValue("serviceType", value);
      setSelectedService(value);
      setEstimatedPrice(calculatePrice(value));
    };
    const[estimatedPrice, setEstimatedPrice] = useState<string>("");
  const onSubmit = async (data: RemovalQuoteData) => {
    try {
      const response = await fetch("/api/removalQuote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Removal Quote received successfully!");
        reset();
      }
      else
      {
        return new Error("Failed to submit quote data.");
      }
      console.log("Removal quote Detail: ", await response.json());
    } catch (error) {
      console.error("Error submitting the quote data", error);
    }
  };
  return (
    <div className="flex justify-center mt-[5vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${glassmorphism} w-[60vw]`}
      >
        <h2 className="text-gray-800 text-3xl font-semibold">
          Removal Service Quote
        </h2>
        <div>
          <Label htmlFor="name" className="mb-2">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            {...register("name", { required: "Please enter the name" })}
            className="bg-gray-200 text-gray-900"
          />
          {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="from" className="text-gray-900 mb-2">
            From
          </Label>
          <Input
            className="bg-gray-200 text-gray-900"
            id="from"
            placeholder="Write the starting location"
            {...register("from", {
              required: "Please write the starting location",
            })}
          />
          {errors.from && <p className="text-red-500">{errors.from.message}</p>}
        </div>
        <div>
          <Label htmlFor="to" className="text-gray-900 mb-2">
            To
          </Label>
          <Input
            className="bg-gray-200 text-gray-900"
            id="to"
            type="text"
            {...register("to", {
              required: "Please write the destination location",
            })}
            placeholder="Write the destination location"
          />
          {errors.to && <p className="text-red-500">{errors.to.message}</p>}
        </div>
        <div>
          <Label htmlFor="serviceType" className="text-gray-900 mb-2">
            Service Type
          </Label>
          <Select
            onValueChange={handleServiceChange}
          >
            <SelectTrigger className="bg-gray-200 text-gray-900 w-full">
              <SelectValue placeholder="Please select the service type." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1helper">Helper</SelectItem>
              <SelectItem value="1van1helper">1 Van + 1 Helper</SelectItem>
              <SelectItem value="1van2helpers">1 Van + 2 Helpers</SelectItem>
              <SelectItem value="4.5ton1helper">4.5 ton truck + 1 helper</SelectItem>
              <SelectItem value="4.5ton2helpers">4.5 ton Truck + 2 helpers</SelectItem>
              <SelectItem value="4.5ton3helpers">4.5 ton Truck + 3 helpers</SelectItem>
            </SelectContent>
          </Select>
          {!selectedService && (
            <p className="text-red-500">Please select a service type</p>
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
        </div>
        {selectedService && estimatedPrice && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-xl font-semibold text-gray-800">Estimated Price:</p>
            <p className="text-2xl text-orange-600 font-bold">Aus {estimatedPrice}</p>
          </div>
        )}
        <Button
          type="submit"
          className="w-full bg-orange-700 hover:bg-orange-900 text-white font-bold cursor-pointer"
        >
          Get a Free Quote
        </Button>
      </form>
    </div>
  );
};

export default RemovalQuote;
