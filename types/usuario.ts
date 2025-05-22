export interface Usuario {
  id: string
  nombre: string
  email: string
  role: "admin" | "vendedor"
  avatar?: string
  telefono?: string
  bio?: string
}
