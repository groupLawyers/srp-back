import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RecentLeads() {
  const leads = [
    {
      id: 1,
      name: "María González",
      email: "maria@ejemplo.com",
      country: "México",
      status: "pendiente",
      date: "Hace 2 horas",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      name: "Juan Rodríguez",
      email: "juan@ejemplo.com",
      country: "Colombia",
      status: "aceptado",
      date: "Hace 5 horas",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      name: "Ana Martínez",
      email: "ana@ejemplo.com",
      country: "Argentina",
      status: "rechazado",
      date: "Hace 1 día",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      name: "Carlos López",
      email: "carlos@ejemplo.com",
      country: "España",
      status: "pendiente",
      date: "Hace 1 día",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 5,
      name: "Laura Sánchez",
      email: "laura@ejemplo.com",
      country: "Chile",
      status: "aceptado",
      date: "Hace 2 días",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Clientes Recientes</CardTitle>
        <CardDescription>Los últimos clientes añadidos al sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.id} className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={lead.avatar || "/placeholder.svg"} alt={lead.name} />
                <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{lead.name}</p>
                  <Badge
                    variant={
                      lead.status === "aceptado" ? "default" : lead.status === "pendiente" ? "outline" : "destructive"
                    }
                  >
                    {lead.status === "aceptado" ? "Aceptado" : lead.status === "pendiente" ? "Pendiente" : "Rechazado"}
                  </Badge>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <p>{lead.email}</p>
                  <span className="mx-1">•</span>
                  <p>{lead.country}</p>
                </div>
                <p className="text-xs text-muted-foreground">{lead.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
