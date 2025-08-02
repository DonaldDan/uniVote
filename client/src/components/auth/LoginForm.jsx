import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const navigate = useNavigate()
  const { login } = useAuth() // ✅ Move useAuth inside the component

  const onSubmit = async (values) => {
    try {
      const baseURL = import.meta.env.VITE_API_URL

      const res = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!res.ok) throw new Error("Invalid credentials")
      const data = await res.json()

      login(data) // ✅ Update auth state via context

      toast.success(`Welcome back, ${data.user.name}!`, { duration: 3000 })

      if (data.user?.role === "admin") {
        navigate("/dashboard")
      } else {
        navigate("/landing")
      }

    } catch (error) {
      toast.error(error.message || "Login failed")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10 border p-6 rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="you@youremail.com" autoComplete="email" {...field} />
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="••••••••" autoComplete="current-password" {...field} />
              <FormMessage />
            </FormItem>
          )} />
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </Form>
    </div>
  )
}
