export interface Vendedor {
  id: string
  nombre: string
  email: string
  telefono: string
  fechaIngreso: string
  clientesAsignados: number
  ventasRealizadas: number
  rendimiento: "alto" | "medio" | "bajo"
  avatar?: string
  bio?: string
}
