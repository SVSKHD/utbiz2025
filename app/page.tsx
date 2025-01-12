"use client";

import { Header } from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrokerTab } from "@/components/broker-tab/broker-tab";
import { AiButton } from "@/components/ai-button";
import Link from "next/link";
import { Calendar, ChartBarStacked } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TradingDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <Tabs defaultValue="zerodha" className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <TabsList className="grid w-full max-w-[400px] grid-cols-3 h-9">
              <TabsTrigger value="zerodha">Zerodha</TabsTrigger>
              <TabsTrigger value="fyers">Fyers</TabsTrigger>
              <TabsTrigger value="dhan">Dhan</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Link href="/calendar">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Calendar className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/calendar">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <ChartBarStacked className="h-4 w-4" />
                </Button>
              </Link>
              <AiButton />
            </div>
          </div>
          <TabsContent value="zerodha" className="mt-6">
            <BrokerTab
              totalValue={1250000}
              todaysPnL={15000}
              holdings={980000}
              funds={270000}
            />
          </TabsContent>
          <TabsContent value="fyers" className="mt-6">
            <BrokerTab
              totalValue={750000}
              todaysPnL={-8000}
              holdings={600000}
              funds={150000}
            />
          </TabsContent>
          <TabsContent value="dhan" className="mt-6">
            <BrokerTab
              totalValue={500000}
              todaysPnL={12000}
              holdings={425000}
              funds={75000}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}