export function Stats() {
  const stats = [
    { number: "2,000+", label: "Artists Onboarded" },
    { number: "385+", label: "Pitches Submitted" },
    { number: "70%", label: "Success Rate" },
    { number: "+150", label: "sucessful placement" },
  ]

  return (
    <section className="py-16 bg-purple-600 text-white">
      <div className="sm:container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

