"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MetricasCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rendimiento de Ventas</CardTitle>
        <CardDescription>Análisis de ventas por período</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="mensual">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="semanal">Semanal</TabsTrigger>
            <TabsTrigger value="mensual">Mensual</TabsTrigger>
            <TabsTrigger value="anual">Anual</TabsTrigger>
          </TabsList>
          <TabsContent value="semanal" className="pt-4">
            <div className="h-[300px] flex flex-col items-center justify-center">
              <div className="w-full h-full flex items-end justify-between gap-2 px-4">
                {Array.from({ length: 7 }).map((_, i) => {
                  const height = Math.floor(Math.random() * 70) + 30
                  return (
                    <div key={i} className="relative flex-1 group">
                      <div
                        className="bg-primary/80 rounded-t-md w-full transition-all hover:bg-primary"
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                        L{i + 1}
                      </div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {Math.floor(height / 10)} ventas
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8 text-xs text-muted-foreground">Días de la semana</div>
            </div>
          </TabsContent>
          <TabsContent value="mensual" className="pt-4">
            <div className="h-[300px] flex flex-col items-center justify-center">
              <div className="w-full h-full flex items-end justify-between gap-1 px-2">
                {Array.from({ length: 12 }).map((_, i) => {
                  const height = Math.floor(Math.random() * 70) + 30
                  return (
                    <div key={i} className="relative flex-1 group">
                      <div
                        className="bg-primary/80 rounded-t-md w-full transition-all hover:bg-primary"
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                        {i + 1}
                      </div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {Math.floor(height / 10) * 3} ventas
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8 text-xs text-muted-foreground">Meses del año</div>
            </div>
          </TabsContent>
          <TabsContent value="anual" className="pt-4">
            <div className="h-[300px] flex flex-col items-center justify-center">
              <div className="w-full h-full flex items-end justify-between gap-4 px-8">
                {Array.from({ length: 5 }).map((_, i) => {
                  const height = Math.floor(Math.random() * 70) + 30
                  const year = new Date().getFullYear() - 4 + i
                  return (
                    <div key={i} className="relative flex-1 group">
                      <div
                        className="bg-primary/80 rounded-t-md w-full transition-all hover:bg-primary"
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                        {year}
                      </div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {Math.floor(height / 10) * 10} ventas
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8 text-xs text-muted-foreground">Años</div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
