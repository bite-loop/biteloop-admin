const services = [
  "API",
  "Database",
  "Firebase",
  "Payments",
];

export default function PlatformHealth() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Platform Health
      </h3>

      <div className="space-y-5">
        {services.map((service) => (
          <div
            key={service}
            className="flex items-center justify-between"
          >
            <span>{service}</span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Operational
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}