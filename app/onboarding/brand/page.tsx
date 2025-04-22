"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  Check,
  Building,
  Globe,
  Mail,
  Phone,
  MapPin,
  Users,
  FileText,
  Camera,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
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
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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

// Industries
const industries = [
  "Fashion & Apparel",
  "Beauty & Cosmetics",
  "Food & Beverage",
  "Travel & Hospitality",
  "Technology",
  "Health & Wellness",
  "Entertainment",
  "Education",
  "Finance",
  "Retail",
  "Automotive",
  "Real Estate",
  "Sports",
  "Home & Furniture",
  "Telecommunications",
  "Agriculture",
  "Energy",
  "Manufacturing",
  "Media",
  "Non-profit",
]

// Target audience interests
const audienceInterests = [
  "Fashion",
  "Beauty",
  "Food",
  "Travel",
  "Fitness",
  "Technology",
  "Gaming",
  "Music",
  "Movies",
  "Books",
  "Art",
  "Photography",
  "Sports",
  "Home Decor",
  "Parenting",
  "Health",
  "Business",
  "Education",
  "Environment",
  "Politics",
]

export default function BrandOnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(20)
  const [selectedInterests, setSelectedInterests] = useState([])
  const [brandData, setbrandData] = useState({
    // Basic Info
    companyName: "",
    industry: "",
    description: "",
    foundedYear: "",
    companySize: "",
    website: "",
    email: "",
    phone: "",
    location: "",
    logo: null,
    coverPhoto: null,

    // Social Media
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",

    // Target Audience
    targetAgeRange: [18, 35],
    targetGender: "all",
    targetLocation: "national",

    // Campaign Preferences
    typicalBudget: "",
    campaignFrequency: "",
    preferredContentTypes: [],
    preferredInfluencerSize: [],

    // Brand Assets
    brandAssets: [],
  })

  const handleInputChange = (field, value) => {
    setbrandData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleInterestToggle = (interest) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const handleFileUpload = (field, e) => {
    const file = e.target.files[0]
    if (file) {
      // In a real app, you would upload this to a server
      // For now, we'll just store the file object
      setbrandData((prev) => ({
        ...prev,
        [field]: file,
      }))
    }
  }

  const handleBrandAssetUpload = (e) => {
    const files = e.target.files
    if (files.length) {
      // In a real app, you would upload these to a server
      // For now, we'll just store the file objects
      const newAssets = Array.from(files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        type: file.type.startsWith("image/") ? "image" : "document",
        title: "",
        description: "",
      }))

      setbrandData((prev) => ({
        ...prev,
        brandAssets: [...prev.brandAssets, ...newAssets],
      }))
    }
  }

  const updateBrandAsset = (id, field, value) => {
    setbrandData((prev) => ({
      ...prev,
      brandAssets: prev.brandAssets.map((asset) => (asset.id === id ? { ...asset, [field]: value } : asset)),
    }))
  }

  const removeBrandAsset = (id) => {
    setbrandData((prev) => ({
      ...prev,
      brandAssets: prev.brandAssets.filter((asset) => asset.id !== id),
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
    console.log("Brand data submitted:", brandData)

    // Redirect to the brand dashboard
    router.push("/dashboard/brand")
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
                <CardTitle className="text-2xl">Brand Information</CardTitle>
                <CardDescription>Tell us about your company to help influencers understand your brand</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="logo">Brand Logo</Label>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      {brandData.logo ? (
                        <Image
                          src={URL.createObjectURL(brandData.logo) || "/placeholder.svg"}
                          alt="Logo"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Building className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mb-2"
                        onClick={() => document.getElementById("logo").click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Logo
                      </Button>
                      <Input
                        id="logo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload("logo", e)}
                      />
                      <p className="text-xs text-gray-500">Recommended: Square image, at least 400x400px</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverPhoto">Cover Photo</Label>
                  <div className="relative h-40 w-full rounded-md overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    {brandData.coverPhoto ? (
                      <Image
                        src={URL.createObjectURL(brandData.coverPhoto) || "/placeholder.svg"}
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
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Your company name"
                    value={brandData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={brandData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry.toLowerCase().replace(/\s+/g, "-")}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Company Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell influencers about your brand, products, and values..."
                    value={brandData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-gray-500">{brandData.description.length}/500 characters</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="foundedYear">Founded Year</Label>
                    <Input
                      id="foundedYear"
                      type="number"
                      placeholder="e.g. 2010"
                      value={brandData.foundedYear}
                      onChange={(e) => handleInputChange("foundedYear", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select
                      value={brandData.companySize}
                      onValueChange={(value) => handleInputChange("companySize", value)}
                    >
                      <SelectTrigger id="companySize">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501+">501+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="website"
                      placeholder="https://www.example.com"
                      value={brandData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="contact@example.com"
                        value={brandData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Business Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        placeholder="+251 91 234 5678"
                        value={brandData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Select value={brandData.location} onValueChange={(value) => handleInputChange("location", value)}>
                      <SelectTrigger id="location" className="pl-10">
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

          {/* Step 2: Social Media */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Social Media Presence</CardTitle>
                <CardDescription>
                  Add your social media profiles to help influencers learn more about your brand
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* Instagram */}
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="flex items-center gap-2">
                      <Instagram className="h-5 w-5 text-[#E1306C]" />
                      Instagram
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">@</span>
                      <Input
                        id="instagram"
                        placeholder="yourbrand"
                        value={brandData.instagram}
                        onChange={(e) => handleInputChange("instagram", e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="space-y-2">
                    <Label htmlFor="facebook" className="flex items-center gap-2">
                      <Facebook className="h-5 w-5 text-[#1877F2]" />
                      Facebook
                    </Label>
                    <Input
                      id="facebook"
                      placeholder="https://facebook.com/yourbrand"
                      value={brandData.facebook}
                      onChange={(e) => handleInputChange("facebook", e.target.value)}
                    />
                  </div>

                  {/* Twitter */}
                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="flex items-center gap-2">
                      <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                      Twitter
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">@</span>
                      <Input
                        id="twitter"
                        placeholder="yourbrand"
                        value={brandData.twitter}
                        onChange={(e) => handleInputChange("twitter", e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                      LinkedIn
                    </Label>
                    <Input
                      id="linkedin"
                      placeholder="https://linkedin.com/company/yourbrand"
                      value={brandData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                    />
                  </div>

                  {/* YouTube */}
                  <div className="space-y-2">
                    <Label htmlFor="youtube" className="flex items-center gap-2">
                      <Youtube className="h-5 w-5 text-[#FF0000]" />
                      YouTube
                    </Label>
                    <Input
                      id="youtube"
                      placeholder="https://youtube.com/c/yourbrand"
                      value={brandData.youtube}
                      onChange={(e) => handleInputChange("youtube", e.target.value)}
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-sm text-blue-700">
                    <strong>Tip:</strong> Having active social media profiles increases your credibility with
                    influencers and helps them understand your brand voice.
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

          {/* Step 3: Target Audience */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Target Audience</CardTitle>
                <CardDescription>
                  Define your ideal audience to help us match you with the right influencers
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Target Age Range</Label>
                  <div className="px-2">
                    <Slider
                      defaultValue={brandData.targetAgeRange}
                      min={13}
                      max={65}
                      step={1}
                      onValueChange={(value) => handleInputChange("targetAgeRange", value)}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{brandData.targetAgeRange[0]} years</span>
                    <span>to</span>
                    <span>{brandData.targetAgeRange[1]} years</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Target Gender</Label>
                  <RadioGroup
                    defaultValue={brandData.targetGender}
                    onValueChange={(value) => handleInputChange("targetGender", value)}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="gender-all" />
                      <Label htmlFor="gender-all" className="font-normal">
                        All genders
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="gender-male" />
                      <Label htmlFor="gender-male" className="font-normal">
                        Primarily male
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="gender-female" />
                      <Label htmlFor="gender-female" className="font-normal">
                        Primarily female
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label>Target Location</Label>
                  <RadioGroup
                    defaultValue={brandData.targetLocation}
                    onValueChange={(value) => handleInputChange("targetLocation", value)}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="national" id="location-national" />
                      <Label htmlFor="location-national" className="font-normal">
                        All of Ethiopia
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="regional" id="location-regional" />
                      <Label htmlFor="location-regional" className="font-normal">
                        Specific regions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="urban" id="location-urban" />
                      <Label htmlFor="location-urban" className="font-normal">
                        Urban areas only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="international" id="location-international" />
                      <Label htmlFor="location-international" className="font-normal">
                        Ethiopia and international
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Audience Interests</Label>
                  <p className="text-sm text-gray-500">Select interests that align with your target audience</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {audienceInterests.map((interest) => (
                      <Badge
                        key={interest}
                        variant={selectedInterests.includes(interest) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedInterests.includes(interest)
                            ? "bg-primary hover:bg-primary/90"
                            : "hover:bg-primary/10"
                        }`}
                        onClick={() => handleInterestToggle(interest)}
                      >
                        {interest}
                        {selectedInterests.includes(interest) && <Check className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
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

          {/* Step 4: Campaign Preferences */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Campaign Preferences</CardTitle>
                <CardDescription>Tell us about your marketing goals and campaign preferences</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="typicalBudget">Typical Campaign Budget</Label>
                  <Select
                    value={brandData.typicalBudget}
                    onValueChange={(value) => handleInputChange("typicalBudget", value)}
                  >
                    <SelectTrigger id="typicalBudget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10000-plus">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500">This helps us match you with influencers in your budget range</p>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="campaignFrequency">Campaign Frequency</Label>
                  <Select
                    value={brandData.campaignFrequency}
                    onValueChange={(value) => handleInputChange("campaignFrequency", value)}
                  >
                    <SelectTrigger id="campaignFrequency">
                      <SelectValue placeholder="How often do you run campaigns?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time campaign</SelectItem>
                      <SelectItem value="quarterly">Quarterly campaigns</SelectItem>
                      <SelectItem value="monthly">Monthly campaigns</SelectItem>
                      <SelectItem value="ongoing">Ongoing collaborations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Preferred Content Types</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="content-posts" />
                      <Label htmlFor="content-posts" className="font-normal">
                        Social Posts
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="content-stories" />
                      <Label htmlFor="content-stories" className="font-normal">
                        Stories/Reels
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="content-videos" />
                      <Label htmlFor="content-videos" className="font-normal">
                        Video Content
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="content-reviews" />
                      <Label htmlFor="content-reviews" className="font-normal">
                        Product Reviews
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="content-blogs" />
                      <Label htmlFor="content-blogs" className="font-normal">
                        Blog Posts
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="content-events" />
                      <Label htmlFor="content-events" className="font-normal">
                        Event Appearances
                      </Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Label>Preferred Influencer Size</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-nano" />
                      <Label htmlFor="size-nano" className="font-normal">
                        Nano (1K-10K followers)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-micro" />
                      <Label htmlFor="size-micro" className="font-normal">
                        Micro (10K-50K followers)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-mid" />
                      <Label htmlFor="size-mid" className="font-normal">
                        Mid-tier (50K-100K followers)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-macro" />
                      <Label htmlFor="size-macro" className="font-normal">
                        Macro (100K-1M followers)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="size-mega" />
                      <Label htmlFor="size-mega" className="font-normal">
                        Mega (1M+ followers)
                      </Label>
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

          {/* Step 5: Brand Assets */}
          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Brand Assets</CardTitle>
                <CardDescription>Upload brand assets that influencers can use in their content</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-1">Upload brand assets</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Drag and drop or click to upload logos, product images, brand guidelines, etc.
                  </p>
                  <Button onClick={() => document.getElementById("brandAssetUpload").click()}>Select Files</Button>
                  <Input
                    id="brandAssetUpload"
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleBrandAssetUpload}
                  />
                </div>

                {brandData.brandAssets.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Uploaded Assets ({brandData.brandAssets.length})</h3>

                    <div className="grid grid-cols-1 gap-4">
                      {brandData.brandAssets.map((asset) => (
                        <div key={asset.id} className="border rounded-lg overflow-hidden">
                          <div className="flex items-start p-4">
                            <div className="h-16 w-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center mr-4">
                              {asset.type === "image" ? (
                                <Image
                                  src={URL.createObjectURL(asset.file) || "/placeholder.svg"}
                                  alt={asset.title || "Brand asset"}
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              ) : (
                                <FileText className="h-8 w-8 text-gray-400" />
                              )}
                            </div>

                            <div className="flex-1 space-y-2">
                              <Input
                                placeholder="Asset Title"
                                value={asset.title}
                                onChange={(e) => updateBrandAsset(asset.id, "title", e.target.value)}
                              />
                              <Textarea
                                placeholder="Description or usage instructions"
                                rows={2}
                                value={asset.description}
                                onChange={(e) => updateBrandAsset(asset.id, "description", e.target.value)}
                              />
                            </div>

                            <Button
                              variant="destructive"
                              size="sm"
                              className="ml-2"
                              onClick={() => removeBrandAsset(asset.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-amber-50 p-4 rounded-md">
                  <p className="text-sm text-amber-700">
                    <strong>Tip:</strong> Providing high-quality brand assets helps influencers create better content
                    that aligns with your brand identity.
                  </p>
                </div>
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

