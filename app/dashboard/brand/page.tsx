"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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
  ChevronRight,
  TrendingUp,
  Eye,
  ThumbsUp,
  UserPlus,
  Calendar,
  User,
} from "lucide-react"

// Mock data for the brand dashboard
const activeCampaigns = [
  {
    id: 1,
    title: "Summer Fashion Collection",
    image: "/placeholder.svg?height=100&width=100&text=Fashion",
    status: "active",
    influencers: 8,
    views: 45000,
    engagement: 3200,
    applications: 12,
    startDate: "2023-06-15",
    endDate: "2023-07-15",
    progress: 65,
  },
  {
    id: 2,
    title: "New Product Launch",
    image: "/placeholder.svg?height=100&width=100&text=Product",
    status: "active",
    influencers: 5,
    views: 28000,
    engagement: 1800,
    applications: 7,
    startDate: "2023-07-01",
    endDate: "2023-07-30",
    progress: 40,
  },
  {
    id: 3,
    title: "Brand Awareness Campaign",
    image: "/placeholder.svg?height=100&width=100&text=Brand",
    status: "pending",
    influencers: 0,
    views: 0,
    engagement: 0,
    applications: 15,
    startDate: "2023-07-20",
    endDate: "2023-08-20",
    progress: 0,
  },
]

const messages = [
  {
    id: 1,
    influencer: "Abebe Bikila",
    image: "/placeholder.svg?height=40&width=40",
    message: "I've reviewed the campaign brief and have some ideas to share.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    influencer: "Sara Tadesse",
    image: "/placeholder.svg?height=40&width=40",
    message: "When would you like me to post the content?",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    influencer: "Dawit Mekonnen",
    image: "/placeholder.svg?height=40&width=40",
    message: "The video is ready for your review. Let me know what you think!",
    time: "2 days ago",
    unread: false,
  },
]

const favoriteInfluencers = [
  {
    id: 1,
    name: "Abebe Bikila",
    image: "/placeholder.svg?height=100&width=100",
    category: "Fashion",
    followers: 125000,
    engagement: 3.8,
  },
  {
    id: 2,
    name: "Sara Tadesse",
    image: "/placeholder.svg?height=100&width=100",
    category: "Beauty",
    followers: 89000,
    engagement: 4.2,
  },
  {
    id: 3,
    name: "Dawit Mekonnen",
    image: "/placeholder.svg?height=100&width=100",
    category: "Tech",
    followers: 67000,
    engagement: 5.1,
  },
]

const notifications = [
  {
    id: 1,
    type: "application",
    message: "New application from Hanna Girma for Summer Fashion Collection",
    time: "1 hour ago",
  },
  {
    id: 2,
    type: "message",
    message: "Sara Tadesse sent you a message",
    time: "3 hours ago",
  },
  {
    id: 3,
    type: "campaign",
    message: "Your Brand Awareness Campaign is ready to launch",
    time: "Yesterday",
  },
]

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

export default function BrandDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

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
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "overview" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("overview")}
            >
              <Home className="h-5 w-5" />
              <span>Overview</span>
            </Link>

            <Link
              href="/dashboard/brand?tab=campaigns"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "campaigns" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("campaigns")}
            >
              <Calendar className="h-5 w-5" />
              <span>Campaigns</span>
            </Link>

            <Link
              href="/dashboard/brand?tab=messages"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "messages" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("messages")}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
              <Badge className="ml-auto bg-[#4a7bf7]">3</Badge>
            </Link>

            <Link
              href="/dashboard/brand?tab=favorites"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "favorites" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("favorites")}
            >
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </Link>

            <Link
              href="/dashboard/brand?tab=analytics"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "analytics" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("analytics")}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>

            <Link
              href="/dashboard/brand?tab=settings"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "settings" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("settings")}
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
                placeholder="Search campaigns, influencers..."
                className="pl-10 bg-[#0f1535] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
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
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className="flex items-start gap-2 py-2 cursor-pointer hover:bg-[#1a2040]"
                  >
                    <div className="h-8 w-8 rounded-full bg-[#4a7bf7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {notification.type === "application" && <UserPlus className="h-4 w-4 text-[#4a7bf7]" />}
                      {notification.type === "message" && <MessageSquare className="h-4 w-4 text-[#4a7bf7]" />}
                      {notification.type === "campaign" && <Calendar className="h-4 w-4 text-[#4a7bf7]" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
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

        {/* Main Dashboard Content */}
        <main className="p-4 md:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white">Brand Dashboard</h1>
                <p className="text-gray-400">Manage your campaigns and influencer relationships</p>
              </div>

              <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                Create New Campaign
              </Button>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Active Campaigns", value: "3", icon: <Calendar className="h-5 w-5 text-[#4a7bf7]" /> },
                { title: "Total Influencers", value: "13", icon: <Users className="h-5 w-5 text-[#4a7bf7]" /> },
                { title: "Total Reach", value: "73K", icon: <Eye className="h-5 w-5 text-[#4a7bf7]" /> },
                { title: "Engagement Rate", value: "4.2%", icon: <ThumbsUp className="h-5 w-5 text-[#4a7bf7]" /> },
              ].map((stat, index) => (
                <Card key={index} className="bg-[#0f1535] border-[#1a2040] shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">{stat.title}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-[#4a7bf7]/10 flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Active Campaigns */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Active Campaigns</h2>
                <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] p-0 h-auto">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCampaigns.map((campaign) => (
                  <Card
                    key={campaign.id}
                    className="bg-[#0f1535] border-[#1a2040] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className={campaign.status === "active" ? "bg-green-500" : "bg-yellow-500"}>
                          {campaign.status === "active" ? "Active" : "Pending"}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-white">{campaign.title}</CardTitle>
                      <CardDescription className="text-gray-400 flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" />
                        {campaign.startDate} - {campaign.endDate}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pb-2">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{campaign.progress}%</span>
                        </div>
                        <Progress
                          value={campaign.progress}
                          className="h-2 bg-[#1a2040]"
                          indicatorClassName="bg-[#4a7bf7]"
                        />

                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Influencers</p>
                            <p className="text-white font-medium">{campaign.influencers}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Views</p>
                            <p className="text-white font-medium">{formatNumber(campaign.views)}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Engagement</p>
                            <p className="text-white font-medium">{formatNumber(campaign.engagement)}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] p-0 h-auto">
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Messages and Favorites */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Messages */}
              <Card className="bg-[#0f1535] border-[#1a2040] shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">Recent Messages</CardTitle>
                    <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] p-0 h-auto">
                      View All
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className="flex gap-3 p-3 rounded-lg hover:bg-[#1a2040] transition-colors cursor-pointer"
                      >
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              src={message.image || "/placeholder.svg"}
                              alt={message.influencer}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          {message.unread && (
                            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#4a7bf7]"></div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">{message.influencer}</p>
                            <p className="text-xs text-gray-400">{message.time}</p>
                          </div>
                          <p className="text-sm text-gray-300 truncate">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Favorite Influencers */}
              <Card className="bg-[#0f1535] border-[#1a2040] shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">Favorite Influencers</CardTitle>
                    <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] p-0 h-auto">
                      View All
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {favoriteInfluencers.map((influencer) => (
                      <div
                        key={influencer.id}
                        className="flex gap-3 p-3 rounded-lg hover:bg-[#1a2040] transition-colors cursor-pointer"
                      >
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={influencer.image || "/placeholder.svg"}
                            alt={influencer.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">{influencer.name}</p>
                            <Badge className="bg-[#0a0f29] text-gray-300 border border-[#1a2040]">
                              {influencer.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-sm">
                            <div className="flex items-center gap-1 text-gray-400">
                              <Users className="h-3.5 w-3.5" />
                              <span>{formatNumber(influencer.followers)}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-400">
                              <TrendingUp className="h-3.5 w-3.5" />
                              <span>{influencer.engagement}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

