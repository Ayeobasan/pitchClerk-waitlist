import { Check } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Music Distribution",
      description:
        "Get your music on all major streaming platforms including Spotify, Apple Music, Amazon Music, and more.",
      features: ["Worldwide distribution", "Real-time analytics", "Revenue tracking", "Marketing support"],
    },
    {
      title: "Artist Development",
      description:
        "Comprehensive artist development program to help you grow your career and reach your full potential.",
      features: ["Professional coaching", "Image consulting", "Performance training", "Career strategy"],
    },
    {
      title: "Marketing & Promotion",
      description: "Strategic marketing campaigns to increase your visibility and grow your fanbase.",
      features: ["Social media management", "PR campaigns", "Playlist pitching", "Content strategy"],
    },
  ]

  return (
    <section className="py-16">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end services to help artists succeed in today's competitive music industry
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

