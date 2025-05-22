// API simulada para métricas
// Reemplazar con llamadas reales a tu backend cuando esté listo

import type { Metricas, VentasPorPeriodo } from "@/types/metricas"

// Datos simulados
const metricasMock: Metricas = {
  totalClientes: 245,
  ventasRealizadas: 87,
  ingresos: 24500,
  clientesPendientes: 32,
  tasaConversion: 35.5,
}

const ventasPorPeriodoMock = {
  semanal: [
    { periodo: "L", cantidad: 5 },
    { periodo: "M", cantidad: 7 },
    { periodo: "X", cantidad: 4 },
    { periodo: "J", cantidad: 8 },
    { periodo: "V", cantidad: 9 },
    { periodo: "S", cantidad: 3 },
    { periodo: "D", cantidad: 2 },
  ],
  mensual: Array.from({ length: 12 }, (_, i) => ({
    periodo: (i + 1).toString(),
    cantidad: Math.floor(Math.random() * 30) + 10,
  })),
  anual: Array.from({ length: 5 }, (_, i) => ({
    periodo: (new Date().getFullYear() - 4 + i).toString(),
    cantidad: Math.floor(Math.random() * 100) + 50,
  })),
}

export const metricasApi = {
  getResumen: async (): Promise<Metricas> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return metricasMock
  },

  getVentasPorPeriodo: async (periodo: "semanal" | "mensual" | "anual"): Promise<VentasPorPeriodo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return ventasPorPeriodoMock[periodo]
  },

  getClientesPorEstado: async (): Promise<{ estado: string; cantidad: number }[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return [
      { estado: "pendiente", cantidad: 32 },
      { estado: "aceptado", cantidad: 87 },
      { estado: "rechazado", cantidad: 24 },
      { estado: "seguimiento", cantidad: 102 },
    ]
  },
}
