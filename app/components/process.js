export function Process() {
    const steps = [
      {
        number: "01",
        title: "Submit Your Demo",
        description: "Share your best work with us through our submission platform",
      },
      {
        number: "02",
        title: "Review & Feedback",
        description: "Our team evaluates your music and provides professional feedback",
      },
      {
        number: "03",
        title: "Development Plan",
        description: "We create a customized strategy for your career growth",
      },
      {
        number: "04",
        title: "Launch & Promote",
        description: "We help you release and market your music effectively",
      },
    ]
  
    return (
      <section className="py-16">
        <div className="sm:container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process helps artists go from demo to distribution
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  