import Image from "next/image"

export function Team() {
  const teamMembers = [
    {
      name: "Nwakwuo David",
      role: "Founder/CEO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Brian Chege",
      role: "Partnership Lead",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Blessing Tenumah",
      role: "Head of Content Review & Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Milonde Nama",
      role: "A&R/ Country Rep",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="sm:container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Innovators</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Pitch Clerk's management team includes experienced professionals in the music industry, technology, and
          business management fields.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

