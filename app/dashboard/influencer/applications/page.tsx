"use client"

import { CardFooter } from "@/components/ui/card"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Settings,
  PlusCircle,
  LogOut,
  Calendar,
  Clock,
  User,
  FileText,
  Briefcase,
  Wallet,
  BellIcon,
  ExternalLink,
  DollarSign,
  Filter,
  ArrowUpDown,
  CheckCircle,
  XCircle,
} from "lucide-react"

// Mock data for applications
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
    description:
      "Looking for travel influencers to promote our new domestic routes. Create content showcasing the beauty of Ethiopian destinations.",
    requirements: ["1 Instagram post", "2 Instagram stories", "1 TikTok video"],
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
    description:
      "Promote our mineral water as part of a healthy lifestyle. Show how Ambo Water fits into your daily routine.",
    requirements: ["2 Instagram posts", "3 Instagram stories"],
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
    description:
      "Showcase our beer at summer gatherings and social events. Highlight the refreshing taste and social aspect.",
    requirements: ["1 Instagram post", "1 Instagram reel", "1 YouTube mention"],
  },
  {
    id: 4,
    brand: "Commercial Bank of Ethiopia",
    brandImage: "/placeholder.svg?height=40&width=40&text=CBE",
    campaign: "Digital Banking App",
    status: "pending",
    compensation: "$400",
    appliedDate: "2023-07-12",
    deadline: "2023-07-25",
    description: "Promote our new digital banking app. Demonstrate how easy it is to use and the benefits it offers.",
    requirements: ["1 Instagram post", "1 Instagram story", "1 YouTube video"],
  },
  {
    id: 5,
    brand: "Ethio Telecom",
    brandImage: "/placeholder.svg?height=40&width=40&text=ET",
    campaign: "5G Launch",
    status: "accepted",
    compensation: "$600",
    appliedDate: "2023-07-01",
    deadline: "2023-07-20",
    description:
      "Create content around our new 5G service. Show how faster internet can improve daily life and productivity.",
    requirements: ["2 Instagram posts", "1 YouTube video", "3 TikTok videos"],
  },
  {
    id: 6,
    brand: "Habesha Beer",
    brandImage: "/placeholder.svg?height=40&width=40&text=HB",
    campaign: "Cultural Heritage",
    status: "rejected",
    compensation: "$350",
    appliedDate: "2023-06-20",
    deadline: "2023-07-05",
    description:
      "Connect our brand with Ethiopian cultural heritage. Show how our beer is part of cultural celebrations.",
    requirements: ["1 Instagram post", "2 Instagram stories"],
  },
]

export default function InfluencerApplicationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedApplication, setSelectedApplication] = useState<number | null>(null)

  // Filter applications based on active tab and search term
  const filteredApplications = applications.filter((application) => {
    // Filter by tab
    if (activeTab !== "all" && application.status !== activeTab) {
      return false
    }

    // Filter by search term
    if (
      searchTerm &&
      !application.campaign.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !application.brand.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    return true
  })

  // Get the selected application details
  const applicationDetails =
    selectedApplication !== null ? applications.find((app) => app.id === selectedApplication) : null

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
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <Home className="h-5 w-5" />
              <span>Overview</span>
            </Link>

            <Link
              href="/dashboard/influencer/applications"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white bg-[#4a7bf7]"
            >
              <FileText className="h-5 w-5" />
              <span>Applications</span>
            </Link>

            <Link
              href="/dashboard/influencer/collabs"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <Briefcase className="h-5 w-5" />
              <span>Active Collabs</span>
            </Link>

            <Link
              href="/dashboard/influencer/earnings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <Wallet className="h-5 w-5" />
              <span>Earnings</span>
            </Link>

            <Link
              href="/dashboard/influencer/analytics"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>

            <Link
              href="/dashboard/influencer/notifications"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <BellIcon className="h-5 w-5" />
              <span>Notifications</span>
              <Badge className="ml-auto bg-[#4a7bf7]">3</Badge>
            </Link>

            <Link
              href="/dashboard/influencer/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
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
                placeholder="Search applications..."
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
                <h1 className="text-2xl font-bold text-white">Applications</h1>
                <p className="text-gray-400">Manage your campaign applications</p>
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
                <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Find Campaigns
                </Button>
              </div>
            </div>

            {/* Applications Tabs */}
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="bg-[#0f1535] border border-[#1a2040]">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="pending"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Pending
                </TabsTrigger>
                <TabsTrigger
                  value="accepted"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Accepted
                </TabsTrigger>
                <TabsTrigger
                  value="rejected"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Rejected
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Applications List */}
                  <div className="lg:col-span-1 space-y-4">
                    {filteredApplications.map((application) => (
                      <div
                        key={application.id}
                        className={`bg-[#0f1535] border ${
                          selectedApplication === application.id ? "border-[#4a7bf7]" : "border-[#1a2040]"
                        } rounded-lg p-4 cursor-pointer hover:border-[#4a7bf7] transition-colors`}
                        onClick={() => setSelectedApplication(application.id)}
                      >
                        <div className="flex items-start gap-3">
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
                      </div>
                    ))}

                    {filteredApplications.length === 0 && (
                      <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center bg-[#0f1535] border border-[#1a2040] rounded-lg">
                        <div className="rounded-full bg-[#0a0f29] p-4">
                          <FileText className="h-8 w-8 text-[#4a7bf7]" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">No applications found</h3>
                        <p className="text-gray-400 max-w-md">
                          You haven't applied to any campaigns yet, or none match your current filters.
                        </p>
                        <Button className="mt-2 bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Find Campaigns</Button>
                      </div>
                    )}
                  </div>

                  {/* Application Details */}
                  <div className="lg:col-span-2">
                    {selectedApplication !== null && applicationDetails ? (
                      <Card className="bg-[#0f1535] border-[#1a2040]">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-full overflow-hidden">
                                <Image
                                  src={applicationDetails.brandImage || "/placeholder.svg"}
                                  alt={applicationDetails.brand}
                                  width={48}
                                  height={48}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <CardTitle className="text-white">{applicationDetails.campaign}</CardTitle>
                                <CardDescription className="text-gray-400">{applicationDetails.brand}</CardDescription>
                              </div>
                            </div>
                            <Badge
                              className={
                                applicationDetails.status === "accepted"
                                  ? "bg-green-500"
                                  : applicationDetails.status === "rejected"
                                    ? "bg-red-500"
                                    : "bg-yellow-500"
                              }
                            >
                              {applicationDetails.status.charAt(0).toUpperCase() + applicationDetails.status.slice(1)}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-[#0a0f29] rounded-lg p-4 flex flex-col items-center justify-center">
                              <p className="text-gray-400 text-sm">Compensation</p>
                              <p className="text-white text-xl font-bold">{applicationDetails.compensation}</p>
                            </div>
                            <div className="bg-[#0a0f29] rounded-lg p-4 flex flex-col items-center justify-center">
                              <p className="text-gray-400 text-sm">Applied On</p>
                              <p className="text-white text-xl font-bold">{applicationDetails.appliedDate}</p>
                            </div>
                            <div className="bg-[#0a0f29] rounded-lg p-4 flex flex-col items-center justify-center">
                              <p className="text-gray-400 text-sm">Deadline</p>
                              <p className="text-white text-xl font-bold">{applicationDetails.deadline}</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-white font-medium">Campaign Description</h3>
                            <p className="text-gray-300">{applicationDetails.description}</p>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-white font-medium">Requirements</h3>
                            <ul className="list-disc pl-5 text-gray-300 space-y-1">
                              {applicationDetails.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-white font-medium">Application Status</h3>
                            <div className="bg-[#0a0f29] rounded-lg p-4">
                              {applicationDetails.status === "pending" && (
                                <div className="flex items-center gap-2 text-yellow-500">
                                  <Clock className="h-5 w-5" />
                                  <p>
                                    Your application is being reviewed by the brand. You will be notified once a
                                    decision is made.
                                  </p>
                                </div>
                              )}

                              {applicationDetails.status === "accepted" && (
                                <div className="flex items-center gap-2 text-green-500">
                                  <CheckCircle className="h-5 w-5" />
                                  <p>
                                    Congratulations! Your application has been accepted. The brand will contact you with
                                    next steps.
                                  </p>
                                </div>
                              )}

                              {applicationDetails.status === "rejected" && (
                                <div className="flex items-center gap-2 text-red-500">
                                  <XCircle className="h-5 w-5" />
                                  <p>
                                    Unfortunately, your application was not selected for this campaign. Keep applying to
                                    find the right match!
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>

                        <CardFooter className="flex justify-between">
                          <Button variant="outline" className="border-[#1a2040] text-white hover:bg-[#1a2040]">
                            Contact Brand
                          </Button>

                          {applicationDetails.status === "pending" && (
                            <Button
                              variant="outline"
                              className="border-red-800 text-red-500 hover:bg-red-950 hover:text-red-400"
                            >
                              Withdraw Application
                            </Button>
                          )}

                          {applicationDetails.status === "accepted" && (
                            <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">
                              View Campaign Details
                            </Button>
                          )}

                          {applicationDetails.status === "rejected" && (
                            <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">
                              Find Similar Campaigns
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full py-12 space-y-4 text-center bg-[#0f1535] border border-[#1a2040] rounded-lg">
                        <div className="rounded-full bg-[#0a0f29] p-4">
                          <FileText className="h-8 w-8 text-[#4a7bf7]" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Select an application</h3>
                        <p className="text-gray-400 max-w-md">
                          Click on an application from the list to view its details.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Other tab contents would be identical but with filtered data */}
              <TabsContent value="pending" className="mt-4">
                {/* Same content but filtered for pending applications */}
              </TabsContent>

              <TabsContent value="accepted" className="mt-4">
                {/* Same content but filtered for accepted applications */}
              </TabsContent>

              <TabsContent value="rejected" className="mt-4">
                {/* Same content but filtered for rejected applications */}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

