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
import { RemovalFormData } from "@/types";
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
  } = useForm<RemovalFormData>();
  const [selectedService, setSelectedService] = useState<
    RemovalServiceType | ""
  >("");
  const onSubmit = async (data: RemovalFormData) => {
    try {
      const response = await fetch("/api/removal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Removal appointment booked successfully!");
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
          Removal Service Appointment
        </h2>
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
            onValueChange={(value: RemovalServiceType) => {
              setValue("serviceType", value);
              setSelectedService(value);
            }}
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

export default RemovalQuote;
