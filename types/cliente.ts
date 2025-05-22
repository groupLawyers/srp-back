export interface Cliente {
  id: string
  nombre: string
  pais: string
  telefono: string
  email: string
  fechaIngreso: string
  pagado: boolean
  vendedor: string
  vendedorId?: string
  estado: "pendiente" | "aceptado" | "rechazado" | "seguimiento"
  notas?: string
  ultimoContacto?: string
}
