import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Instagram, Twitter, Youtube, Facebook, Globe, Save, Upload, Lock, Bell, CreditCard } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1a2040]">Settings</h1>
        <Button className="bg-[#1a2040] hover:bg-[#2a3050]">Save Changes</Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Abebe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Kebede" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="abebe.kebede@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+251 91 234 5678" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Addis Ababa, Ethiopia" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    defaultValue="Lifestyle and fashion influencer based in Addis Ababa. I love showcasing Ethiopian culture and style to my audience."
                  />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                  <CardDescription>Update your profile image</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=120&width=120"
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover border-4 border-white shadow"
                      />
                      <Button size="sm" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0 bg-[#1a2040]">
                        <Upload className="h-4 w-4" />
                        <span className="sr-only">Upload</span>
                      </Button>
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-500">
                    Recommended: Square JPG, PNG. <br />
                    Maximum size 1MB.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                  <CardDescription>Connect your social accounts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <Input defaultValue="@abebe_style" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Twitter className="h-5 w-5 text-blue-400" />
                    <Input defaultValue="@abebekebede" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Youtube className="h-5 w-5 text-red-600" />
                    <Input defaultValue="Abebe Kebede Lifestyle" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <Input defaultValue="abebe.kebede.official" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-gray-600" />
                    <Input defaultValue="www.abebekebede.com" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="account">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Manage your password and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <Button className="w-full bg-[#1a2040] hover:bg-[#2a3050] mt-2">
                  <Lock className="h-4 w-4 mr-2" />
                  Update Password
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Preferences</CardTitle>
                <CardDescription>Manage your account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Profile Visibility</h3>
                    <p className="text-sm text-gray-500">Make your profile visible to brands</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Campaign Recommendations</h3>
                    <p className="text-sm text-gray-500">Receive personalized campaign suggestions</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Language</h3>
                    <p className="text-sm text-gray-500">Select your preferred language</p>
                  </div>
                  <select className="rounded-md border border-gray-300 px-3 py-2">
                    <option>English</option>
                    <option>Amharic</option>
                    <option>Oromo</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>New Campaign Invitations</p>
                        <p className="text-sm text-gray-500">Receive emails when brands invite you to campaigns</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p>Application Updates</p>
                        <p className="text-sm text-gray-500">Get notified about your campaign application status</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p>Payment Confirmations</p>
                        <p className="text-sm text-gray-500">Receive emails when you get paid</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p>Platform Updates</p>
                        <p className="text-sm text-gray-500">Stay informed about new features and updates</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>Direct Messages</p>
                        <p className="text-sm text-gray-500">Get notified when you receive a message</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p>Campaign Updates</p>
                        <p className="text-sm text-gray-500">Get notified about changes to your active campaigns</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p>New Campaign Matches</p>
                        <p className="text-sm text-gray-500">Get notified when new campaigns match your profile</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p>Payment Notifications</p>
                        <p className="text-sm text-gray-500">Get notified when you receive a payment</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-[#1a2040] hover:bg-[#2a3050] flex items-center gap-1">
                    <Bell className="h-4 w-4" />
                    Save Notification Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-md">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Commercial Bank of Ethiopia</p>
                      <p className="text-sm text-gray-500">Account ending in 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                      Remove
                    </Button>
                  </div>
                </div>

                <Button className="w-full">Add Payment Method</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
                <CardDescription>Configure your payment preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="defaultCurrency">Default Currency</Label>
                  <select id="defaultCurrency" className="w-full rounded-md border border-gray-300 px-3 py-2">
                    <option>Ethiopian Birr (ETB)</option>
                    <option>US Dollar (USD)</option>
                    <option>Euro (EUR)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paymentThreshold">Payment Threshold</Label>
                  <Input id="paymentThreshold" defaultValue="1000" />
                  <p className="text-sm text-gray-500">Minimum amount before payment is processed (in ETB)</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Automatic Payments</h3>
                    <p className="text-sm text-gray-500">Automatically process payments when threshold is reached</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Payment Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications about payment status</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button className="w-full bg-[#1a2040] hover:bg-[#2a3050] mt-2">
                  <Save className="h-4 w-4 mr-2" />
                  Save Payment Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

