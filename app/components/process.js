export function Process() {
  const steps = [
    {
      number: "01",
      title: "Submit Your Pitch",
      description: "Sign Up, By creating an account, And then Submit a pitch For.",
    },
    {
      number: "02",
      title: "Review & Feedback",
      description: "Our Content review Team Reviews & Optimizes Your Pitch, Before approving.",
    },
    {
      number: "03",
      title: "⁠Pitch Optimization",
      description: "Our system streamlines the submission process and optimizing you chances of getting picked by editors, reducing inefficiencies and saving artist's time",
    },
    {
      number: "04",
      title: "Go Live",
      description: "Your Release Goes Live & gets support",
    },
  ]

  return (
    <section className="py-16">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are revolutionizing the way industry professionals discover new music & offering artists a powerful Pitch tool

          </p>
        </div>
        <div className="grid sm:grid-cols-2 xd:grid-cols-4 gap-8">
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

