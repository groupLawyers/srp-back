import { VendedoresTable } from "@/components/vendedores/vendedores-table"
import { VendedoresHeader } from "@/components/vendedores/vendedores-header"

export default function VendedoresPage() {
  return (
    <div className="flex flex-col gap-6">
      <VendedoresHeader />
      <VendedoresTable />
    </div>
  )
}
