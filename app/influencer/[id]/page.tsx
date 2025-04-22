import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Instagram, Youtube, Twitter, MapPin, Star, Mail, Globe, Calendar, Heart } from "lucide-react"

// Mock data for the influencer profile
const influencer = {
  id: 1,
  name: "Abebe Bikila",
  username: "@ababikila",
  image: "/placeholder.svg?height=400&width=400",
  banner: "/placeholder.svg?height=1200&width=400&text=Banner",
  category: "Fashion",
  platforms: [
    { name: "instagram", url: "https://instagram.com/ababikila", followers: 125000 },
    { name: "youtube", url: "https://youtube.com/ababikila", followers: 75000 },
    { name: "tiktok", url: "https://tiktok.com/@ababikila", followers: 95000 },
  ],
  totalFollowers: 295000,
  engagement: 3.8,
  location: "Addis Ababa",
  languages: ["Amharic", "English"],
  verified: true,
  bio: "Fashion enthusiast and lifestyle content creator based in Addis Ababa. I work with brands to create authentic content that resonates with my audience. Specializing in men's fashion, streetwear, and Ethiopian cultural fashion.",
  website: "https://ababikila.com",
  email: "contact@ababikila.com",
  portfolio: [
    {
      type: "image",
      url: "/placeholder.svg?height=600&width=600&text=Portfolio+1",
      caption: "Summer collection photoshoot",
    },
    { type: "image", url: "/placeholder.svg?height=600&width=600&text=Portfolio+2", caption: "Street style in Addis" },
    {
      type: "image",
      url: "/placeholder.svg?height=600&width=600&text=Portfolio+3",
      caption: "Traditional meets modern",
    },
    { type: "image", url: "/placeholder.svg?height=600&width=600&text=Portfolio+4", caption: "Brand collaboration" },
  ],
  collaborations: [
    { brand: "Ethiopian Airlines", image: "/placeholder.svg?height=100&width=100&text=EA", date: "June 2023" },
    { brand: "Ambo Water", image: "/placeholder.svg?height=100&width=100&text=AW", date: "March 2023" },
    { brand: "Dashen Beer", image: "/placeholder.svg?height=100&width=100&text=DB", date: "December 2022" },
    { brand: "Ethio Telecom", image: "/placeholder.svg?height=100&width=100&text=ET", date: "October 2022" },
  ],
  pricing: {
    instagram: { post: "$300", story: "$150", reel: "$500" },
    youtube: { video: "$800", mention: "$300" },
    tiktok: { video: "$400" },
  },
  stats: {
    audienceAge: [
      { age: "18-24", percentage: 35 },
      { age: "25-34", percentage: 45 },
      { age: "35-44", percentage: 15 },
      { age: "45+", percentage: 5 },
    ],
    audienceGender: { male: 65, female: 35 },
    audienceLocations: [
      { location: "Addis Ababa", percentage: 60 },
      { location: "Dire Dawa", percentage: 15 },
      { location: "Bahir Dar", percentage: 10 },
      { location: "Other", percentage: 15 },
    ],
  },
}

// Platform icons mapping
const platformIcons = {
  instagram: <Instagram className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  tiktok: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  ),
}

// Format number with K/M suffix
const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

export default function InfluencerProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0f29]">
      {/* Header */}
      <header className="w-full border-b border-[#1a2040] bg-[#0a0f29]">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Users className="h-6 w-6 text-[#4a7bf7]" />
              <span className="text-xl font-bold text-white">InfluEthiopia</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              For Brands
            </Link>
            <Link href="/#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              For Influencers
            </Link>
            <Link href="/explore" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Explore
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden md:inline-flex text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Banner */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden">
          <Image
            src={influencer.banner || "/placeholder.svg"}
            alt={`${influencer.name}'s banner`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container px-4 md:px-6 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 order-2 md:order-1">
              <div className="bg-[#0f1535] rounded-xl border border-[#1a2040] p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border-4 border-[#0f1535] bg-[#0f1535]">
                    <Image
                      src={influencer.image || "/placeholder.svg"}
                      alt={influencer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold text-white">{influencer.name}</h1>
                      {influencer.verified && <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />}
                    </div>
                    <p className="text-gray-400">{influencer.username}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">{influencer.category}</Badge>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{influencer.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{influencer.bio}</p>

                <div className="flex flex-wrap gap-3">
                  {influencer.languages.map((language) => (
                    <Badge key={language} variant="outline" className="border-[#1a2040] text-gray-300">
                      {language}
                    </Badge>
                  ))}
                  {influencer.website && (
                    <Link
                      href={influencer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#4a7bf7] hover:text-[#3a6ae7] text-sm"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      Website
                    </Link>
                  )}
                  {influencer.email && (
                    <Link
                      href={`mailto:${influencer.email}`}
                      className="flex items-center gap-1 text-[#4a7bf7] hover:text-[#3a6ae7] text-sm"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Email
                    </Link>
                  )}
                </div>
              </div>

              <Tabs defaultValue="portfolio" className="mb-6">
                <TabsList className="bg-[#0f1535] border border-[#1a2040]">
                  <TabsTrigger
                    value="portfolio"
                    className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                  >
                    Portfolio
                  </TabsTrigger>
                  <TabsTrigger
                    value="collaborations"
                    className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                  >
                    Past Collaborations
                  </TabsTrigger>
                  <TabsTrigger
                    value="audience"
                    className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                  >
                    Audience
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="portfolio" className="mt-4">
                  <div className="bg-[#0f1535] rounded-xl border border-[#1a2040] p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Portfolio</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {influencer.portfolio.map((item, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border border-[#1a2040] group relative">
                          <div className="aspect-square relative">
                            <Image
                              src={item.url || "/placeholder.svg"}
                              alt={item.caption || `Portfolio item ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white p-4">{item.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="collaborations" className="mt-4">
                  <div className="bg-[#0f1535] rounded-xl border border-[#1a2040] p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Past Collaborations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {influencer.collaborations.map((collab, index) => (
                        <div
                          key={index}
                          className="bg-[#0a0f29] rounded-lg p-4 border border-[#1a2040] flex flex-col items-center text-center"
                        >
                          <div className="relative h-16 w-16 rounded-full overflow-hidden mb-3">
                            <Image
                              src={collab.image || "/placeholder.svg"}
                              alt={collab.brand}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-medium text-white">{collab.brand}</h3>
                          <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {collab.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="audience" className="mt-4">
                  <div className="bg-[#0f1535] rounded-xl border border-[#1a2040] p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Audience Demographics</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-white font-medium mb-2">Age Distribution</h3>
                        <div className="space-y-2">
                          {influencer.stats.audienceAge.map((item) => (
                            <div key={item.age} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">{item.age}</span>
                                <span className="text-gray-300">{item.percentage}%</span>
                              </div>
                              <div className="h-2 bg-[#1a2040] rounded-full overflow-hidden">
                                <div className="h-full bg-[#4a7bf7]" style={{ width: `${item.percentage}%` }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-white font-medium mb-2">Top Locations</h3>
                        <div className="space-y-2">
                          {influencer.stats.audienceLocations.map((item) => (
                            <div key={item.location} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">{item.location}</span>
                                <span className="text-gray-300">{item.percentage}%</span>
                              </div>
                              <div className="h-2 bg-[#1a2040] rounded-full overflow-hidden">
                                <div className="h-full bg-[#4a7bf7]" style={{ width: `${item.percentage}%` }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-white font-medium mb-2">Gender</h3>
                        <div className="flex h-6 rounded-full overflow-hidden">
                          <div
                            className="bg-[#4a7bf7] h-full flex items-center justify-center text-xs text-white"
                            style={{ width: `${influencer.stats.audienceGender.male}%` }}
                          >
                            Male {influencer.stats.audienceGender.male}%
                          </div>
                          <div
                            className="bg-[#f472b6] h-full flex items-center justify-center text-xs text-white"
                            style={{ width: `${influencer.stats.audienceGender.female}%` }}
                          >
                            Female {influencer.stats.audienceGender.female}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-80 order-1 md:order-2">
              <div className="md:sticky md:top-6 space-y-6">
                <div className="bg-[#0f1535] rounded-xl border border-[#1a2040] p-6">
                  <h2 className="text-lg font-bold text-white mb-4">Stats</h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Total Followers</span>
                      <span className="text-white font-medium">{formatNumber(influencer.totalFollowers)}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Engagement Rate</span>
                      <span className="text-white font-medium">{influencer.engagement}%</span>
                    </div>

                    <div className="h-px bg-[#1a2040] my-4"></div>

                    <h3 className="text-white font-medium">Platforms</h3>

                    <div className="space-y-3">
                      {influencer.platforms.map((platform) => (
                        <Link
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded-lg border border-[#1a2040] hover:border-[#4a7bf7] transition-colors"
                        >
                          <div className="flex items-center gap-2 text-gray-300">
                            {platformIcons[platform.name as keyof typeof platformIcons]}
                            <span className="capitalize">{platform.name}</span>
                          </div>
                          <span className="text-white font-medium">{formatNumber(platform.followers)}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#0f1535] rounded-xl border border-[#1a2040] p-6">
                  <h2 className="text-lg font-bold text-white mb-4">Pricing</h2>

                  <div className="space-y-4">
                    {Object.entries(influencer.pricing).map(([platform, rates]) => (
                      <div key={platform} className="space-y-2">
                        <h3 className="text-white font-medium capitalize flex items-center gap-2">
                          {platformIcons[platform as keyof typeof platformIcons]}
                          {platform}
                        </h3>

                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(rates).map(([type, price]) => (
                            <div key={type} className="bg-[#0a0f29] p-2 rounded-lg border border-[#1a2040]">
                              <div className="text-xs text-gray-400 capitalize">{type}</div>
                              <div className="text-white font-medium">{price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    <p className="text-xs text-gray-400 mt-2">
                      * Prices are indicative and may vary based on campaign requirements
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Invite to Campaign</Button>

                  <Button
                    variant="outline"
                    className="w-full border-[#1a2040] text-white hover:bg-[#1a2040] flex items-center gap-2"
                  >
                    <Heart className="h-4 w-4" />
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#1a2040] py-6 mt-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#4a7bf7]" />
            <span className="text-sm font-bold text-white">InfluEthiopia</span>
          </div>

          <p className="text-xs text-gray-400">© {new Date().getFullYear()} InfluEthiopia. All rights reserved.</p>

          <div className="flex gap-4">
            {[
              { name: "Facebook", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { name: "Instagram", icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
              {
                name: "Twitter",
                icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
              },
              {
                name: "LinkedIn",
                icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
              },
            ].map((social) => (
              <Link key={social.name} href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={social.icon}></path>
                </svg>
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

