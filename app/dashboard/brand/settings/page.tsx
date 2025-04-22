"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
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
  Calendar,
  User,
  Upload,
  CreditCard,
  Globe,
  Shield,
  HelpCircle,
  Instagram,
  Twitter,
} from "lucide-react"

export default function BrandSettingsPage() {
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
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-[#1a2040]"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>

            <Link
              href="/dashboard/brand/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white bg-[#4a7bf7]"
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
                placeholder="Search settings..."
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
            <div>
              <h1 className="text-2xl font-bold text-white">Settings</h1>
              <p className="text-gray-400">Manage your account settings and preferences</p>
            </div>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="bg-[#0f1535] border border-[#1a2040]">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Account
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Billing
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-[#4a7bf7] data-[state=active]:text-white"
                >
                  Security
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-4">
                <Card className="bg-[#0f1535] border-[#1a2040]">
                  <CardHeader>
                    <CardTitle className="text-white">Brand Profile</CardTitle>
                    <CardDescription className="text-gray-400">
                      Update your brand information and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-[#1a2040]">
                          <Image
                            src="/placeholder.svg?height=128&width=128&text=AB"
                            alt="Brand Logo"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <Button
                          variant="outline"
                          className="border-[#1a2040] text-white hover:bg-[#1a2040] flex items-center gap-2"
                        >
                          <Upload className="h-4 w-4" />
                          Change Logo
                        </Button>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="brandName" className="text-white">
                              Brand Name
                            </Label>
                            <Input
                              id="brandName"
                              placeholder="Your brand name"
                              defaultValue="Addis Fashion"
                              className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="industry" className="text-white">
                              Industry
                            </Label>
                            <Input
                              id="industry"
                              placeholder="Your industry"
                              defaultValue="Fashion & Apparel"
                              className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="website" className="text-white">
                            Website
                          </Label>
                          <Input
                            id="website"
                            placeholder="https://example.com"
                            defaultValue="https://addisfashion.com"
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bio" className="text-white">
                            Brand Description
                          </Label>
                          <Textarea
                            id="bio"
                            placeholder="Tell influencers about your brand"
                            defaultValue="Addis Fashion is a leading Ethiopian fashion brand specializing in modern clothing with traditional Ethiopian elements. We create unique pieces that blend contemporary style with cultural heritage."
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7] min-h-[100px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Social Media Links</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Instagram className="h-5 w-5 text-gray-400" />
                          <Input
                            placeholder="Instagram username"
                            defaultValue="addisfashion"
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Twitter className="h-5 w-5 text-gray-400" />
                          <Input
                            placeholder="Twitter username"
                            defaultValue="addisfashion"
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" className="border-[#1a2040] text-white hover:bg-[#1a2040]">
                      Cancel
                    </Button>
                    <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="account" className="mt-4">
                <Card className="bg-[#0f1535] border-[#1a2040]">
                  <CardHeader>
                    <CardTitle className="text-white">Account Settings</CardTitle>
                    <CardDescription className="text-gray-400">
                      Manage your account details and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          defaultValue="contact@addisfashion.com"
                          className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          placeholder="Your phone number"
                          defaultValue="+251 91 234 5678"
                          className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language" className="text-white">
                        Language
                      </Label>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-gray-400" />
                        <Input
                          id="language"
                          placeholder="Preferred language"
                          defaultValue="English"
                          className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Account Preferences</Label>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-white">Public Profile</Label>
                            <p className="text-xs text-gray-400">Allow influencers to view your brand profile</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-white">Receive Applications</Label>
                            <p className="text-xs text-gray-400">Allow influencers to apply to your campaigns</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" className="border-[#1a2040] text-white hover:bg-[#1a2040]">
                      Cancel
                    </Button>
                    <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="billing" className="mt-4">
                <Card className="bg-[#0f1535] border-[#1a2040]">
                  <CardHeader>
                    <CardTitle className="text-white">Billing Information</CardTitle>
                    <CardDescription className="text-gray-400">
                      Manage your billing details and subscription
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-[#0a0f29] border border-[#1a2040] rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-[#4a7bf7]/10 flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-[#4a7bf7]" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Business Plan</p>
                            <p className="text-sm text-gray-400">$99/month</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Active</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Payment Method</Label>
                      <div className="bg-[#0a0f29] border border-[#1a2040] rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-[#4a7bf7]/10 flex items-center justify-center">
                              <CreditCard className="h-5 w-5 text-[#4a7bf7]" />
                            </div>
                            <div>
                              <p className="text-white font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-gray-400">Expires 12/2025</p>
                            </div>
                          </div>
                          <Button variant="outline" className="border-[#1a2040] text-white hover:bg-[#1a2040]">
                            Change
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Billing Address</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-white">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            placeholder="Company name"
                            defaultValue="Addis Fashion LLC"
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address" className="text-white">
                            Address
                          </Label>
                          <Input
                            id="address"
                            placeholder="Address"
                            defaultValue="123 Bole Road"
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Billing History</Label>
                      <div className="bg-[#0a0f29] border border-[#1a2040] rounded-lg p-4">
                        <div className="space-y-3">
                          {[
                            { date: "Jul 1, 2023", amount: "$99.00", status: "Paid" },
                            { date: "Jun 1, 2023", amount: "$99.00", status: "Paid" },
                            { date: "May 1, 2023", amount: "$99.00", status: "Paid" },
                          ].map((invoice, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between py-2 border-b border-[#1a2040] last:border-0"
                            >
                              <div>
                                <p className="text-white">{invoice.date}</p>
                                <p className="text-sm text-gray-400">Business Plan</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <p className="text-white">{invoice.amount}</p>
                                <Badge className="bg-green-500">{invoice.status}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" className="border-[#1a2040] text-white hover:bg-[#1a2040]">
                      Cancel Subscription
                    </Button>
                    <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Update Plan</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="mt-4">
                <Card className="bg-[#0f1535] border-[#1a2040]">
                  <CardHeader>
                    <CardTitle className="text-white">Notification Settings</CardTitle>
                    <CardDescription className="text-gray-400">Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Email Notifications</Label>
                          <p className="text-xs text-gray-400">Receive notifications via email</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="space-y-3 pl-6">
                        <div className="flex items-center justify-between">
                          <Label className="text-white">New Applications</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-white">Messages</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-white">Campaign Updates</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-white">Marketing & Promotions</Label>
                          <Switch />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Push Notifications</Label>
                          <p className="text-xs text-gray-400">Receive notifications in the app</p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="space-y-3 pl-6">
                        <div className="flex items-center justify-between">
                          <Label className="text-white">New Applications</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-white">Messages</Label>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label className="text-white">Campaign Updates</Label>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" className="border-[#1a2040] text-white hover:bg-[#1a2040]">
                      Cancel
                    </Button>
                    <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-4">
                <Card className="bg-[#0f1535] border-[#1a2040]">
                  <CardHeader>
                    <CardTitle className="text-white">Security Settings</CardTitle>
                    <CardDescription className="text-gray-400">
                      Manage your account security and privacy
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-white">Change Password</Label>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword" className="text-white">
                            Current Password
                          </Label>
                          <Input
                            id="currentPassword"
                            type="password"
                            placeholder="Enter current password"
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword" className="text-white">
                            New Password
                          </Label>
                          <Input
                            id="newPassword"
                            type="password"
                            placeholder="Enter new password"
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword" className="text-white">
                            Confirm New Password
                          </Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            className="bg-[#0a0f29] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                          />
                        </div>
                        <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">Update Password</Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Two-Factor Authentication</Label>
                          <p className="text-xs text-gray-400">Add an extra layer of security to your account</p>
                        </div>
                        <Switch />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-white">Privacy Mode</Label>
                          <p className="text-xs text-gray-400">Hide your brand details from non-approved influencers</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Account Actions</Label>
                      <div className="space-y-4">
                        <Button
                          variant="outline"
                          className="w-full border-[#1a2040] text-white hover:bg-[#1a2040] flex items-center gap-2"
                        >
                          <Shield className="h-4 w-4" />
                          Download Personal Data
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-red-800 text-red-500 hover:bg-red-950 hover:text-red-400 flex items-center gap-2"
                        >
                          <Shield className="h-4 w-4" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button variant="link" className="text-[#4a7bf7] hover:text-[#3a6ae7] flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Need help with your settings?
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

