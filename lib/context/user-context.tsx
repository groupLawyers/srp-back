"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import type { Usuario } from "@/types/usuario"
import { authApi } from "@/lib/api/auth-api"

interface UserContextType {
  user: Usuario | null
  setUser: (user: Usuario | null) => void
  isLoading: boolean
  isAdmin: boolean
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isLoading: true,
  isAdmin: false,
})

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      try {
        // Intentar cargar el usuario desde localStorage o una API
        const data = JSON.parse(localStorage.getItem("user") as string)
        setUser(data)
      } catch (error) {
        console.error("Error cargando usuario:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  const isAdmin = user?.role === "admin"

  return <UserContext.Provider value={{ user, setUser, isLoading, isAdmin }}>{children}</UserContext.Provider>
}
