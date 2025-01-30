import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <section className="pt-32 pb-16 text-center">
      <div className="sm:container mx-auto px-4">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-600 bg-purple-50 rounded-full">
          Revolutionizing The Music Industry
        </div>
        <h1 className="max-w-4xl mx-auto text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Your Gateway To <span className="block">Music Industry Success</span>
          <span className="text-purple-600">Professional Music Distribution</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-600 mb-8">
          We're more than just a record label - we're your partner in creating, distributing, and monetizing your music
          globally
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
            Submit Your Demo
          </Button>
          <Button size="lg" variant="outline">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

