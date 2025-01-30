import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTA() {
  return (
    <section className="py-16">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-sm font-medium text-purple-600 mb-2">Yeah, We Have More</div>
          <h2 className="text-3xl font-bold mb-4">
            Join Top Artist And
            <br />
            Creators Around The World
            <br />
            Using Pitchclerk
          </h2>
        </div>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-4">Get early access!</div>
          <div className="flex gap-2">
            <Input type="email" placeholder="Enter Email Address" className="flex-1" />
            <Button className="bg-purple-600 text-white hover:bg-purple-700">Join Waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

