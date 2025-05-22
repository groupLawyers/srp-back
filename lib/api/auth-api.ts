// API simulada para autenticación
// Reemplazar con llamadas reales a tu backend cuando esté listo

import type { Usuario } from "@/types/usuario"

// Usuarios simulados
const usuariosMock: Usuario[] = [
  {
    id: "1",
    nombre: "Carlos Rodríguez",
    email: "carlos@ejemplo.com",
    role: "admin",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    nombre: "Ana Martínez",
    email: "ana@ejemplo.com",
    role: "vendedor",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export const authApi = {
  login: async (email: string, password: string): Promise<{ user: Usuario; token: string } | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Simular autenticación exitosa
    const user = usuariosMock.find((u) => u.email === email)
    if (!user) return null

    return {
      user,
      token: "token-simulado-" + Math.random().toString(36).substring(2),
    }
  },

  register: async (userData: {
    nombre: string
    email: string
    password: string
    role: string
  }): Promise<{ user: Usuario; token: string } | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const newUser: Usuario = {
      id: Math.random().toString(36).substring(2, 9),
      nombre: userData.nombre,
      email: userData.email,
      role: userData.role as "admin" | "vendedor",
      avatar: "/placeholder.svg?height=32&width=32",
    }

    return {
      user: newUser,
      token: "token-simulado-" + Math.random().toString(36).substring(2),
    }
  },

  logout: async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  },

  getCurrentUser: async (): Promise<Usuario | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    // Simular obtener usuario de la sesión actual
    return usuariosMock[0]
  },

  updateProfile: async (userId: string, userData: Partial<Usuario>): Promise<Usuario | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const userIndex = usuariosMock.findIndex((u) => u.id === userId)
    if (userIndex === -1) return null

    const updatedUser = { ...usuariosMock[userIndex], ...userData }
    return updatedUser
  },

  changePassword: async (userId: string, currentPassword: string, newPassword: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  },
}
