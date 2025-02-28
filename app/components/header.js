"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { InstagramIcon, LinkedinIcon, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 300) // Match this with the transition duration
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="sm:container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={`/pitchally.png`} alt="Pitchally Logo" className="h-auto w-auto" width={90} height={42} />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Waitlist
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Feature
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Project
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              <Image src="/tele.svg" alt="telegram" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/pitchclerk-music-group/?viewAsMember=true" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              {/* <Image src="/dis.svg" alt="dicord" width={24} height={24} /> */}
              <LinkedinIcon width={24} height={24} />
            </Link>
            <Link href="https://www.instagram.com/pitchallyapp/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              {/* <Image src="/x.svg" alt="x" width={24} height={24} /> */}
              <InstagramIcon width={24} height={24} />
            </Link>

          </div>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="absolute  mtop-full botttom-0 h-[100vh] left-0 right-0 bg-white shadow-md md:hidden">
          <nav className={`flex flex-col sm:container space-y-5 mx-auto text-center p-4 ${isTransitioning ? "opacity-100" : mobileMenuOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out`}>
            <Link href="#" className="p-2 rounded-sm text-sm font-medium hover:bg-purple-200 text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="py-2 text-sm font-medium hover:bg-purple-200 text-gray-600 hover:text-gray-900">
              Waitlist
            </Link>
            <Link href="#" className="py-2 text-sm font-medium hover:bg-purple-200 text-gray-600 hover:text-gray-900">
              Feature
            </Link>
            <Link href="#" className="py-2 text-sm font-medium hover:bg-purple-200 text-gray-600 hover:text-gray-900">
              Project
            </Link>
            <div className="flex justify-center items-center space-x-8">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <Image src="/tele.svg" alt="telegram" width={24} height={24} />
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <Image src="/dis.svg" alt="dicord" width={24} height={24} />
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <Image src="/x.svg" alt="x" width={24} height={24} />
              </Link>
            </div>
          </nav>

        </div>
      )}
    </header>
  )
}

