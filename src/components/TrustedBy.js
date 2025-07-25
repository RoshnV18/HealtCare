// components/TrustedBy.jsx
import { Clock, Shield, Users } from "lucide-react";
import Image from "next/image";

const TrustedBy = () => {
  const featuredHospitals = [
    "Apollo",
    "Max",
    "Fortis",
    "AIIMS",
    "Medanta",
    "BLK",
  ];

  const hospitalLogos = [
    { src: "/hospital1.png", alt: "Hospital 1" },
    { src: "/hospital2.png", alt: "Hospital 2" },
    { src: "/hospital3.png", alt: "Hospital 3" },
    { src: "/hospital4.png", alt: "Hospital 4" },
  ];

  return (
    <section className="bg-[#F6F6F6]  px-6">
      <h2 className="text-3xl font-bold text-center text-[#1F1F1F] mb-4">
        Trusted by Leading Hospitals & Clinics
      </h2>
      <p className="text-center text-gray-600 mb-10 text-sm">
        Join 20+ healthcare providers who trust Tridev to streamline their
        operations.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {hospitalLogos.map((logo, index) => (
          <div key={index} className="relative w-36  h-16 sm:w-36 sm:h-14">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              style={{ objectFit: "contain" }}
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 mb-20 ">
        {featuredHospitals.map((hospital, index) => (
          <span
            key={index}
            className="bg-white px-4 py-2 text-sm text-gray-500 rounded shadow-sm hover:bg-[#F58A1F] hover:text-white transition"
          >
            {hospital}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Shield className="text-green-500 w-5 h-5" />
          <span>HIPAA Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-green-500 w-5 h-5" />
          <span>99.99% Uptime</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="text-green-500 w-5 h-5" />
          <span>Secure Infrastructure</span>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs italic text-gray-400">
          Psychology Trigger:{" "}
          <span className="text-gray-600">
            Social proof + authority = comfort & trust
          </span>
        </p>
      </div>
    </section>
  );
};

export default TrustedBy;
