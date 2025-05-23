import { MetricasHeader } from "@/components/metricas/metricas-header"
import { MetricasCards } from "@/components/metricas/metricas-cards"
import { MetricasCharts } from "@/components/metricas/metricas-charts"
import { TopVendedores } from "@/components/metricas/top-vendedores"

export default function MetricasPage() {
  return (
    <div className="flex flex-col gap-6">
      <MetricasHeader />
      <MetricasCards />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <MetricasCharts />.
        <TopVendedores />
      </div>
    </div>
  )
}
