import { ClientesTable } from "@/components/clientes/clientes-table"
import { ClientesHeader } from "@/components/clientes/clientes-header"

export default function ClientesRechazadosPage() {
  return (
    <div className="flex flex-col gap-6">
      <ClientesHeader title="Clientes Rechazados" />
      <ClientesTable filter="rechazado" />
    </div>
  )
}
