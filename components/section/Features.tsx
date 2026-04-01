import { 
  FaCheckCircle, 
  FaTruck, 
  FaStore, 
  FaUsers, 
  FaClock, 
  FaStar 
} from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Premium Quality",
    desc: "Kitchen cabinets Tampa homeowners trust — built with durable materials for Florida's climate.",
  },
  {
    icon: <FaTruck />,
    title: "Warehouse-Direct Pricing",
    desc: "No middleman markup. Buy direct and save on modern + shaker styles built for today's homes.",
  },
  {
    icon: <FaStore />,
    title: "Local Showroom",
    desc: "Visit our Tampa showroom to see finishes, feel materials, and choose with full confidence.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Guidance",
    desc: "From selection to completion — our team walks you through every step of your cabinet project.",
  },
  {
    icon: <FaClock />,
    title: "Fast Availability",
    desc: "Ready stock for contractors and remodelers. Keep your jobs on schedule with consistent inventory.",
  },
  {
    icon: <FaStar />,
    title: "5-Star Craftsmanship",
    desc: "Soft-close drawers, precision-fit finishes, and durable construction across every cabinet line.",
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-5">
            Where Quality Meets Value
          </h2>

          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            At Southern Design Warehouse, we help you turn ordinary kitchens into stunning, functional spaces — without overpaying.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 border border-stone-100 rounded-sm hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-sm flex items-center justify-center mb-5 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>

              <h3 className="text-stone-900 font-bold text-lg mb-2">
                {feature.title}
              </h3>

              <p className="text-stone-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-stone-900 rounded-sm p-10 text-center">
          <p className="text-stone-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Stop Settling
          </p>

          <p className="text-white text-3xl sm:text-4xl font-bold mb-2">
            Stop settling for outdated kitchens.
          </p>

          <p className="text-red-400 text-xl font-medium mb-8">
            Create a space you&apos;re proud to walk into every day.
          </p>

          <a
            href="#quote"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-4 rounded-sm transition-colors"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}