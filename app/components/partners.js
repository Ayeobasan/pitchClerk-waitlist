"use client"

import Image from "next/image"

export function Partners() {
  const partners = [
    { name: "Virgin Music Group", logo: "/virgin.png", width: 200 },
    { name: "Apprise Music", logo: "/apprise.png", width: 180 },
    { name: "Music Platform", logo: "/play.png", width: 200 },
    { name: "1Lane", logo: "/partner3.jpeg", width: 150 },
    { name: "PitchallyGroup", logo: "/pitch.png", width: 200 },
  ]

  // Duplicate partners for smooth infinite scrolling
  const scrollPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-[#F9FAFB] overflow-hidden">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to provide the best opportunities for our artists.
          </p>
        </div>

        <div className="relative w-full">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div className="flex w-max animate-scroll">
              {scrollPartners.map((partner, index) => (
                <div key={index} className="mx-8 w-[200px] flex-shrink-0">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={partner.width}
                    height={"80"}
                    className="w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  )
}
