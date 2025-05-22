// API simulada para clientes
// Reemplazar con llamadas reales a tu backend cuando esté listo

import type { Cliente } from "@/types/cliente"

// Datos simulados
const clientesMock: Cliente[] = [
  {
    id: "1",
    nombre: "María González",
    pais: "México",
    telefono: "+52 123 456 7890",
    email: "maria@ejemplo.com",
    fechaIngreso: "2023-05-15",
    pagado: true,
    vendedor: "Carlos Rodríguez",
    estado: "aceptado",
  },
  {
    id: "2",
    nombre: "Juan Pérez",
    pais: "Colombia",
    telefono: "+57 321 654 9870",
    email: "juan@ejemplo.com",
    fechaIngreso: "2023-06-20",
    pagado: false,
    vendedor: "Ana Martínez",
    estado: "pendiente",
  },
  // Puedes añadir más datos simulados aquí
]

// Funciones con async/await
export const clientesApi = {
  getAll: async (): Promise<Cliente[]> => {
    // Simular una llamada a la API
    await new Promise((resolve) => setTimeout(resolve, 500))
    return clientesMock
  },

  getById: async (id: string): Promise<Cliente | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const cliente = clientesMock.find((c) => c.id === id)
    return cliente || null
  },

  create: async (cliente: Omit<Cliente, "id">): Promise<Cliente> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const newCliente = {
      id: Math.random().toString(36).substring(2, 9),
      ...cliente,
    } as Cliente
    return newCliente
  },

  update: async (id: string, cliente: Partial<Cliente>): Promise<Cliente | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const index = clientesMock.findIndex((c) => c.id === id)
    if (index === -1) return null

    const updatedCliente = { ...clientesMock[index], ...cliente }
    return updatedCliente
  },

  delete: async (id: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  },

  getByFilter: async (filter: string): Promise<Cliente[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    if (!filter) return clientesMock

    return clientesMock.filter(
      (cliente) => cliente.estado === filter || cliente.nombre.toLowerCase().includes(filter.toLowerCase()),
    )
  },
}
