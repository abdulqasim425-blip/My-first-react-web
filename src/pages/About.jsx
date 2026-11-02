import { Award, Users, Globe, ShieldCheck } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "1M+", label: "Happy Customers" },
    { icon: Award, number: "500+", label: "Products" },
    { icon: Globe, number: "50+", label: "Countries" },
    { icon: ShieldCheck, number: "100%", label: "Secure Shopping" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-cyan-400 font-semibold">ABOUT MEGA STORE</p>

          <h1 className="text-5xl font-extrabold mt-5 leading-tight">
            Building a Better
            <span className="block text-cyan-400">Shopping Experience</span>
          </h1>

          <p className="text-gray-400 mt-7 leading-8">
            Mega Store is your trusted online shopping destination. We bring
            quality products, competitive prices and a convenient shopping
            experience together in one place.
          </p>

          <p className="text-gray-400 mt-4 leading-8">
            Our goal is to make online shopping simple, secure and enjoyable for
            everyone.
          </p>

          <div className="mt-7 space-y-4">
            {[
              "Quality products",
              "Affordable prices",
              "Fast delivery",
              "Customer satisfaction",
            ].map((item) => (
              <p key={item} className="text-gray-200">
                <span className="text-cyan-400 mr-3">✓</span>
                {item}
              </p>
            ))}
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000"
          alt="Mega Store workspace"
          className="rounded-3xl border border-blue-500/30 shadow-2xl shadow-blue-500/10"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
        {stats.map(({ icon: Icon, number, label }) => (
          <div
            key={label}
            className="bg-[#0c1731] border border-blue-500/20 p-7 rounded-2xl text-center"
          >
            <Icon className="text-cyan-400 mx-auto mb-4" size={32} />
            <h2 className="text-3xl font-bold">{number}</h2>
            <p className="text-gray-400 mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
