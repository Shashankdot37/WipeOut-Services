"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import AdminCleaningTable from "@/app/admin/AdminCleaningTable";
import AdminRemovalTable from "@/app/admin/AdminRemovalTable";

const AdminTabs = () => {
    const [activePage, setActivePage] = useState("cleaning");
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-12">Admin Dashboard</h1>
      <Tabs defaultValue="cleaning" onValueChange={setActivePage} w-full>
        <TabsList className="flex justify-center gap-4 mb-12 bg-gray-100 rounded-lg border-2 border-gray-500 px-6 py-6">
            <TabsTrigger value="cleaning" className="px-6 py-2 hover:cursor-pointer">Cleaning Bookings</TabsTrigger>
            <TabsTrigger value="removal" className="px-6 py-2 hover:cursor-pointer">Removal Bookings</TabsTrigger>
        </TabsList>
        <TabsContent value="cleaning">
            <AdminCleaningTable/>
        </TabsContent>
        <TabsContent value="removal">
            <AdminRemovalTable/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminTabs
