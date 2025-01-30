import Image from "next/image";

export function DashboardPreview() {
    return (
      <section className="py-16">
        <div className="sm:container mx-auto px-4">
          <div className="bg-white overflow-hidden">
            <Image
              src={`/Hero.png`}
              alt="PitchClerk dashboard"
              className="h-auto object-contain w-full"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </section>
    )
  }
  
  