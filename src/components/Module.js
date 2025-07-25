const Module = () => {
  const features = [
    {
      icon: "🧑‍⚕️",
      title: "Patient Management",
      description: "Streamline patient records, visits, and history.",
    },
    {
      icon: "💊",
      title: "Pharmacy Billing",
      description: "Effortless invoicing & inventory control.",
    },
    {
      icon: "🧪",
      title: "Lab Reports",
      description: "Automated and accurate test results.",
    },
    {
      icon: "📅",
      title: "Appointments",
      description: "Schedule and manage appointments easily.",
    },
    {
      icon: "👥",
      title: "Staff Scheduling",
      description: "Manage shifts and team availability.",
    },
    {
      icon: "📲",
      title: "WhatsApp Alerts",
      description: "Instant patient & staff notifications.",
    },
  ];

  return (
    <section className="py-16 bg-[#F6F6F6]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Modules / Features Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 transition hover:border-[#F58A1F] shadow-sm hover:shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Module;
