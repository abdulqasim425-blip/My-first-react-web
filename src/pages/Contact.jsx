import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! Connect a backend to receive messages.");
    e.target.reset();
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <p className="text-cyan-400">GET IN TOUCH</p>
        <h1 className="text-5xl font-bold mt-4">
          Contact <span className="text-cyan-400">Us</span>
        </h1>
        <p className="text-gray-400 mt-4">We'd love to hear from you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Let's Talk</h2>

          <p className="text-gray-400 leading-7">
            Have a question about a product or need assistance? Send us a
            message and we'll get back to you.
          </p>

          {[
            { icon: Mail, title: "Email", value: "support@megastore.com" },
            { icon: Phone, title: "Phone", value: "+92 300 123 4567" },
            { icon: MapPin, title: "Location", value: "Karachi, Pakistan" },
          ].map(({ icon: Icon, title, value }) => (
            <div key={title} className="flex items-center gap-5">
              <div className="bg-blue-500/10 p-4 rounded-xl">
                <Icon className="text-cyan-400" size={25} />
              </div>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-400">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0c1731] border border-blue-500/20 p-8 rounded-2xl space-y-5"
        >
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full bg-[#030817] border border-blue-500/30 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <input
            required
            type="email"
            placeholder="Your Email"
            className="w-full bg-[#030817] border border-blue-500/30 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <input
            required
            type="text"
            placeholder="Subject"
            className="w-full bg-[#030817] border border-blue-500/30 rounded-xl p-4 outline-none focus:border-cyan-400"
          />

          <textarea
            required
            rows="5"
            placeholder="Your Message"
            className="w-full bg-[#030817] border border-blue-500/30 rounded-xl p-4 outline-none focus:border-cyan-400 resize-none"
          />

          <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 rounded-xl font-bold hover:brightness-125">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
