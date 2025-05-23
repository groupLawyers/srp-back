"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { TopBar } from "@/components/dashboard/top-bar"
import { UserContext, UserProvider } from "@/lib/context/user-context"
import { ChatbotIcon } from "@/components/chatbot/chatboticon"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState({
    name: "Carlos Rodríguez",
    email: "carlos@ejemplo.com",
    role: "admin", // o "vendedor"
    avatar: "/placeholder.svg?height=32&width=32",
  })

  const pathname = usePathname()
  console.log(UserContext.Consumer, "nombre")
  console.log(UserContext.Provider.name, "provicer")

  return (
    <UserProvider>
      <SidebarProvider>
        <div className="flex flex-col w-full">
          <TopBar user={user} />
          <div className="flex flex-1">
            <AppSidebar user={user} pathname={pathname} />
            <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">{children}</main>
          </div>
        </div>
      </SidebarProvider>
      <ChatbotIcon/>
    </UserProvider>
  )
}
