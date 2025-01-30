import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Working with this label has been transformative for my career. They truly understand artist development.",
      author: "Sarah Johnson",
      role: "Independent Artist",
      rating: 5,
    },
    {
      quote:
        "The team's expertise in digital distribution and marketing has helped me reach audiences I never thought possible.",
      author: "Marcus Chen",
      role: "Recording Artist",
      rating: 5,
    },
    {
      quote: "Their artist development program gave me the tools and confidence I needed to succeed in the industry.",
      author: "Alex Rivera",
      role: "Emerging Artist",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Artist Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from artists who have transformed their careers with our support
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
              <div className="mt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

