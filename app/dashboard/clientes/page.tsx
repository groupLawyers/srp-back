import { ClientesTable } from "@/components/clientes/clientes-table"
import { ClientesHeader } from "@/components/clientes/clientes-header"

export default function ClientesPage() {
  return (
    <div className="flex flex-col gap-6">
      <ClientesHeader />
      <ClientesTable />
    </div>
  )
}
