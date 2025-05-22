"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useContext } from "react"
import { UserContext } from "@/lib/context/user-context"

export function VendedoresHeader() {
  const { isAdmin } = useContext(UserContext)

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Vendedores</h1>
        <p className="text-muted-foreground">Gestiona tu equipo de ventas</p>
      </div>
      {isAdmin && (
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nuevo Vendedor
        </Button>
      )}
    </div>
  )
}
