"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Calendar,
  User,
  TrendingUp,
  Eye,
  ThumbsUp,
  Download,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock data for analytics
const campaignPerformance = [
  { name: "Jan", views: 4000, engagement: 2400, applications: 1200 },
  { name: "Feb", views: 3000, engagement: 1398, applications: 900 },
  { name: "Mar", views: 2000, engagement: 9800, applications: 1600 },
  { name: "Apr", views: 2780, engagement: 3908, applications: 1400 },
  { name: "May", views: 1890, engagement: 4800, applications: 1700 },
  { name: "Jun", views: 2390, engagement: 3800, applications: 1500 },
  { name: "Jul", views: 3490, engagement: 4300, applications: 1800 },
]

const influencerCategories = [
  { name: "Fashion", value: 35 },
  { name: "Beauty", value: 20 },
  { name: "Tech", value: 15 },
  { name: "Food", value: 10 },
  { name: "Travel", value: 10 },
  { name: "Fitness", value: 5 },
  { name: "Other", value: 5 },
]

const audienceDemographics = [
  { name: "18-24", male: 15, female: 20 },
  { name: "25-34", male: 25, female: 30 },
  { name: "35-44", male: 10, female: 15 },
  { name: "45+", male: 5, female: 10 },
]

const topPerformingCampaigns = [
  {
    id: 1,
    title: "Summer Fashion Collection",
    views: 45000,
    engagement: 3200,
    applications: 12,
    roi: 3.2,
    trend: "up",
  },
  {
    id: 2,
    title: "New Product Launch",
    views: 28000,
    engagement: 1800,
    applications: 7,
    roi: 2.5,
    trend: "up",
  },
  {
    id: 3,
    title: "Spring Collection Teaser",
    views: 87000,
    engagement: 6500,
    applications: 18,
    roi: 4.1,
    trend: "up",
  },
  {
    id: 4,
    title: "Back to School Campaign",
    views: 52000,
    engagement: 4100,
    applications: 15,
    roi: 3.8,
    trend: "down",
  },
]

// Colors for charts
const COLORS = ["#4a7bf7", "#f472b6", "#10b981", "#f59e0b", "#6366f1", "#ec4899", "#8b5cf6"]

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

export default function BrandAnalyticsPage() {
  const [dateRange, setDateRange] = useState("last30days")

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
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </Link>

            <Link
              href="/dashboard/brand/analytics"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white bg-[#4a7bf7]"
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
                placeholder="Search analytics..."
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
                <h1 className="text-2xl font-bold text-white">Analytics</h1>
                <p className="text-gray-400">Track and analyze your campaign performance</p>
              </div>

              <div className="flex items-center gap-2">
                <Select defaultValue={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="w-[180px] bg-[#0f1535] border-[#1a2040] text-white">
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0f1535] border-[#1a2040] text-white">
                    <SelectItem value="last7days">Last 7 days</SelectItem>
                    <SelectItem value="last30days">Last 30 days</SelectItem>
                    <SelectItem value="last90days">Last 90 days</SelectItem>
                    <SelectItem value="thisYear">This year</SelectItem>
                    <SelectItem value="allTime">All time</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="gap-2 border-[#1a2040] bg-[#0f1535] text-white hover:bg-[#1a2040] hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Total Views",
                  value: "215K",
                  change: "+12.5%",
                  trend: "up",
                  icon: <Eye className="h-5 w-5 text-[#4a7bf7]" />,
                },
                {
                  title: "Engagement Rate",
                  value: "4.2%",
                  change: "+0.8%",
                  trend: "up",
                  icon: <ThumbsUp className="h-5 w-5 text-[#4a7bf7]" />,
                },
                {
                  title: "Applications",
                  value: "52",
                  change: "-3.1%",
                  trend: "down",
                  icon: <Users className="h-5 w-5 text-[#4a7bf7]" />,
                },
                {
                  title: "Avg. ROI",
                  value: "3.4x",
                  change: "+0.2x",
                  trend: "up",
                  icon: <TrendingUp className="h-5 w-5 text-[#4a7bf7]" />,
                },
              ].map((stat, index) => (
                <Card key={index} className="bg-[#0f1535] border-[#1a2040] shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">{stat.title}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                        <div
                          className={`flex items-center text-xs mt-1 ${
                            stat.trend === "up" ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {stat.trend === "up" ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {stat.change} from previous period
                        </div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-[#4a7bf7]/10 flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Analytics Tabs */}
            <Tabs defaultValue="performance" className="w-full">
              <TabsList className="bg-[#0f1535] border border-[#1a2040]">
                <TabsTrigger
                  value="performance"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Campaign Performance
                </TabsTrigger>
                <TabsTrigger
                  value="influencers"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Influencer Categories
                </TabsTrigger>
                <TabsTrigger
                  value="audience"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Audience Demographics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="performance" className="mt-4">
                <Card className="bg-[#0f1535] border-[#1a2040]">
                  <CardHeader>
                    <CardTitle className="text-white">Campaign Performance Over Time</CardTitle>
                    <CardDescription className="text-gray-400">
                      Track views, engagement, and applications across all campaigns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={campaignPerformance} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1a2040" />
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" />
                          <Tooltip
                            contentStyle={{ backgroundColor: "#0f1535", borderColor: "#1a2040", color: "#fff" }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Legend />
                          <Line type="monotone" dataKey="views" stroke="#4a7bf7" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="engagement" stroke="#f472b6" />
                          <Line type="monotone" dataKey="applications" stroke="#10b981" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="influencers" className="mt-4">
                <Card className="bg-[#0f1535] border-[#1a2040]">
                  <CardHeader>
                    <CardTitle className="text-white">Influencer Categories</CardTitle>
                    <CardDescription className="text-gray-400">Distribution of influencers by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={influencerCategories}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {influencerCategories.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{ backgroundColor: "#0f1535", borderColor: "#1a2040", color: "#fff" }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="audience" className="mt-4">
                <Card className="bg-[#0f1535] border-[#1a2040]">
                  <CardHeader>
                    <CardTitle className="text-white">Audience Demographics</CardTitle>
                    <CardDescription className="text-gray-400">
                      Age and gender distribution of your audience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart
                          data={audienceDemographics}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#1a2040" />
                          <XAxis dataKey="name" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" />
                          <Tooltip
                            contentStyle={{ backgroundColor: "#0f1535", borderColor: "#1a2040", color: "#fff" }}
                            labelStyle={{ color: "#fff" }}
                          />
                          <Legend />
                          <Bar dataKey="male" stackId="a" fill="#4a7bf7" name="Male" />
                          <Bar dataKey="female" stackId="a" fill="#f472b6" name="Female" />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Top Performing Campaigns */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Top Performing Campaigns</h2>
                <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] p-0 h-auto">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {topPerformingCampaigns.map((campaign) => (
                  <Card
                    key={campaign.id}
                    className="bg-[#0f1535] border-[#1a2040] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg">{campaign.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="pb-2">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Views</span>
                          <span className="text-white">{formatNumber(campaign.views)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Engagement</span>
                          <span className="text-white">{formatNumber(campaign.engagement)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Applications</span>
                          <span className="text-white">{campaign.applications}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">ROI</span>
                          <div
                            className={`flex items-center ${
                              campaign.trend === "up" ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            {campaign.trend === "up" ? (
                              <ArrowUpRight className="h-4 w-4 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-4 w-4 mr-1" />
                            )}
                            <span>{campaign.roi}x</span>
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
          </div>
        </main>
      </div>
    </div>
  )
}

