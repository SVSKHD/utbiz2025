"use client";

import { Header } from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarView } from "@/components/calendar/calendar-view";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <Tabs defaultValue="zerodha" className="space-y-4">
          <div className="flex items-center justify-center">
            <TabsList className="grid w-full max-w-[400px] grid-cols-3 h-9">
              <TabsTrigger value="zerodha">Zerodha</TabsTrigger>
              <TabsTrigger value="fyers">Fyers</TabsTrigger>
              <TabsTrigger value="dhan">Dhan</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="zerodha" className="mt-6">
            <CalendarView broker="zerodha" />
          </TabsContent>
          <TabsContent value="fyers" className="mt-6">
            <CalendarView broker="fyers" />
          </TabsContent>
          <TabsContent value="dhan" className="mt-6">
            <CalendarView broker="dhan" />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}