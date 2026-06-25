import AuthShowcase from "@/components/auth/auth-showcase";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-[42%_58%]">
      <LoginForm />

      <AuthShowcase />
    </main>
  );
}