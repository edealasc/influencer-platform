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
  Settings,
  PlusCircle,
  LogOut,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  FileText,
  Briefcase,
  Wallet,
  BellIcon,
  ExternalLink,
} from "lucide-react"

// Mock data for the influencer dashboard
const applications = [
  {
    id: 1,
    brand: "Ethiopian Airlines",
    brandImage: "/placeholder.svg?height=40&width=40&text=EA",
    campaign: "Travel Promotion",
    status: "pending",
    compensation: "$500",
    appliedDate: "2023-07-10",
    deadline: "2023-07-20",
  },
  {
    id: 2,
    brand: "Ambo Water",
    brandImage: "/placeholder.svg?height=40&width=40&text=AW",
    campaign: "Lifestyle Campaign",
    status: "accepted",
    compensation: "$300",
    appliedDate: "2023-07-05",
    deadline: "2023-07-15",
  },
  {
    id: 3,
    brand: "Dashen Beer",
    brandImage: "/placeholder.svg?height=40&width=40&text=DB",
    campaign: "Summer Promotion",
    status: "rejected",
    compensation: "$450",
    appliedDate: "2023-06-28",
    deadline: "2023-07-08",
  },
]

const activeCollabs = [
  {
    id: 1,
    brand: "Ethio Telecom",
    brandImage: "/placeholder.svg?height=40&width=40&text=ET",
    campaign: "New Service Launch",
    status: "in progress",
    compensation: "$800",
    startDate: "2023-07-01",
    endDate: "2023-07-30",
    progress: 40,
    tasks: [
      { name: "Initial Post", completed: true },
      { name: "Story Series", completed: false },
      { name: "Final Review", completed: false },
    ],
  },
  {
    id: 2,
    brand: "Commercial Bank of Ethiopia",
    brandImage: "/placeholder.svg?height=40&width=40&text=CBE",
    campaign: "Digital Banking Promotion",
    status: "in progress",
    compensation: "$650",
    startDate: "2023-06-15",
    endDate: "2023-07-15",
    progress: 75,
    tasks: [
      { name: "Promotional Video", completed: true },
      { name: "Instagram Post", completed: true },
      { name: "User Testimonial", completed: false },
    ],
  },
]

const earnings = [
  {
    id: 1,
    brand: "Ethiopian Airlines",
    campaign: "Travel Promotion",
    amount: 500,
    date: "2023-06-15",
    status: "paid",
  },
  {
    id: 2,
    brand: "Ambo Water",
    campaign: "Lifestyle Campaign",
    amount: 300,
    date: "2023-05-20",
    status: "paid",
  },
  {
    id: 3,
    brand: "Dashen Beer",
    campaign: "Spring Campaign",
    amount: 450,
    date: "2023-04-10",
    status: "paid",
  },
]

const profileCompleteness = {
  percentage: 85,
  missingItems: ["Add portfolio items", "Complete audience demographics"],
}

const notifications = [
  {
    id: 1,
    type: "campaign",
    message: "You've been invited to apply for a new campaign by Ethiopian Airlines",
    time: "1 hour ago",
  },
  {
    id: 2,
    type: "message",
    message: "New message from Ambo Water regarding your application",
    time: "3 hours ago",
  },
  {
    id: 3,
    type: "payment",
    message: "Payment of $500 has been processed for Travel Promotion campaign",
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

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount)
}

export default function InfluencerDashboardPage() {
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
              href="/dashboard/influencer"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "overview" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("overview")}
            >
              <Home className="h-5 w-5" />
              <span>Overview</span>
            </Link>

            <Link
              href="/dashboard/influencer?tab=applications"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "applications" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("applications")}
            >
              <FileText className="h-5 w-5" />
              <span>Applications</span>
            </Link>

            <Link
              href="/dashboard/influencer?tab=collabs"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "collabs" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("collabs")}
            >
              <Briefcase className="h-5 w-5" />
              <span>Active Collabs</span>
            </Link>

            <Link
              href="/dashboard/influencer?tab=earnings"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "earnings" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("earnings")}
            >
              <Wallet className="h-5 w-5" />
              <span>Earnings</span>
            </Link>

            <Link
              href="/dashboard/influencer?tab=analytics"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "analytics" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("analytics")}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>

            <Link
              href="/dashboard/influencer?tab=notifications"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white ${activeTab === "notifications" ? "bg-[#4a7bf7]" : "hover:bg-[#1a2040]"}`}
              onClick={() => setActiveTab("notifications")}
            >
              <BellIcon className="h-5 w-5" />
              <span>Notifications</span>
              <Badge className="ml-auto bg-[#4a7bf7]">3</Badge>
            </Link>

            <Link
              href="/dashboard/influencer?tab=settings"
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
              Discover Campaigns
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
                      {notification.type === "campaign" && <Calendar className="h-4 w-4 text-[#4a7bf7]" />}
                      {notification.type === "message" && <MessageSquare className="h-4 w-4 text-[#4a7bf7]" />}
                      {notification.type === "payment" && <DollarSign className="h-4 w-4 text-[#4a7bf7]" />}
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
                <h1 className="text-2xl font-bold text-white">Influencer Dashboard</h1>
                <p className="text-gray-400">Manage your campaigns and brand collaborations</p>
              </div>

              <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Discover Campaigns
              </Button>
            </div>

            {/* Profile Completeness */}
            <Card className="bg-[#0f1535] border-[#1a2040] shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">Profile Completeness</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Complete your profile to get more opportunities</span>
                        <span className="text-white font-medium">{profileCompleteness.percentage}%</span>
                      </div>
                      <Progress
                        value={profileCompleteness.percentage}
                        className="h-2 bg-[#1a2040]"
                        indicatorClassName="bg-[#4a7bf7]"
                      />
                    </div>

                    {profileCompleteness.missingItems.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-400">Missing items:</p>
                        <ul className="mt-1 space-y-1">
                          {profileCompleteness.missingItems.map((item, index) => (
                            <li key={index} className="text-sm text-[#4a7bf7] flex items-center gap-1">
                              <AlertCircle className="h-3.5 w-3.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Complete Profile</Button>
                </div>
              </CardContent>
            </Card>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Active Collaborations", value: "2", icon: <Briefcase className="h-5 w-5 text-[#4a7bf7]" /> },
                { title: "Pending Applications", value: "1", icon: <FileText className="h-5 w-5 text-[#4a7bf7]" /> },
                { title: "Total Earnings", value: "$1,250", icon: <DollarSign className="h-5 w-5 text-[#4a7bf7]" /> },
                {
                  title: "Avg. Engagement Rate",
                  value: "4.2%",
                  icon: <TrendingUp className="h-5 w-5 text-[#4a7bf7]" />,
                },
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

            {/* Active Collaborations */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Active Collaborations</h2>
                <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] p-0 h-auto">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCollabs.map((collab) => (
                  <Card
                    key={collab.id}
                    className="bg-[#0f1535] border-[#1a2040] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={collab.brandImage || "/placeholder.svg"}
                            alt={collab.brand}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">{collab.campaign}</CardTitle>
                          <CardDescription className="text-gray-400">{collab.brand}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-2">
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{collab.progress}%</span>
                        </div>
                        <Progress
                          value={collab.progress}
                          className="h-2 bg-[#1a2040]"
                          indicatorClassName="bg-[#4a7bf7]"
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-400">Compensation</p>
                            <p className="text-white font-medium">{collab.compensation}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Timeline</p>
                            <p className="text-white font-medium text-sm">
                              {collab.startDate} - {collab.endDate}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-gray-400 mb-2">Tasks</p>
                          <div className="space-y-2">
                            {collab.tasks.map((task, index) => (
                              <div key={index} className="flex items-center gap-2">
                                {task.completed ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Clock className="h-4 w-4 text-yellow-500" />
                                )}
                                <span
                                  className={`text-sm ${task.completed ? "text-gray-400 line-through" : "text-white"}`}
                                >
                                  {task.name}
                                </span>
                              </div>
                            ))}
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

            {/* Applications and Earnings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Applications */}
              <Card className="bg-[#0f1535] border-[#1a2040] shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">Recent Applications</CardTitle>
                    <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] p-0 h-auto">
                      View All
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {applications.map((application) => (
                      <div
                        key={application.id}
                        className="flex gap-3 p-3 rounded-lg hover:bg-[#1a2040] transition-colors cursor-pointer"
                      >
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={application.brandImage || "/placeholder.svg"}
                            alt={application.brand}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-white">{application.campaign}</p>
                              <p className="text-sm text-gray-400">{application.brand}</p>
                            </div>
                            <Badge
                              className={
                                application.status === "accepted"
                                  ? "bg-green-500"
                                  : application.status === "rejected"
                                    ? "bg-red-500"
                                    : "bg-yellow-500"
                              }
                            >
                              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-sm">
                            <div className="flex items-center gap-1 text-gray-400">
                              <DollarSign className="h-3.5 w-3.5" />
                              <span>{application.compensation}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-400">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>Applied: {application.appliedDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Earnings */}
              <Card className="bg-[#0f1535] border-[#1a2040] shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white">Recent Earnings</CardTitle>
                    <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] p-0 h-auto">
                      View All
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {earnings.map((earning) => (
                      <div
                        key={earning.id}
                        className="flex gap-3 p-3 rounded-lg hover:bg-[#1a2040] transition-colors cursor-pointer"
                      >
                        <div className="h-10 w-10 rounded-full bg-[#4a7bf7]/10 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-[#4a7bf7]" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-white">{earning.campaign}</p>
                              <p className="text-sm text-gray-400">{earning.brand}</p>
                            </div>
                            <p className="font-medium text-white">{formatCurrency(earning.amount)}</p>
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-sm">
                            <div className="flex items-center gap-1 text-gray-400">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{earning.date}</span>
                            </div>
                            <Badge className="bg-green-500">
                              {earning.status.charAt(0).toUpperCase() + earning.status.slice(1)}
                            </Badge>
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

