"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useContext } from "react"
import { UserContext } from "@/lib/context/user-context"

interface ClientesHeaderProps {
  title?: string
}

export function ClientesHeader({ title = "Clientes" }: ClientesHeaderProps) {
  const { isAdmin } = useContext(UserContext)

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">Gestiona tus clientes potenciales</p>
      </div>
      {isAdmin && (
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nuevo Cliente
        </Button>
      )}
    </div>
  )
}
