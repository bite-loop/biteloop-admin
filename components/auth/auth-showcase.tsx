import { ImageIcon } from "lucide-react";

export default function AuthShowcase() {
  return (
    <section className="relative flex items-center justify-center bg-white p-10 lg:p-16">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.06),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.05),transparent_40%)]" />

      <div className="relative flex h-full w-full items-center justify-center">
        <div className="flex h-[520px] w-full max-w-[560px] flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-red-200 bg-red-50/20 transition-all duration-300 hover:border-red-300 hover:bg-red-50/40">
          {/* Icon */}

          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-100 text-red-300">
            <ImageIcon size={42} strokeWidth={1.8} />
          </div>

          {/* Text */}

          <h3 className="text-3xl font-bold text-gray-700">
            Add your illustration here
          </h3>

          <p className="mt-4 text-lg text-gray-500">
            Recommended size:
            <span className="font-semibold">
              {" "}
              600 × 600px
            </span>
          </p>

          {/* Future Image */}

          {/*
          <Image
              src="/images/login-illustration.png"
              alt="Login Illustration"
              fill
              className="object-contain"
          />
          */}
        </div>
      </div>
    </section>
  );
}