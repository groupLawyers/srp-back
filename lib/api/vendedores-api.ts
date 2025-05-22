// API simulada para vendedores
// Reemplazar con llamadas reales a tu backend cuando esté listo

import type { Vendedor } from "@/types/vendedor"

// Datos simulados
const vendedoresMock: Vendedor[] = [
  {
    id: "1",
    nombre: "Carlos Rodríguez",
    email: "carlos@ejemplo.com",
    telefono: "+52 123 456 7890",
    fechaIngreso: "2022-01-15",
    clientesAsignados: 45,
    ventasRealizadas: 32,
    rendimiento: "alto",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    nombre: "Ana Martínez",
    email: "ana@ejemplo.com",
    telefono: "+57 321 654 9870",
    fechaIngreso: "2022-03-20",
    clientesAsignados: 38,
    ventasRealizadas: 25,
    rendimiento: "medio",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  // Puedes añadir más datos simulados aquí
]

export const vendedoresApi = {
  getAll: async (): Promise<Vendedor[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return vendedoresMock
  },

  getById: async (id: string): Promise<Vendedor | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const vendedor = vendedoresMock.find((v) => v.id === id)
    return vendedor || null
  },

  create: async (vendedor: Omit<Vendedor, "id">): Promise<Vendedor> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const newVendedor = {
      id: Math.random().toString(36).substring(2, 9),
      ...vendedor,
    } as Vendedor
    return newVendedor
  },

  update: async (id: string, vendedor: Partial<Vendedor>): Promise<Vendedor | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const index = vendedoresMock.findIndex((v) => v.id === id)
    if (index === -1) return null

    const updatedVendedor = { ...vendedoresMock[index], ...vendedor }
    return updatedVendedor
  },

  delete: async (id: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  },

  getTopVendedores: async (limit = 5): Promise<Vendedor[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    // Ordenar por ventas realizadas y devolver los primeros 'limit'
    return [...vendedoresMock].sort((a, b) => b.ventasRealizadas - a.ventasRealizadas).slice(0, limit)
  },
}
