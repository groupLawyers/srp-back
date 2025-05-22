"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  telefono: z.string().min(6, { message: "Número de teléfono inválido" }),
  bio: z.string().optional(),
})

export function PerfilForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "Carlos Rodríguez",
      email: "carlos@ejemplo.com",
      telefono: "+52 123 456 7890",
      bio: "Vendedor con experiencia en el sector tecnológico.",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    // Simulación de actualización
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Perfil actualizado",
        description: "Tu información ha sido actualizada correctamente",
      })
    }, 1000)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Información Personal</CardTitle>
          <CardDescription>Actualiza tu información personal</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Avatar" />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  Cambiar foto
                </Button>
              </div>
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Pérez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="correo@ejemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="+52 123 456 7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biografía</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Cuéntanos sobre ti..." className="resize-none" {...field} />
                    </FormControl>
                    <FormDescription>Breve descripción sobre tu experiencia y habilidades.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Guardando..." : "Guardar cambios"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Seguridad</CardTitle>
          <CardDescription>Actualiza tu contraseña y configuración de seguridad</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <FormLabel>Contraseña actual</FormLabel>
            <Input type="password" />
          </div>
          <div className="space-y-2">
            <FormLabel>Nueva contraseña</FormLabel>
            <Input type="password" />
          </div>
          <div className="space-y-2">
            <FormLabel>Confirmar nueva contraseña</FormLabel>
            <Input type="password" />
          </div>
          <Button>Actualizar contraseña</Button>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <div className="space-y-2">
            <CardTitle className="text-base">Sesiones activas</CardTitle>
            <CardDescription>Dispositivos que han iniciado sesión en tu cuenta recientemente.</CardDescription>
            <div className="pt-2">
              <Button variant="outline" className="w-full">
                Cerrar todas las sesiones
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
