import AuthShowcase from "@/components/auth/auth-showcase";
import SignupForm from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-[42%_58%]">
      <SignupForm />

      <AuthShowcase />
    </main>
  );
}