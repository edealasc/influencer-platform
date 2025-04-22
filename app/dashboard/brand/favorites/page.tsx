"use client"

import { Calendar } from "@/components/ui/calendar"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Users,
  Bell,
  Search,
  Home,
  BarChart3,
  MessageSquare,
  Heart,
  Settings,
  PlusCircle,
  LogOut,
  TrendingUp,
  MapPin,
  User,
  Filter,
  ArrowUpDown,
  Star,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react"

// Mock data for favorite influencers
const favoriteInfluencers = [
  {
    id: 1,
    name: "Abebe Bikila",
    image: "/placeholder.svg?height=400&width=400",
    category: "Fashion",
    platforms: ["instagram", "tiktok"],
    followers: 125000,
    engagement: 3.8,
    location: "Addis Ababa",
    languages: ["Amharic", "English"],
    verified: true,
    notes: "Great engagement with fashion content. Previous collaboration was successful.",
  },
  {
    id: 2,
    name: "Sara Tadesse",
    image: "/placeholder.svg?height=400&width=400",
    category: "Beauty",
    platforms: ["instagram", "youtube"],
    followers: 89000,
    engagement: 4.2,
    location: "Addis Ababa",
    languages: ["Amharic", "English"],
    verified: true,
    notes: "Excellent product reviews. Audience is very responsive.",
  },
  {
    id: 3,
    name: "Dawit Mekonnen",
    image: "/placeholder.svg?height=400&width=400",
    category: "Tech",
    platforms: ["youtube", "twitter"],
    followers: 67000,
    engagement: 5.1,
    location: "Bahir Dar",
    languages: ["Amharic", "English"],
    verified: true,
    notes: "Great for tech product launches. Creates detailed review videos.",
  },
  {
    id: 4,
    name: "Hanna Girma",
    image: "/placeholder.svg?height=400&width=400",
    category: "Food",
    platforms: ["instagram", "tiktok"],
    followers: 105000,
    engagement: 6.7,
    location: "Hawassa",
    languages: ["Amharic", "English", "Sidamo"],
    verified: true,
    notes: "Specializes in food content. High engagement on recipe posts.",
  },
  {
    id: 5,
    name: "Yonas Kebede",
    image: "/placeholder.svg?height=400&width=400",
    category: "Travel",
    platforms: ["instagram", "youtube"],
    followers: 78000,
    engagement: 3.5,
    location: "Gondar",
    languages: ["Amharic", "English"],
    verified: false,
    notes: "Great for travel campaigns. Creates stunning visual content.",
  },
  {
    id: 6,
    name: "Tigist Haile",
    image: "/placeholder.svg?height=400&width=400",
    category: "Fitness",
    platforms: ["instagram", "tiktok"],
    followers: 92000,
    engagement: 5.8,
    location: "Addis Ababa",
    languages: ["Amharic", "English"],
    verified: true,
    notes: "Fitness expert with highly engaged audience. Great for wellness campaigns.",
  },
]

// Platform icons mapping
const platformIcons = {
  instagram: <Instagram className="h-4 w-4" />,
  youtube: <Youtube className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  tiktok: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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

export default function BrandFavoritesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter influencers based on search term
  const filteredInfluencers = favoriteInfluencers.filter((influencer) => {
    if (searchTerm && !influencer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }
    return true
  })

  return (
    <div className="flex min-h-screen bg-[#0a0f29]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r border-[#1a2040] bg-[#0f1535] z-30">
        <div className="flex items-center gap-2 h-16 px-6 border-b border-[#1a2040]">
          <Users className="h-6 w-6 text-[#4a7bf7]" />
          <span className="text-xl font-bold text-white">InfluEthiopia</span>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto py-4">
          <nav className="flex-1 px-4 space-y-1">
            <Link
              href="/dashboard/brand"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <Home className="h-5 w-5" />
              <span>Overview</span>
            </Link>

            <Link
              href="/dashboard/brand/campaigns"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <Calendar className="h-5 w-5" />
              <span>Campaigns</span>
            </Link>

            <Link
              href="/dashboard/brand/messages"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
              <Badge className="ml-auto bg-[#4a7bf7]">3</Badge>
            </Link>

            <Link
              href="/dashboard/brand/favorites"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white bg-[#4a7bf7]"
            >
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </Link>

            <Link
              href="/dashboard/brand/analytics"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>

            <Link
              href="/dashboard/brand/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="px-4 mt-6">
            <Button className="w-full bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Create Campaign
            </Button>
          </div>

          <div className="mt-auto px-4">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040] cursor-pointer">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-20 h-16 flex items-center justify-between px-4 md:px-6 border-b border-[#1a2040] bg-[#0a0f29]">
          <div className="md:hidden flex items-center gap-2">
            <Users className="h-6 w-6 text-[#4a7bf7]" />
            <span className="text-xl font-bold text-white">InfluEthiopia</span>
          </div>

          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search favorites..."
                className="pl-10 bg-[#0f1535] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-[#1a2040]">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#4a7bf7] flex items-center justify-center text-[10px] text-white">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-[#0f1535] border-[#1a2040] text-white">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#1a2040]" />
                <DropdownMenuItem className="justify-center text-[#4a7bf7] hover:bg-[#1a2040] hover:text-[#4a7bf7]">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full overflow-hidden border border-[#1a2040]"
                >
                  <Image src="/placeholder.svg?height=40&width=40&text=AB" alt="Profile" width={40} height={40} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-[#0f1535] border-[#1a2040] text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#1a2040]" />
                <DropdownMenuItem className="hover:bg-[#1a2040]">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#1a2040]">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#1a2040]" />
                <DropdownMenuItem className="hover:bg-[#1a2040]">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white">Favorite Influencers</h1>
                <p className="text-gray-400">Manage your saved influencers for future campaigns</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="gap-2 border-[#1a2040] bg-[#0f1535] text-white hover:bg-[#1a2040] hover:text-white"
                >
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 border-[#1a2040] bg-[#0f1535] text-white hover:bg-[#1a2040] hover:text-white"
                >
                  <ArrowUpDown className="h-4 w-4" />
                  Sort
                </Button>
                <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Explore Influencers</Button>
              </div>
            </div>

            {/* Influencers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInfluencers.map((influencer) => (
                <div
                  key={influencer.id}
                  className="group bg-[#0f1535] rounded-xl border border-[#1a2040] overflow-hidden transition-all duration-300 hover:border-[#4a7bf7]"
                >
                  {/* Verified Badge */}
                  {influencer.verified && (
                    <div className="absolute top-3 right-3 z-20 bg-[#0f1535] rounded-full p-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  )}

                  {/* Image */}
                  <div className="aspect-square relative">
                    <Image
                      src={influencer.image || "/placeholder.svg"}
                      alt={influencer.name}
                      fill
                      className="object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-[#0a0f29]/80">
                      <div className="flex gap-2">
                        <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">View Profile</Button>
                        <Button variant="outline" className="border-[#1a2040] text-white hover:bg-[#1a2040]">
                          Invite
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-white">{influencer.name}</h3>
                        <p className="text-sm text-gray-400">{influencer.category}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {influencer.platforms.map((platform) => (
                          <div key={platform} className="text-gray-400">
                            {platformIcons[platform as keyof typeof platformIcons]}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Users className="h-3.5 w-3.5" />
                        <span>{formatNumber(influencer.followers)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span>{influencer.engagement}%</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{influencer.location}</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-400">
                      <p className="line-clamp-2">{influencer.notes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredInfluencers.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                <div className="rounded-full bg-[#0f1535] p-4">
                  <Heart className="h-8 w-8 text-[#4a7bf7]" />
                </div>
                <h3 className="text-xl font-semibold text-white">No favorites found</h3>
                <p className="text-gray-400 max-w-md">
                  You haven't added any influencers to your favorites yet, or none match your search criteria.
                </p>
                <Button className="mt-2 bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Explore Influencers</Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

