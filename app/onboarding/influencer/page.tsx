"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  Instagram,
  Youtube,
  Twitter,
  InstagramIcon as Tiktok,
  Check,
  MapPin,
  Users,
  DollarSign,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Ethiopian cities
const ethiopianCities = [
  "Addis Ababa",
  "Dire Dawa",
  "Mekelle",
  "Gondar",
  "Bahir Dar",
  "Hawassa",
  "Adama",
  "Jimma",
  "Dessie",
  "Debre Birhan",
  "Shashamane",
  "Bishoftu",
  "Sodo",
  "Arba Minch",
  "Hosaena",
  "Harar",
  "Dilla",
  "Nekemte",
  "Debre Markos",
  "Kombolcha",
]

// Languages spoken in Ethiopia
const ethiopianLanguages = [
  "Amharic",
  "Oromo",
  "Tigrinya",
  "Somali",
  "Sidamo",
  "Wolaytta",
  "Gurage",
  "Afar",
  "English",
  "Arabic",
]

// Content categories
const contentCategories = [
  "Fashion",
  "Beauty",
  "Food",
  "Travel",
  "Fitness",
  "Lifestyle",
  "Technology",
  "Gaming",
  "Education",
  "Comedy",
  "Music",
  "Art",
  "Photography",
  "Dance",
  "Sports",
  "Business",
  "Health",
  "Parenting",
  "DIY & Crafts",
  "Books & Literature",
]

export default function InfluencerOnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(20)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [profileData, setProfileData] = useState({
    // Basic Info
    bio: "",
    location: "",
    birthdate: "",
    gender: "",
    profilePhoto: null,
    coverPhoto: null,

    // Social Media
    instagram: { username: "", followers: "", connected: false },
    tiktok: { username: "", followers: "", connected: false },
    youtube: { username: "", followers: "", connected: false },
    twitter: { username: "", followers: "", connected: false },
    facebook: { username: "", followers: "", connected: false },

    // Content & Audience
    audienceAge: [18, 35],
    audienceGender: { male: 50, female: 50 },

    // Rates & Preferences
    postRate: "",
    storyRate: "",
    videoRate: "",
    collaborationTypes: [],
    paymentMethods: [],

    // Portfolio
    portfolioItems: [],
  })

  const handleInputChange = (section, field, value) => {
    if (section) {
      setProfileData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }))
    } else {
      setProfileData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleLanguageToggle = (language) => {
    setSelectedLanguages((prev) => (prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]))
  }

  const handleFileUpload = (field, e) => {
    const file = e.target.files[0]
    if (file) {
      // In a real app, you would upload this to a server
      // For now, we'll just store the file object
      setProfileData((prev) => ({
        ...prev,
        [field]: file,
      }))
    }
  }

  const handlePortfolioUpload = (e) => {
    const files = e.target.files
    if (files.length) {
      // In a real app, you would upload these to a server
      // For now, we'll just store the file objects
      const newItems = Array.from(files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        type: file.type.startsWith("image/") ? "image" : "video",
        title: "",
        description: "",
      }))

      setProfileData((prev) => ({
        ...prev,
        portfolioItems: [...prev.portfolioItems, ...newItems],
      }))
    }
  }

  const updatePortfolioItem = (id, field, value) => {
    setProfileData((prev) => ({
      ...prev,
      portfolioItems: prev.portfolioItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    }))
  }

  const removePortfolioItem = (id) => {
    setProfileData((prev) => ({
      ...prev,
      portfolioItems: prev.portfolioItems.filter((item) => item.id !== id),
    }))
  }

  const nextStep = () => {
    const newStep = currentStep + 1
    setCurrentStep(newStep)
    setProgress(newStep * 20)
  }

  const prevStep = () => {
    const newStep = currentStep - 1
    setCurrentStep(newStep)
    setProgress(newStep * 20)
  }

  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    console.log("Profile data submitted:", profileData)

    // Redirect to the influencer dashboard
    router.push("/dashboard/influencer")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">InfluEthiopia</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">Step {currentStep} of 5</div>
            <Progress value={progress} className="w-32 h-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tell us about yourself</CardTitle>
                <CardDescription>Let's start with some basic information to set up your profile</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="profilePhoto">Profile Photo</Label>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      {profileData.profilePhoto ? (
                        <Image
                          src={URL.createObjectURL(profileData.profilePhoto) || "/placeholder.svg"}
                          alt="Profile"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Camera className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mb-2"
                        onClick={() => document.getElementById("profilePhoto").click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                      <Input
                        id="profilePhoto"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload("profilePhoto", e)}
                      />
                      <p className="text-xs text-gray-500">Recommended: Square image, at least 400x400px</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverPhoto">Cover Photo</Label>
                  <div className="relative h-40 w-full rounded-md overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {profileData.coverPhoto ? (
                      <Image
                        src={URL.createObjectURL(profileData.coverPhoto) || "/placeholder.svg"}
                        alt="Cover"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Upload a cover photo</p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center mt-2">
                    <Button variant="outline" size="sm" onClick={() => document.getElementById("coverPhoto").click()}>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Cover
                    </Button>
                    <Input
                      id="coverPhoto"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload("coverPhoto", e)}
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center">Recommended: 1200x400px</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell brands about yourself and what you do..."
                    value={profileData.bio}
                    onChange={(e) => handleInputChange(null, "bio", e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-gray-500">{profileData.bio.length}/250 characters</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select
                      value={profileData.location}
                      onValueChange={(value) => handleInputChange(null, "location", value)}
                    >
                      <SelectTrigger id="location" className="w-full">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {ethiopianCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Date of Birth</Label>
                    <Input
                      id="birthdate"
                      type="date"
                      value={profileData.birthdate}
                      onChange={(e) => handleInputChange(null, "birthdate", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={profileData.gender}
                    onValueChange={(value) => handleInputChange(null, "gender", value)}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Content Categories</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {contentCategories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategories.includes(category) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedCategories.includes(category)
                            ? "bg-primary hover:bg-primary/90"
                            : "hover:bg-primary/10"
                        }`}
                        onClick={() => handleCategoryToggle(category)}
                      >
                        {category}
                        {selectedCategories.includes(category) && <Check className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Select up to 5 categories that best describe your content</p>
                </div>

                <div className="space-y-2">
                  <Label>Languages</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {ethiopianLanguages.map((language) => (
                      <Badge
                        key={language}
                        variant={selectedLanguages.includes(language) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedLanguages.includes(language)
                            ? "bg-primary hover:bg-primary/90"
                            : "hover:bg-primary/10"
                        }`}
                        onClick={() => handleLanguageToggle(language)}
                      >
                        {language}
                        {selectedLanguages.includes(language) && <Check className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Select the languages you can create content in</p>
                </div>
              </CardContent>

              <CardFooter className="flex justify-end">
                <Button onClick={nextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 2: Social Media Accounts */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Connect your social media</CardTitle>
                <CardDescription>Link your social accounts to showcase your reach and engagement</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Instagram */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
                        <Instagram className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Instagram</h3>
                        <p className="text-sm text-gray-500">Connect your Instagram account</p>
                      </div>
                    </div>

                    {profileData.instagram.connected ? (
                      <Badge className="bg-green-500">Connected</Badge>
                    ) : (
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    )}
                  </div>

                  {!profileData.instagram.connected && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="instagramUsername">Username</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-400">@</span>
                          <Input
                            id="instagramUsername"
                            className="pl-8"
                            placeholder="username"
                            value={profileData.instagram.username}
                            onChange={(e) => handleInputChange("instagram", "username", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="instagramFollowers">Followers</Label>
                        <Input
                          id="instagramFollowers"
                          placeholder="e.g. 10000"
                          value={profileData.instagram.followers}
                          onChange={(e) => handleInputChange("instagram", "followers", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* TikTok */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                        <Tiktok className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">TikTok</h3>
                        <p className="text-sm text-gray-500">Connect your TikTok account</p>
                      </div>
                    </div>

                    {profileData.tiktok.connected ? (
                      <Badge className="bg-green-500">Connected</Badge>
                    ) : (
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    )}
                  </div>

                  {!profileData.tiktok.connected && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tiktokUsername">Username</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-400">@</span>
                          <Input
                            id="tiktokUsername"
                            className="pl-8"
                            placeholder="username"
                            value={profileData.tiktok.username}
                            onChange={(e) => handleInputChange("tiktok", "username", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tiktokFollowers">Followers</Label>
                        <Input
                          id="tiktokFollowers"
                          placeholder="e.g. 10000"
                          value={profileData.tiktok.followers}
                          onChange={(e) => handleInputChange("tiktok", "followers", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* YouTube */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
                        <Youtube className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">YouTube</h3>
                        <p className="text-sm text-gray-500">Connect your YouTube channel</p>
                      </div>
                    </div>

                    {profileData.youtube.connected ? (
                      <Badge className="bg-green-500">Connected</Badge>
                    ) : (
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    )}
                  </div>

                  {!profileData.youtube.connected && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="youtubeUsername">Channel Name</Label>
                        <Input
                          id="youtubeUsername"
                          placeholder="Your Channel"
                          value={profileData.youtube.username}
                          onChange={(e) => handleInputChange("youtube", "username", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="youtubeFollowers">Subscribers</Label>
                        <Input
                          id="youtubeFollowers"
                          placeholder="e.g. 10000"
                          value={profileData.youtube.followers}
                          onChange={(e) => handleInputChange("youtube", "followers", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Twitter */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center">
                        <Twitter className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Twitter</h3>
                        <p className="text-sm text-gray-500">Connect your Twitter account</p>
                      </div>
                    </div>

                    {profileData.twitter.connected ? (
                      <Badge className="bg-green-500">Connected</Badge>
                    ) : (
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    )}
                  </div>

                  {!profileData.twitter.connected && (
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="twitterUsername">Username</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-400">@</span>
                          <Input
                            id="twitterUsername"
                            className="pl-8"
                            placeholder="username"
                            value={profileData.twitter.username}
                            onChange={(e) => handleInputChange("twitter", "username", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="twitterFollowers">Followers</Label>
                        <Input
                          id="twitterFollowers"
                          placeholder="e.g. 10000"
                          value={profileData.twitter.followers}
                          onChange={(e) => handleInputChange("twitter", "followers", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={nextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 3: Audience Demographics */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Your Audience</CardTitle>
                <CardDescription>Tell brands about your audience demographics</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Audience Age Range</Label>
                  <div className="px-2">
                    <Slider
                      defaultValue={profileData.audienceAge}
                      min={13}
                      max={65}
                      step={1}
                      onValueChange={(value) => handleInputChange(null, "audienceAge", value)}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{profileData.audienceAge[0]} years</span>
                    <span>to</span>
                    <span>{profileData.audienceAge[1]} years</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Audience Gender Distribution</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Male</span>
                        <span className="text-sm font-medium">{profileData.audienceGender.male}%</span>
                      </div>
                      <Slider
                        defaultValue={[profileData.audienceGender.male]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) => {
                          const male = value[0]
                          handleInputChange("audienceGender", "male", male)
                          handleInputChange("audienceGender", "female", 100 - male)
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Female</span>
                        <span className="text-sm font-medium">{profileData.audienceGender.female}%</span>
                      </div>
                      <Slider
                        defaultValue={[profileData.audienceGender.female]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) => {
                          const female = value[0]
                          handleInputChange("audienceGender", "female", female)
                          handleInputChange("audienceGender", "male", 100 - female)
                        }}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="audienceLocation" className="text-base">
                      Audience Location
                    </Label>
                    <span className="text-sm text-gray-500">Top locations of your followers</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Addis Ababa</span>
                      </div>
                      <Badge variant="outline">65%</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Dire Dawa</span>
                      </div>
                      <Badge variant="outline">15%</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Bahir Dar</span>
                      </div>
                      <Badge variant="outline">10%</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Other</span>
                      </div>
                      <Badge variant="outline">10%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={nextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 4: Rates & Preferences */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Rates & Preferences</CardTitle>
                <CardDescription>Set your collaboration rates and preferences</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Content Rates</h3>
                  <p className="text-sm text-gray-500">Set your standard rates for different content types (in USD)</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="postRate">Social Post</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="postRate"
                          className="pl-9"
                          placeholder="0"
                          value={profileData.postRate}
                          onChange={(e) => handleInputChange(null, "postRate", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="storyRate">Story/Reel</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="storyRate"
                          className="pl-9"
                          placeholder="0"
                          value={profileData.storyRate}
                          onChange={(e) => handleInputChange(null, "storyRate", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="videoRate">Video Content</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="videoRate"
                          className="pl-9"
                          placeholder="0"
                          value={profileData.videoRate}
                          onChange={(e) => handleInputChange(null, "videoRate", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 italic">
                    Note: These are starting rates. You can always negotiate specific rates for each campaign.
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Collaboration Preferences</h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref-paid" />
                      <Label htmlFor="pref-paid" className="font-normal">
                        Paid Partnerships
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref-product" />
                      <Label htmlFor="pref-product" className="font-normal">
                        Product Exchange
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref-affiliate" />
                      <Label htmlFor="pref-affiliate" className="font-normal">
                        Affiliate Marketing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref-ambassador" />
                      <Label htmlFor="pref-ambassador" className="font-normal">
                        Brand Ambassador
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pref-event" />
                      <Label htmlFor="pref-event" className="font-normal">
                        Event Attendance
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Payment Methods</h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pay-bank" />
                      <Label htmlFor="pay-bank" className="font-normal">
                        Bank Transfer
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pay-mobile" />
                      <Label htmlFor="pay-mobile" className="font-normal">
                        Mobile Money (Telebirr)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pay-paypal" />
                      <Label htmlFor="pay-paypal" className="font-normal">
                        PayPal
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Availability</h3>
                    <Switch />
                  </div>
                  <p className="text-sm text-gray-500">
                    Toggle this off if you're currently not available for new collaborations
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={nextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 5: Portfolio */}
          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Your Portfolio</CardTitle>
                <CardDescription>Showcase your best work to attract brands</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-1">Upload your content</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Drag and drop or click to upload images and videos of your best work
                  </p>
                  <Button onClick={() => document.getElementById("portfolioUpload").click()}>Select Files</Button>
                  <Input
                    id="portfolioUpload"
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={handlePortfolioUpload}
                  />
                </div>

                {profileData.portfolioItems.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Uploaded Content ({profileData.portfolioItems.length})</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profileData.portfolioItems.map((item) => (
                        <div key={item.id} className="border rounded-lg overflow-hidden">
                          <div className="relative h-48 bg-gray-100">
                            {item.type === "image" ? (
                              <Image
                                src={URL.createObjectURL(item.file) || "/placeholder.svg"}
                                alt={item.title || "Portfolio item"}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <video
                                  src={URL.createObjectURL(item.file)}
                                  className="max-h-full max-w-full"
                                  controls
                                />
                              </div>
                            )}
                          </div>

                          <div className="p-4 space-y-3">
                            <Input
                              placeholder="Title"
                              value={item.title}
                              onChange={(e) => updatePortfolioItem(item.id, "title", e.target.value)}
                            />
                            <Textarea
                              placeholder="Description"
                              rows={2}
                              value={item.description}
                              onChange={(e) => updatePortfolioItem(item.id, "description", e.target.value)}
                            />
                            <Button
                              variant="destructive"
                              size="sm"
                              className="w-full"
                              onClick={() => removePortfolioItem(item.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={handleSubmit}>
                  Complete Setup
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

