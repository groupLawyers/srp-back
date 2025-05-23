import type { Usuario } from "@/types/usuario"

export const authApi = {

  login: async (email: string, password: string): Promise<{ user: Usuario; token: string } | null> => {
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        console.error("Error al iniciar sesión", await res.text());
        return null;
      }

      const data = await res.json();
      return {
        user: data.user,
        token: data.token,
      };
    } catch (err) {
      console.error("Error en login:", err);
      return null;
    }
  },

  register: async (userData: {
    name: string, email: string, password: string, role: string
  }): Promise<{ user: Usuario; token: string } | null> => {
    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      if (!res.ok) {
        console.error("Error al registrar usuario", await res.text())
        return null
      }

      const data = await res.json()
      const newUser = { ...data.user, avatar: "/placeholder.svg?height=32&width=32" }
      return {
        user: newUser,
        token: "token-simulado-" + Math.random().toString(36).substring(2),
      }
    } catch (err) {
      console.error("Error en registro:", err)
      return null
    }
  },


  logout: async (): Promise<void> => {
    try {
      const res = await fetch("http://localhost:3001/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!res.ok) {
        console.error("Error al cerrar sesión", await res.text())
        return
      }
    } catch (err) {
      console.error("Error al cerrar sesión:", err)
      return
    }
  },

  getUser: async (): Promise<Usuario | null> => {
  try {
    const res = await fetch("http://localhost:3001/auth/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })

    if (!res.ok) {
      console.error("Error al obtener usuario", await res.text())
      return null
    }

    const data = await res.json()
    return data.user 
  } catch (err) {
    console.error("Error al obtener usuario:", err)
    return null
  }
},


  updateUser: async (userData: {
    nombre: string, email: string, password: string, role: string
  }): Promise<{ user: Usuario; token: string } | null> => {
    try {
      const res = await fetch("http://localhost:3001/auth/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      if (!res.ok) {
        console.error("Error al actualizar usuario", await res.text())
        return null
      }

      const data = await res.json()
      const newUser = { ...data.user, avatar: "/placeholder.svg?height=32&width=32" }
      return {
        user: newUser,
        token: "token-simulado-" + Math.random().toString(36).substring(2),
      }
    } catch (err) {
      console.error("Error en actualizar usuario:", err)
      return null
    }
  },
}

