import {
  Truck,
  ShieldCheck,
  Headphones,
  RefreshCw,
  CreditCard,
  PackageCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Get your orders delivered quickly and safely.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      desc: "Shop confidently with secure checkout.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our support team is here to help.",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      desc: "Simple returns within 30 days.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      desc: "Convenient payment options for customers.",
    },
    {
      icon: PackageCheck,
      title: "Quality Products",
      desc: "Carefully selected products for your needs.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-cyan-400">WHAT WE OFFER</p>
        <h1 className="text-5xl font-bold mt-4">
          Our <span className="text-cyan-400">Services</span>
        </h1>
        <p className="text-gray-400 mt-5">
          More than just shopping. We make every experience better.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#0c1731] border border-blue-500/20 rounded-2xl p-9 hover:border-cyan-400/60 hover:-translate-y-2 transition"
          >
            <div className="bg-blue-500/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-7">
              <Icon size={32} className="text-cyan-400" />
            </div>

            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-400 mt-4 leading-7">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
