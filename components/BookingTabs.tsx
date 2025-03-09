"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import CleaningForm from "./CleaningForm";
import RemovalForm from "./RemovalForm";

const BookingTabs = () => {
    const [activePage, setActivePage] = useState("cleaning");
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Book an Appointment</h1>
      <Tabs defaultValue="cleaning" onValueChange={setActivePage} w-full>
        <TabsList className="flex justify-center gap-4 bg-gray-100 rounded-lg border-2 border-gray-500 px-6 py-6">
            <TabsTrigger value="cleaning" className="px-6 py-2 hover:cursor-pointer">Cleaning Service</TabsTrigger>
            <TabsTrigger value="removal" className="px-6 py-2 hover:cursor-pointer">Removal Service</TabsTrigger>
        </TabsList>
        <TabsContent value="cleaning">
            <CleaningForm/>
        </TabsContent>
        <TabsContent value="removal">
            <RemovalForm/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default BookingTabs
