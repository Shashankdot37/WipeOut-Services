"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import CleaningQuote from "./CleaningQuote";
import RemovalQuote from "./RemovalQuote";

const QuoteTabs = () => {
    const [activePage, setActivePage] = useState("cleaning");
  return (
    <div className="container w-full mx-auto p-6 bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-6">Get a Free Quote</h1>
      <Tabs defaultValue="cleaning" onValueChange={setActivePage} className="w-full ">
        <TabsList className="flex flex-wrap justify-center items-center gap-4 bg-gray-100 rounded-lg border-2 border-gray-500">
            <TabsTrigger value="cleaning" className="hover:cursor-pointer">Cleaning Service</TabsTrigger>
            <TabsTrigger value="removal" className="hover:cursor-pointer">Removal Service</TabsTrigger>
        </TabsList>
        <TabsContent value="cleaning">
            <CleaningQuote/>
        </TabsContent>
        <TabsContent value="removal">
            <RemovalQuote/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default QuoteTabs
