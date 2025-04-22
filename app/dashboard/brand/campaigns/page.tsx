"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  MoreHorizontal,
  Calendar,
  User,
  Filter,
  ArrowUpDown,
} from "lucide-react"

// Mock data for campaigns
const campaigns = [
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
    budget: "$2,500",
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
    budget: "$1,800",
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
    budget: "$3,000",
  },
  {
    id: 4,
    title: "Holiday Special Promotion",
    image: "/placeholder.svg?height=100&width=100&text=Holiday",
    status: "draft",
    influencers: 0,
    views: 0,
    engagement: 0,
    applications: 0,
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    progress: 0,
    budget: "$4,500",
  },
  {
    id: 5,
    title: "Spring Collection Teaser",
    image: "/placeholder.svg?height=100&width=100&text=Spring",
    status: "completed",
    influencers: 10,
    views: 87000,
    engagement: 6500,
    applications: 0,
    startDate: "2023-03-01",
    endDate: "2023-04-15",
    progress: 100,
    budget: "$3,200",
  },
  {
    id: 6,
    title: "Back to School Campaign",
    image: "/placeholder.svg?height=100&width=100&text=School",
    status: "completed",
    influencers: 7,
    views: 52000,
    engagement: 4100,
    applications: 0,
    startDate: "2023-08-15",
    endDate: "2023-09-15",
    progress: 100,
    budget: "$2,800",
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

export default function BrandCampaignsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Filter campaigns based on active tab and search term
  const filteredCampaigns = campaigns.filter((campaign) => {
    // Filter by tab
    if (activeTab !== "all" && campaign.status !== activeTab) {
      return false
    }

    // Filter by search term
    if (searchTerm && !campaign.title.toLowerCase().includes(searchTerm.toLowerCase())) {
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
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white bg-[#4a7bf7]"
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
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
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
                placeholder="Search campaigns..."
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
                <h1 className="text-2xl font-bold text-white">Campaigns</h1>
                <p className="text-gray-400">Manage and track all your influencer marketing campaigns</p>
              </div>

              <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                Create New Campaign
              </Button>
            </div>

            {/* Campaign Tabs */}
            <div className="flex flex-col gap-4">
              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-between items-center">
                  <TabsList className="bg-[#0f1535] border border-[#1a2040]">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="active"
                      className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                    >
                      Active
                    </TabsTrigger>
                    <TabsTrigger
                      value="pending"
                      className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                    >
                      Pending
                    </TabsTrigger>
                    <TabsTrigger
                      value="draft"
                      className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                    >
                      Draft
                    </TabsTrigger>
                    <TabsTrigger
                      value="completed"
                      className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                    >
                      Completed
                    </TabsTrigger>
                  </TabsList>

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
                  </div>
                </div>

                <TabsContent value="all" className="mt-0">
                  {/* Campaign Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {filteredCampaigns.map((campaign) => (
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
                            <Badge
                              className={
                                campaign.status === "active"
                                  ? "bg-green-500"
                                  : campaign.status === "pending"
                                    ? "bg-yellow-500"
                                    : campaign.status === "draft"
                                      ? "bg-gray-500"
                                      : "bg-blue-500"
                              }
                            >
                              {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
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
                              <span className="text-gray-400">Budget</span>
                              <span className="text-white">{campaign.budget}</span>
                            </div>

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

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="ml-auto text-gray-400 hover:text-white hover:bg-[#1a2040]"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56 bg-[#0f1535] border-[#1a2040] text-white">
                              <DropdownMenuItem className="hover:bg-[#1a2040]">Edit Campaign</DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-[#1a2040]">Duplicate Campaign</DropdownMenuItem>
                              <DropdownMenuSeparator className="bg-[#1a2040]" />
                              <DropdownMenuItem className="text-red-500 hover:bg-[#1a2040] hover:text-red-500">
                                Delete Campaign
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Other tab contents would be identical but with filtered data */}
                <TabsContent value="active" className="mt-0">
                  {/* Same grid but filtered for active campaigns */}
                </TabsContent>

                <TabsContent value="pending" className="mt-0">
                  {/* Same grid but filtered for pending campaigns */}
                </TabsContent>

                <TabsContent value="draft" className="mt-0">
                  {/* Same grid but filtered for draft campaigns */}
                </TabsContent>

                <TabsContent value="completed" className="mt-0">
                  {/* Same grid but filtered for completed campaigns */}
                </TabsContent>
              </Tabs>

              {/* Empty State */}
              {filteredCampaigns.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                  <div className="rounded-full bg-[#0f1535] p-4">
                    <Calendar className="h-8 w-8 text-[#4a7bf7]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">No campaigns found</h3>
                  <p className="text-gray-400 max-w-md">
                    We couldn't find any campaigns matching your current filters. Try adjusting your search criteria or
                    create a new campaign.
                  </p>
                  <Button className="mt-2 bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Create New Campaign</Button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

