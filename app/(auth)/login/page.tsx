import AuthShowcase from "@/components/auth/auth-showcase";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br
from-red-50
via-white
to-neutral-100 flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-7xl overflow-hidden rounded-[36px] bg-white shadow-[0_30px_100px_rgba(0,0,0,.18)]">
        <div className="grid min-h-[860px] lg:grid-cols-2">
          <LoginForm />

          <AuthShowcase />
        </div>
      </div>
    </main>
  );
}