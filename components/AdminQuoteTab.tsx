"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import QuoteCleaningTable from "@/app/adminQuote/QuoteCleaningTable";
import QuoteRemovalTable from "@/app/adminQuote/QuoteRemovalTable";

const AdminQuoteTabs = () => {
    const [activePage, setActivePage] = useState("cleaning");
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-12">Quote Dashboard</h1>
      <Tabs defaultValue="cleaning" onValueChange={setActivePage} w-full>
        <TabsList className="flex justify-center gap-4 mb-12 bg-gray-100 rounded-lg border-2 border-gray-500 px-6 py-6">
            <TabsTrigger value="cleaningQuote" className="px-6 py-2 hover:cursor-pointer">Cleaning Quotes</TabsTrigger>
            <TabsTrigger value="removalQuote" className="px-6 py-2 hover:cursor-pointer">Removal Quotes</TabsTrigger>
        </TabsList>
        <TabsContent value="cleaningQuote">
            <QuoteCleaningTable/>
        </TabsContent>
        <TabsContent value="removalQuote">
            <QuoteRemovalTable/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminQuoteTabs
