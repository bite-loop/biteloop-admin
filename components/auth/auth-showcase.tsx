export default function AuthShowcase() {
  return (
    <section className="relative hidden overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500 lg:flex flex-col justify-between p-12 text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-black/10 blur-3xl" />

      {/* Top Content */}
      <div className="relative z-10">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
          Admin Portal
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight">
          BiteLoop
          <br />
          Admin
        </h1>

        <p className="mt-6 max-w-md text-lg leading-8 text-red-50/90">
          Control every part of the BiteLoop ecosystem from one modern,
          secure and scalable administration platform.
        </p>

        <div className="mt-12 space-y-5">
          {[
            "Restaurant Management",
            "User Management",
            "Order Monitoring",
            "Revenue Analytics",
            "Platform Operations",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                ✓
              </div>

              <span className="text-base font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="relative z-10 mt-12 flex flex-1 items-center justify-center">
        <div className="flex h-[340px] w-full max-w-md items-center justify-center rounded-3xl border-2 border-dashed border-white/30 bg-white/10 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-lg font-semibold">
              Illustration Placeholder
            </p>

            <p className="mt-2 text-sm text-red-100">
              Add your admin illustration here
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-10 border-t border-white/15 pt-6">
        <p className="text-sm text-red-100">
          Enterprise Dashboard • Secure Authentication • Built for Scale
        </p>
      </div>
    </section>
  );
}