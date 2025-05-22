import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-muted/40 to-background dark:from-background dark:to-muted/20">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  )
}
