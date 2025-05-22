import { PerfilForm } from "@/components/perfil/perfil-form"
import { PerfilHeader } from "@/components/perfil/perfil-header"

export default function PerfilPage() {
  return (
    <div className="flex flex-col gap-6">
      <PerfilHeader />
      <PerfilForm />
    </div>
  )
}
