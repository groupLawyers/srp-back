import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, DollarSign, Users, UserCheck, Clock } from "lucide-react"

export function MetricasCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">245</div>
          <div className="flex items-center">
            <span className="text-xs text-muted-foreground">Último mes: 220</span>
            <span className="ml-2 text-xs text-green-500 flex items-center">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              11.4%
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ventas Realizadas</CardTitle>
          <UserCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">87</div>
          <div className="flex items-center">
            <span className="text-xs text-muted-foreground">Último mes: 78</span>
            <span className="ml-2 text-xs text-green-500 flex items-center">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              11.5%
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ingresos</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$24,500</div>
          <div className="flex items-center">
            <span className="text-xs text-muted-foreground">Último mes: $21,200</span>
            <span className="ml-2 text-xs text-green-500 flex items-center">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              15.6%
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tasa de Conversión</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">35.5%</div>
          <div className="flex items-center">
            <span className="text-xs text-muted-foreground">Último mes: 32.8%</span>
            <span className="ml-2 text-xs text-green-500 flex items-center">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              8.2%
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
