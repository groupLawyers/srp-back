import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function TopVendedores() {
  const vendedores = [
    {
      id: 1,
      nombre: "Carlos Rodríguez",
      ventas: 32,
      porcentaje: 85,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      nombre: "Luis Gómez",
      ventas: 28,
      porcentaje: 75,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      nombre: "Miguel Torres",
      ventas: 25,
      porcentaje: 68,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      nombre: "Ana Martínez",
      ventas: 22,
      porcentaje: 60,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      nombre: "Laura Sánchez",
      ventas: 18,
      porcentaje: 48,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Vendedores</CardTitle>
        <CardDescription>Los vendedores con mejor rendimiento</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {vendedores.map((vendedor) => (
            <div key={vendedor.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={vendedor.avatar || "/placeholder.svg"} alt={vendedor.nombre} />
                <AvatarFallback>{vendedor.nombre.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1 flex-1">
                <p className="text-sm font-medium leading-none">{vendedor.nombre}</p>
                <p className="text-sm text-muted-foreground">{vendedor.ventas} ventas</p>
              </div>
              <div className="ml-auto text-sm font-medium">{vendedor.porcentaje}%</div>
              <div className="ml-2 w-24">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${vendedor.porcentaje}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
