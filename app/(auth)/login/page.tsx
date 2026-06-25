import AuthShowcase from "@/components/auth/auth-showcase";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
        <div className="grid min-h-[860px] lg:grid-cols-2">
          <LoginForm />

          <AuthShowcase />
        </div>
      </div>
    </main>
  );
}