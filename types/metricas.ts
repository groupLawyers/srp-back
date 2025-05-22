export interface Metricas {
  totalClientes: number
  ventasRealizadas: number
  ingresos: number
  clientesPendientes: number
  tasaConversion: number
}

export interface VentasPorPeriodo {
  periodo: string
  cantidad: number
}
