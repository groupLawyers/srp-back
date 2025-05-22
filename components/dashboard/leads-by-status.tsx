import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LeadsByStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clientes por Estado</CardTitle>
        <CardDescription>Distribución de clientes según su estado actual</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Pendientes</span>
                <span className="text-sm font-medium">32</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-amber-500 w-[25%]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Aceptados</span>
                <span className="text-sm font-medium">87</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-green-500 w-[45%]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Rechazados</span>
                <span className="text-sm font-medium">24</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-red-500 w-[15%]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">En seguimiento</span>
                <span className="text-sm font-medium">102</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-blue-500 w-[35%]" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
