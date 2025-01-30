export function Stats() {
    const stats = [
      { number: "500+", label: "Artists Signed" },
      { number: "50M+", label: "Monthly Streams" },
      { number: "100+", label: "Industry Partners" },
      { number: "25+", label: "Countries Reached" },
    ]
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="sm:container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  