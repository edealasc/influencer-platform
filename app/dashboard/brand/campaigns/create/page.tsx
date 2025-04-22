"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Calendar, DollarSign, ImageIcon, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function CampaignCreatePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: {
      min: 500,
      max: 2000,
      type: "fixed", // or "negotiable"
    },
    timeline: {
      startDate: "",
      endDate: "",
      duration: 30, // in days
    },
    requirements: {
      followers: 5000,
      engagement: 3, // percentage
      platforms: ["instagram"],
      contentType: ["photo", "video"],
      location: "Ethiopia",
      languages: ["Amharic", "English"],
    },
    deliverables: [],
    additionalInfo: "",
    isDraft: true,
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNestedInputChange = (parent, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }))
  }

  const handleRequirementsChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      requirements: {
        ...prev.requirements,
        [field]: value,
      },
    }))
  }

  const handleAddDeliverable = () => {
    setFormData((prev) => ({
      ...prev,
      deliverables: [...prev.deliverables, { type: "post", description: "", quantity: 1 }],
    }))
  }

  const handleUpdateDeliverable = (index, field, value) => {
    const updatedDeliverables = [...formData.deliverables]
    updatedDeliverables[index] = {
      ...updatedDeliverables[index],
      [field]: value,
    }

    setFormData((prev) => ({
      ...prev,
      deliverables: updatedDeliverables,
    }))
  }

  const handleRemoveDeliverable = (index) => {
    const updatedDeliverables = formData.deliverables.filter((_, i) => i !== index)

    setFormData((prev) => ({
      ...prev,
      deliverables: updatedDeliverables,
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const saveDraft = () => {
    // Save as draft logic
    alert("Campaign saved as draft")
    router.push("/dashboard/brand/campaigns")
  }

  const publishCampaign = () => {
    // Publish campaign logic
    setFormData((prev) => ({
      ...prev,
      isDraft: false,
    }))
    alert("Campaign published successfully!")
    router.push("/dashboard/brand/campaigns")
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => router.push("/dashboard/brand/campaigns")} className="mr-2">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Campaigns
        </Button>
        <h1 className="text-2xl font-bold">Create New Campaign</h1>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex flex-col items-center ${currentStep >= step ? "text-primary" : "text-gray-400"}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  currentStep > step
                    ? "bg-primary text-white"
                    : currentStep === step
                      ? "border-2 border-primary text-primary"
                      : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
              </div>
              <span className="text-sm">
                {step === 1 && "Basic Info"}
                {step === 2 && "Requirements"}
                {step === 3 && "Deliverables"}
                {step === 4 && "Review"}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="title" className="text-base font-medium">
                  Campaign Title
                </Label>
                <Input
                  id="title"
                  placeholder="Enter a clear, descriptive title for your campaign"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-base font-medium">
                  Campaign Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your campaign goals, brand values, and what you're looking for"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="mt-1 min-h-[150px]"
                />
              </div>

              <div>
                <Label htmlFor="category" className="text-base font-medium">
                  Category
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger id="category" className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="health">Health & Fitness</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-base font-medium">Budget Range</Label>
                  <div className="flex items-center mt-2 space-x-2">
                    <DollarSign className="h-5 w-5 text-gray-500" />
                    <Input
                      type="number"
                      placeholder="Min"
                      value={formData.budget.min}
                      onChange={(e) => handleNestedInputChange("budget", "min", Number.parseInt(e.target.value))}
                      className="w-24"
                    />
                    <span>to</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={formData.budget.max}
                      onChange={(e) => handleNestedInputChange("budget", "max", Number.parseInt(e.target.value))}
                      className="w-24"
                    />
                    <Select
                      value={formData.budget.type}
                      onValueChange={(value) => handleNestedInputChange("budget", "type", value)}
                    >
                      <SelectTrigger className="w-36">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fixed">Fixed Price</SelectItem>
                        <SelectItem value="negotiable">Negotiable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Campaign Timeline</Label>
                  <div className="flex items-center mt-2 space-x-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <Input
                      type="date"
                      value={formData.timeline.startDate}
                      onChange={(e) => handleNestedInputChange("timeline", "startDate", e.target.value)}
                      className="w-full"
                    />
                    <span>to</span>
                    <Input
                      type="date"
                      value={formData.timeline.endDate}
                      onChange={(e) => handleNestedInputChange("timeline", "endDate", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Requirements */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-base font-medium">Minimum Followers</Label>
                  <span className="text-sm font-medium">{formData.requirements.followers.toLocaleString()}</span>
                </div>
                <Slider
                  value={[formData.requirements.followers]}
                  min={1000}
                  max={100000}
                  step={1000}
                  onValueChange={(value) => handleRequirementsChange("followers", value[0])}
                  className="my-4"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1K</span>
                  <span>25K</span>
                  <span>50K</span>
                  <span>75K</span>
                  <span>100K</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-base font-medium">Minimum Engagement Rate</Label>
                  <span className="text-sm font-medium">{formData.requirements.engagement}%</span>
                </div>
                <Slider
                  value={[formData.requirements.engagement]}
                  min={1}
                  max={10}
                  step={0.5}
                  onValueChange={(value) => handleRequirementsChange("engagement", value[0])}
                  className="my-4"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1%</span>
                  <span>2.5%</span>
                  <span>5%</span>
                  <span>7.5%</span>
                  <span>10%</span>
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-2 block">Social Media Platforms</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["instagram", "tiktok", "youtube", "facebook"].map((platform) => (
                    <div
                      key={platform}
                      className={`border rounded-lg p-3 cursor-pointer transition-all ${
                        formData.requirements.platforms.includes(platform)
                          ? "border-primary bg-primary/10"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => {
                        const platforms = formData.requirements.platforms.includes(platform)
                          ? formData.requirements.platforms.filter((p) => p !== platform)
                          : [...formData.requirements.platforms, platform]
                        handleRequirementsChange("platforms", platforms)
                      }}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-4 h-4 rounded-full mr-2 ${
                            platform === "instagram"
                              ? "bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500"
                              : platform === "tiktok"
                                ? "bg-black"
                                : platform === "youtube"
                                  ? "bg-red-600"
                                  : "bg-blue-600"
                          }`}
                        ></div>
                        <span className="capitalize">{platform}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-2 block">Content Type</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["photo", "video", "story", "reel", "live", "review"].map((type) => (
                    <div
                      key={type}
                      className={`border rounded-lg p-3 cursor-pointer transition-all ${
                        formData.requirements.contentType.includes(type)
                          ? "border-primary bg-primary/10"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => {
                        const contentTypes = formData.requirements.contentType.includes(type)
                          ? formData.requirements.contentType.filter((t) => t !== type)
                          : [...formData.requirements.contentType, type]
                        handleRequirementsChange("contentType", contentTypes)
                      }}
                    >
                      <span className="capitalize">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="location" className="text-base font-medium">
                    Location
                  </Label>
                  <Select
                    value={formData.requirements.location}
                    onValueChange={(value) => handleRequirementsChange("location", value)}
                  >
                    <SelectTrigger id="location" className="mt-1">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                      <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
                      <SelectItem value="Dire Dawa">Dire Dawa</SelectItem>
                      <SelectItem value="Bahir Dar">Bahir Dar</SelectItem>
                      <SelectItem value="Hawassa">Hawassa</SelectItem>
                      <SelectItem value="Mekelle">Mekelle</SelectItem>
                      <SelectItem value="Any">Any Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium mb-2 block">Languages</Label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {formData.requirements.languages.map((lang) => (
                      <Badge key={lang} variant="secondary" className="px-3 py-1">
                        {lang}
                        <button
                          className="ml-2 text-gray-500 hover:text-gray-700"
                          onClick={() => {
                            const languages = formData.requirements.languages.filter((l) => l !== lang)
                            handleRequirementsChange("languages", languages)
                          }}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    <Select
                      onValueChange={(value) => {
                        if (!formData.requirements.languages.includes(value)) {
                          handleRequirementsChange("languages", [...formData.requirements.languages, value])
                        }
                      }}
                    >
                      <SelectTrigger className="h-8 px-2 w-auto border-dashed">
                        <span className="text-sm text-gray-500">+ Add</span>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Amharic">Amharic</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Oromo">Oromo</SelectItem>
                        <SelectItem value="Tigrinya">Tigrinya</SelectItem>
                        <SelectItem value="Somali">Somali</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Deliverables */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Campaign Deliverables</h3>
                <Button variant="outline" onClick={handleAddDeliverable} className="flex items-center">
                  <span className="mr-1">+</span> Add Deliverable
                </Button>
              </div>

              {formData.deliverables.length === 0 ? (
                <div className="text-center py-10 border-2 border-dashed rounded-lg">
                  <ImageIcon className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium mb-1">No deliverables added yet</h3>
                  <p className="text-gray-500 mb-4">Add the content you expect influencers to create</p>
                  <Button onClick={handleAddDeliverable}>Add Your First Deliverable</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {formData.deliverables.map((deliverable, index) => (
                    <Card key={index} className="relative">
                      <button
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                        onClick={() => handleRemoveDeliverable(index)}
                      >
                        ×
                      </button>
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor={`deliverable-type-${index}`}>Content Type</Label>
                            <Select
                              value={deliverable.type}
                              onValueChange={(value) => handleUpdateDeliverable(index, "type", value)}
                            >
                              <SelectTrigger id={`deliverable-type-${index}`} className="mt-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="post">Feed Post</SelectItem>
                                <SelectItem value="story">Story</SelectItem>
                                <SelectItem value="reel">Reel/Short Video</SelectItem>
                                <SelectItem value="video">Long-form Video</SelectItem>
                                <SelectItem value="review">Product Review</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor={`deliverable-quantity-${index}`}>Quantity</Label>
                            <Input
                              id={`deliverable-quantity-${index}`}
                              type="number"
                              min="1"
                              value={deliverable.quantity}
                              onChange={(e) =>
                                handleUpdateDeliverable(index, "quantity", Number.parseInt(e.target.value))
                              }
                              className="mt-1"
                            />
                          </div>

                          <div className="md:col-span-3">
                            <Label htmlFor={`deliverable-description-${index}`}>Description</Label>
                            <Textarea
                              id={`deliverable-description-${index}`}
                              placeholder="Describe what you want in this content (style, messaging, etc.)"
                              value={deliverable.description}
                              onChange={(e) => handleUpdateDeliverable(index, "description", e.target.value)}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div>
                <Label htmlFor="additionalInfo" className="text-base font-medium">
                  Additional Information
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any other details or requirements for your campaign"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <Info className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-amber-800">Review your campaign details</h4>
                  <p className="text-amber-700 text-sm">
                    Please review all information carefully before publishing. You can go back to previous steps to make
                    changes.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Campaign Title</span>
                    <p className="font-medium">{formData.title || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Category</span>
                    <p className="font-medium capitalize">{formData.category || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Budget Range</span>
                    <p className="font-medium">
                      ${formData.budget.min} - ${formData.budget.max} (
                      {formData.budget.type === "fixed" ? "Fixed" : "Negotiable"})
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Timeline</span>
                    <p className="font-medium">
                      {formData.timeline.startDate
                        ? new Date(formData.timeline.startDate).toLocaleDateString()
                        : "Not set"}
                      {" to "}
                      {formData.timeline.endDate ? new Date(formData.timeline.endDate).toLocaleDateString() : "Not set"}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-sm text-gray-500">Description</span>
                  <p className="font-medium">{formData.description || "Not provided"}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-3">Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Minimum Followers</span>
                    <p className="font-medium">{formData.requirements.followers.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Minimum Engagement Rate</span>
                    <p className="font-medium">{formData.requirements.engagement}%</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Location</span>
                    <p className="font-medium">{formData.requirements.location}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Languages</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {formData.requirements.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="px-2 py-0.5">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-sm text-gray-500">Platforms</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {formData.requirements.platforms.map((platform) => (
                      <Badge key={platform} variant="outline" className="px-2 py-0.5 capitalize">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-sm text-gray-500">Content Types</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {formData.requirements.contentType.map((type) => (
                      <Badge key={type} variant="outline" className="px-2 py-0.5 capitalize">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-3">Deliverables</h3>
                {formData.deliverables.length === 0 ? (
                  <p className="text-gray-500">No deliverables specified</p>
                ) : (
                  <div className="space-y-3">
                    {formData.deliverables.map((deliverable, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex justify-between">
                          <span className="font-medium capitalize">{deliverable.type}</span>
                          <span className="text-sm text-gray-500">Quantity: {deliverable.quantity}</span>
                        </div>
                        <p className="text-sm mt-1">{deliverable.description || "No description provided"}</p>
                      </div>
                    ))}
                  </div>
                )}

                {formData.additionalInfo && (
                  <div className="mt-3">
                    <span className="text-sm text-gray-500">Additional Information</span>
                    <p className="font-medium">{formData.additionalInfo}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between pt-2">
          {currentStep > 1 ? (
            <Button variant="outline" onClick={prevStep}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
          ) : (
            <Button variant="outline" onClick={() => router.push("/dashboard/brand/campaigns")}>
              Cancel
            </Button>
          )}

          <div className="flex space-x-2">
            <Button variant="outline" onClick={saveDraft}>
              Save as Draft
            </Button>

            {currentStep < 4 ? (
              <Button onClick={nextStep}>
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={publishCampaign}>Publish Campaign</Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

