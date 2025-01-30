import { Music, Share2, ListMusic, Upload } from 'lucide-react'
import Image from 'next/image'

export function MusicFeatures() {
  const tracks = [
    {
      title: "Damn",
      artist: "Omah Lay",
      image: "/omah.png"
    },
    {
      title: "Usual ft Nonso amadi",
      artist: "Melvitto",
      image: "/unsual.png"
    },
    {
      title: "Higher",
      artist: "Burna Boy",
      image: "/burna.png"
    }
  ]

  const platforms = [
    { name: "Apple Music", color: "text-gray-900" },
    { name: "Audiomack", color: "text-purple-600" },
    { name: "Boomplay", color: "text-gray-900" },
    { name: "Deezer", color: "text-blue-500" },
    { name: "YouTube", color: "text-green-500" },
    { name: "Tidal", color: "text-red-500" },
    { name: "Pandora", color: "text-red-500" },
    { name: "Sound", color: "text-yellow-500" }
  ]

  return (
    <section className="py-16">
      <div className="sm:container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">See what's coming</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Track List */}
          <div className=" bg-[#E9E9E9] shadow-inner rounded-xl p-4 ">
            <div className="space-y-6 xs:flex flex-row-reverse md:block ">
              <div className="space-y-4">
                {tracks.map((track, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className=" rounded-lg overflow-hidden">
                      <Image
                        src={track.image || "/placeholder.svg"}
                        alt={track.title}
                        width={1000}
                        height={1000}
                        className="sm:w-[321px] md:w-full h-full object-cover"
                      />
                    </div>
                    {/* <div>
                      <h4 className="font-medium text-sm">{track.title}</h4>
                      <p className="text-xs text-gray-600">{track.artist}</p>
                    </div> */}
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Pitch Your Music</h3>
                <p className="text-sm text-gray-600">
                  Get your tracks in front of playlist curators and industry professionals for maximum exposure.
                </p>
              </div>

            </div>
          </div>
          <div>
            {/* Middle Column - Main Features */}
            <div className="space-y-6">
              <div className='xsx:flex space-y-6 xsx:space-y-0 gap-6'>
                <div className="bg-[#E9E9E9] boder-[1] sm:w-[70%] rounded-xl p-4 shadow-inner">
                  <h3 className="text-xl font-semibold mb-2">Distribute Your Music</h3>
                  <p className="text-gray-600">
                    Effortlessly distribute your music to all major streaming services, expanding your global reach and audience.
                  </p>
                </div>
                <div className="bg-[#E9E9E9] flex items-center  sm:w-[40%] rounded-xl pl-4 pt-4 pb-4 boder-[1]">
                  <Image src="/apple.png" alt="Music Cover" className=' object-contain xsx:object-cover' width={1000} height={1000} />
                </div>
              </div>

              <div className="bg-[#E9E9E9] flex gap-3 items-start sm:items-center rounded-xl pl-4 pt-0 pb-0 w-full shadow-inner">
                <div>
                  <h3 className="text-xl font-semibold pt-2 sm:pt-0 mb-2">Get On Playlist</h3>
                  <p className="text-gray-600">
                    Increase your reach by getting featured on popular playlists curated by industry experts.
                  </p>
                </div>
                <div className=" flex items-center gap-2">
                  {/* {[1, 2, 3].map((_, index) => ( */}
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="/play1.png"
                      alt="Playlist Cover"
                      width={200}
                      height={130}
                      className=" hidden sm:block w-[180px] h-auto"
                    />
                  </div>
                  <div className=" overflow-hidden">
                    <Image
                      src="/play2.png"
                      alt="Playlist Cover"
                      width={130}
                      height={125}
                      className=" w-[500px] sm:w-[180px] h-auto"
                    />
                    <Image
                      src="/play3.png"
                      alt="Playlist Cover"
                      width={130}
                      height={125}
                      className="w-[500px] sm:w-[180px] h-auto"
                    />
                  </div>
                  <div>
                    <Image
                      src="/play4.png"
                      alt="Playlist Cover"
                      width={90}
                      height={90}
                      className="hidden sm:block w-[92px] h-auto"
                    />
                  </div>
                  {/* ))} */}
                </div>
              </div>
              <div className='grid grid-cols-2 justify-center  items-center gap-2'>
                <div className="bg-[#E9E9E9] w-full md:w-[100%] rounded-xl p-4 shadow-inner">
                  <div className="flex items-center justify-center mb-4">
                    <Image src="/sync.png" alt="Music Icon" width={200} height={200} className="w-full max-w-[200px] h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Sync Your Music</h3>
                </div>

                <div className="w-full flex items-start  md:w-[100%] h-full">
                  <div className="bg-purple-600 w-full flex items-start flex-col h-full rounded-xl p-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">Publish Your Music</h3>
                    <p className="text-purple-100">
                      Easily publish your tracks and make them available on major streaming platforms worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}