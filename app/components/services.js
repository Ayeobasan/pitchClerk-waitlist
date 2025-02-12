import { Check } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Distribution & Marketing",
      description: "Submit a pitch to aggregators for distribution and marketing deals.",
      features: [
        "Access to major aggregators",
        "Marketing strategy support",
        "Global distribution channels",
        "Performance tracking",
      ],
    },
    {
      title: "DSP Playlist Placement",
      description: "Submit your music for playlist placement to DSP editors and curators across all genres.",
      features: [
        "Targeted playlist submissions",
        "Genre-specific curation",
        "Increased visibility",
        "Streaming growth opportunities",
      ],
    },
    {
      title: "Press, Radio & Television Feature",
      description:
        "Pitch releases for radio placement and articles for press platforms across press & radio stations globally.",
      features: [
        "Media exposure opportunities",
        "Radio airplay submissions",
        "Press release distribution",
        "TV feature pitching",
      ],
    },
    {
      title: "Label & Advance",
      description: "Submit your projects and catalogs for review and receive advances from our partners.",
      features: [
        "Label partnership opportunities",
        "Catalog valuation",
        "Advance funding options",
        "Career development support",
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Pitch Tool</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join top artists and creators worldwide who use Pitchally to get in front of editors and industry
            professionals. 
            {/* We are dedicated to advocating for emerging artists and helping them reach broader audiences. */}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
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

