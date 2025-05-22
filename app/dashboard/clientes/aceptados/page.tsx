import { ClientesTable } from "@/components/clientes/clientes-table"
import { ClientesHeader } from "@/components/clientes/clientes-header"

export default function ClientesAceptadosPage() {
  return (
    <div className="flex flex-col gap-6">
      <ClientesHeader title="Clientes Aceptados" />
      <ClientesTable filter="aceptado" />
    </div>
  )
}
