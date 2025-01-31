import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
  return (
    <section className="pt-32 pb-16 text-center">
      <div className="sm:container mx-auto px-4">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-600 bg-purple-50 rounded-full">
          Revolutionizing Music Discovery
        </div>
        <h1 className="max-w-4xl mx-auto font-[Urbanist] text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Pitch Your Music, Get <span className="block">On Playlist And</span>
          <span className="text-purple-600">Advance Your Career</span>
        </h1>
        <p className="max-w-xl font-[Manrope] mx-auto text-lg text-[#656565]  mb-8">
          Empowering artists and simplifying music discovery. Connect directly with DSPs, publishers, labels, editors,
          and press outlets globally, with a focus on Sub-Saharan Africa.
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

