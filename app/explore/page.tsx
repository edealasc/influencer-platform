"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Users,
  Search,
  Instagram,
  Youtube,
  Twitter,
  TrendingUp,
  MapPin,
  Filter,
  ArrowUpDown,
  Star,
  ChevronRight,
  X,
} from "lucide-react"

// Mock data for influencers
const influencers = [
  {
    id: 1,
    name: "Abebe Bikila",
    image: "/placeholder.svg?height=400&width=400",
    category: "Fashion",
    platforms: ["instagram", "tiktok"],
    followers: 125000,
    engagement: 3.8,
    location: "Addis Ababa",
    languages: ["Amharic", "English"],
    verified: true,
  },
  {
    id: 2,
    name: "Sara Tadesse",
    image: "/placeholder.svg?height=400&width=400",
    category: "Beauty",
    platforms: ["instagram", "youtube"],
    followers: 89000,
    engagement: 4.2,
    location: "Addis Ababa",
    languages: ["Amharic", "English"],
    verified: true,
  },
  {
    id: 3,
    name: "Dawit Mekonnen",
    image: "/placeholder.svg?height=400&width=400",
    category: "Tech",
    platforms: ["youtube", "twitter"],
    followers: 67000,
    engagement: 5.1,
    location: "Bahir Dar",
    languages: ["Amharic", "English"],
    verified: true,
  },
  {
    id: 4,
    name: "Hanna Girma",
    image: "/placeholder.svg?height=400&width=400",
    category: "Food",
    platforms: ["instagram", "tiktok"],
    followers: 105000,
    engagement: 6.7,
    location: "Hawassa",
    languages: ["Amharic", "English", "Sidamo"],
    verified: true,
  },
  {
    id: 5,
    name: "Yonas Kebede",
    image: "/placeholder.svg?height=400&width=400",
    category: "Travel",
    platforms: ["instagram", "youtube"],
    followers: 78000,
    engagement: 3.5,
    location: "Gondar",
    languages: ["Amharic", "English"],
    verified: false,
  },
  {
    id: 6,
    name: "Tigist Haile",
    image: "/placeholder.svg?height=400&width=400",
    category: "Fitness",
    platforms: ["instagram", "tiktok"],
    followers: 92000,
    engagement: 5.8,
    location: "Addis Ababa",
    languages: ["Amharic", "English"],
    verified: true,
  },
  {
    id: 7,
    name: "Solomon Abebe",
    image: "/placeholder.svg?height=400&width=400",
    category: "Comedy",
    platforms: ["tiktok", "youtube"],
    followers: 215000,
    engagement: 8.2,
    location: "Dire Dawa",
    languages: ["Amharic", "Oromo"],
    verified: true,
  },
  {
    id: 8,
    name: "Meron Tadesse",
    image: "/placeholder.svg?height=400&width=400",
    category: "Lifestyle",
    platforms: ["instagram", "twitter"],
    followers: 63000,
    engagement: 4.7,
    location: "Mekelle",
    languages: ["Amharic", "Tigrinya"],
    verified: false,
  },
  {
    id: 9,
    name: "Bereket Alemayehu",
    image: "/placeholder.svg?height=400&width=400",
    category: "Music",
    platforms: ["instagram", "youtube", "tiktok"],
    followers: 187000,
    engagement: 7.3,
    location: "Addis Ababa",
    languages: ["Amharic", "English"],
    verified: true,
  },
  {
    id: 10,
    name: "Frehiwot Tekle",
    image: "/placeholder.svg?height=400&width=400",
    category: "Fashion",
    platforms: ["instagram", "tiktok"],
    followers: 72000,
    engagement: 3.9,
    location: "Bahir Dar",
    languages: ["Amharic", "English"],
    verified: true,
  },
  {
    id: 11,
    name: "Kidus Hailu",
    image: "/placeholder.svg?height=400&width=400",
    category: "Gaming",
    platforms: ["youtube", "twitter"],
    followers: 128000,
    engagement: 6.2,
    location: "Addis Ababa",
    languages: ["Amharic", "English"],
    verified: true,
  },
  {
    id: 12,
    name: "Rahel Mulugeta",
    image: "/placeholder.svg?height=400&width=400",
    category: "Beauty",
    platforms: ["instagram", "youtube"],
    followers: 95000,
    engagement: 5.4,
    location: "Hawassa",
    languages: ["Amharic", "English"],
    verified: true,
  },
]

// Platform icons mapping
const platformIcons = {
  instagram: <Instagram className="h-4 w-4" />,
  youtube: <Youtube className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  tiktok: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  ),
}

// Categories for filtering
const categories = [
  "All",
  "Fashion",
  "Beauty",
  "Tech",
  "Food",
  "Travel",
  "Fitness",
  "Comedy",
  "Lifestyle",
  "Music",
  "Gaming",
]

// Locations for filtering
const locations = ["All", "Addis Ababa", "Bahir Dar", "Hawassa", "Gondar", "Dire Dawa", "Mekelle"]

// Languages for filtering
const languages = ["All", "Amharic", "English", "Oromo", "Tigrinya", "Sidamo"]

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [followerRange, setFollowerRange] = useState([0, 250000]);
  const [engagementRange, setEngagementRange] = useState([0, 10]);
  const [sortBy, setSortBy] = useState("followers");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  // Filter influencers based on selected filters
  const filteredInfluencers = influencers.filter(influencer => {
    // Search term filter
    if (searchTerm && !influencer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== "All" && influencer.category !== selectedCategory) {
      return false;
    }
    
    // Location filter
    if (selectedLocation !== "All" && influencer.location !== selectedLocation) {
      return false;
    }
    
    // Languages filter
    if (selectedLanguages.length > 0 && !influencer.languages.some(lang => selectedLanguages.includes(lang))) {
      return false;
    }
    
    // Platforms filter
    if (selectedPlatforms.length > 0 && !influencer.platforms.some(platform => selectedPlatforms.includes(platform))) {
      return false;
    }
    
    // Follower range filter
    if (influencer.followers < followerRange[0] || influencer.followers > followerRange[1]) {
      return false;
    }
    
    // Engagement range filter
    if (influencer.engagement < engagementRange[0] || influencer.engagement > engagementRange[1]) {
      return false;
    }
    
    return true;
  });
  
  // Sort influencers
  const sortedInfluencers = [...filteredInfluencers].sort((a, b) => {
    if (sortBy === "followers") {
      return b.followers - a.followers;
    } else if (sortBy === "engagement") {
      return b.engagement - a.engagement;
    } else if (sortBy === "name") {\
      return a  
      return b.engagement - a.engagement;else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
  
  // Toggle platform selection
  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform) 
        : [...prev, platform]
    );
    
    updateActiveFilters("platform", platform);
  };
  
  // Toggle language selection
  const toggleLanguage = (language: string) => {
    if (language === "All") {
      setSelectedLanguages([]);
      return;
    }
    
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language) 
        : [...prev, language]
    );
    
    updateActiveFilters("language", language);
  };
  
  // Update active filters
  const updateActiveFilters = (type: string, value: string) => {
    const filterKey = `${type}:${value}`;
    
    setActiveFilters(prev => 
      prev.includes(filterKey)
        ? prev.filter(f => f !== filterKey)
        : [...prev, filterKey]
    );
  };
  
  // Remove a specific filter
  const removeFilter = (filter: string) => {
    const [type, value] = filter.split(':');
    
    if (type === "category") {
      setSelectedCategory("All");
    } else if (type === "location") {
      setSelectedLocation("All");
    } else if (type === "platform") {
      setSelectedPlatforms(prev => prev.filter(p => p !== value));
    } else if (type === "language") {
      setSelectedLanguages(prev => prev.filter(l => l !== value));
    }
    
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedLocation("All");
    setSelectedLanguages([]);
    setSelectedPlatforms([]);
    setFollowerRange([0, 250000]);
    setEngagementRange([0, 10]);
    setActiveFilters([]);
  };
  
  // Format number with K/M suffix
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0f29]">
      {/* Header */}
      <header className="w-full border-b border-[#1a2040] bg-[#0a0f29]">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Users className="h-6 w-6 text-[#4a7bf7]" />
              <span className="text-xl font-bold text-white">InfluEthiopia</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              For Brands
            </Link>
            <Link href="/#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              For Influencers
            </Link>
            <Link href="/explore" className="text-sm font-medium text-[#4a7bf7] hover:text-[#3a6ae7] transition-colors">
              Explore
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden md:inline-flex text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Log in
            </Link>
            <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="flex flex-col space-y-6">
          {/* Page Title */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Explore Influencers
            </h1>
            <p className="text-gray-400">
              Find and connect with Ethiopia's top influencers for your next campaign
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search influencers by name..."
                className="pl-10 bg-[#0f1535] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px] bg-[#0f1535] border-[#1a2040] text-white">
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-[#0f1535] border-[#1a2040] text-white">
                  <SelectItem value="followers">Most Followers</SelectItem>
                  <SelectItem value="engagement">Highest Engagement</SelectItem>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                </SelectContent>
              </Select>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2 border-[#1a2040] bg-[#0f1535] text-white hover:bg-[#1a2040] hover:text-white">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md overflow-y-auto bg-[#0a0f29] border-l border-[#1a2040] text-white">
                  <SheetHeader>
                    <SheetTitle className="text-white">Filter Influencers</SheetTitle>
                    <SheetDescription className="text-gray-400">
                      Refine your search with specific criteria
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-6 space-y-6">
                    <Accordion type="multiple" defaultValue={["category", "platform", "location", "followers", "engagement", "language"]}>
                      <AccordionItem value="category" className="border-[#1a2040]">
                        <AccordionTrigger className="text-sm font-medium text-white">Category</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-2 gap-2 pt-2">
                            {categories.map((category) => (
                              <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                className={`justify-start text-sm h-8 ${
                                  selectedCategory === category 
                                    ? "bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white" 
                                    : "border-[#1a2040] text-white hover:bg-[#1a2040]"
                                }`}
                                onClick={() => {
                                  setSelectedCategory(category);
                                  if (category !== "All") {
                                    updateActiveFilters("category", category);
                                  } else {
                                    setActiveFilters(prev => prev.filter(f => !f.startsWith("category:")));
                                  }
                                }}
                              >
                                {category}
                              </Button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="platform" className="border-[#1a2040]">
                        <AccordionTrigger className="text-sm font-medium text-white">Platform</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-2 gap-2 pt-2">
                            {Object.entries(platformIcons).map(([platform, icon]) => (
                              <Button
                                key={platform}
                                variant={selectedPlatforms.includes(platform) ? "default" : "outline"}
                                className={`justify-start text-sm h-8 ${
                                  selectedPlatforms.includes(platform) 
                                    ? "bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white" 
                                    : "border-[#1a2040] text-white hover:bg-[#1a2040]"
                                }`}
                                onClick={() => togglePlatform(platform)}
                              >
                                <span className="mr-2">{icon}</span>
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                              </Button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="location" className="border-[#1a2040]">
                        <AccordionTrigger className="text-sm font-medium text-white">Location</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-2 gap-2 pt-2">
                            {locations.map((location) => (
                              <Button
                                key={location}
                                variant={selectedLocation === location ? "default" : "outline"}
                                className={`justify-start text-sm h-8 ${
                                  selectedLocation === location 
                                    ? "bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white" 
                                    : "border-[#1a2040] text-white hover:bg-[#1a2040]"
                                }`}
                                onClick={() => {
                                  setSelectedLocation(location);
                                  if (location !== "All") {
                                    updateActiveFilters("location", location);
                                  } else {
                                    setActiveFilters(prev => prev.filter(f => !f.startsWith("location:")));
                                  }
                                }}
                              >
                                {location}
                              </Button>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="followers" className="border-[#1a2040]">
                        <AccordionTrigger className="text-sm font-medium text-white">Followers</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                            <div className="flex justify-between text-sm text-gray-400">
                              <span>{formatNumber(followerRange[0])}</span>
                              <span>{formatNumber(followerRange[1])}</span>
                            </div>
                            <Slider
                              defaultValue={[0, 250000]}
                              max={250000}
                              step={1000}
                              value={followerRange}
                              onValueChange={setFollowerRange}
                              className="py-4"
                            />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="engagement" className="border-[#1a2040]">
                        <AccordionTrigger className="text-sm font-medium text-white">Engagement Rate (%)</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                            <div className="flex justify-between text-sm text-gray-400">
                              <span>{engagementRange[0]}%</span>
                              <span>{engagementRange[1]}%</span>
                            </div>
                            <Slider
                              defaultValue={[0, 10]}
                              max={10}
                              step={0.1}
                              value={engagementRange}
                              onValueChange={setEngagementRange}
                              className="py-4"
                            />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="language" className="border-[#1a2040]">
                        <AccordionTrigger className="text-sm font-medium text-white">Language</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2">
                            {languages.map((language) => (
                              <div key={language} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={`language-${language}`} 
                                  checked={language === "All" ? selectedLanguages.length === 0 : selectedLanguages.includes(language)}
                                  onCheckedChange={() => toggleLanguage(language)}
                                  className="data-[state=checked]:bg-[#4a7bf7] data-[state=checked]:border-[#4a7bf7] border-[#1a2040]"
                                />
                                <label
                                  htmlFor={`language-${language}`}
                                  className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {language}
                                </label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-[#1a2040] text-white hover:bg-[#1a2040]"
                      onClick={clearAllFilters}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-400">Active filters:</span>
              {activeFilters.map((filter) => {
                const [type, value] = filter.split(':');
                return (
                  <Badge 
                    key={filter} 
                    variant="outline"
                    className="flex items-center gap-1 bg-[#0f1535] text-white border-[#1a2040] hover:bg-[#1a2040]"
                  >
                    {value}
                    <button onClick={() => removeFilter(filter)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                );
              })}
              <Button 
                variant="link" 
                className="text-sm text-[#4a7bf7] h-auto p-0 hover:text-[#3a6ae7]"
                onClick={clearAllFilters}
              >
                Clear all
              </Button>
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-400">
            Showing {sortedInfluencers.length} {sortedInfluencers.length === 1 ? 'influencer' : 'influencers'}
          </div>

          {/* Influencers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedInfluencers.map((influencer) => (
              <Link href={`/influencer/${influencer.id}`} key={influencer.id}>
                <div className="group bg-[#0f1535] rounded-xl border border-[#1a2040] overflow-hidden transition-all duration-300 hover:border-[#4a7bf7]">
                  {/* Verified Badge */}
                  {influencer.verified && (
                    <div className="absolute top-3 right-3 z-20 bg-[#0f1535] rounded-full p-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  )}
                  
                  {/* Image */}
                  <div className="aspect-square relative">
                    <Image
                      src={influencer.image || "/placeholder.svg"}
                      alt={influencer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-white">{influencer.name}</h3>
                        <p className="text-sm text-gray-400">{influencer.category}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {influencer.platforms.map((platform) => (
                          <div key={platform} className="text-gray-400">
                            {platformIcons[platform as keyof typeof platformIcons]}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Users className="h-3.5 w-3.5" />
                        <span>{formatNumber(influencer.followers)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span>{influencer.engagement}%</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{influencer.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-[#0a0f29]/80">
                    <Button className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white">
                      View Profile
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Empty State */}
          {sortedInfluencers.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
              <div className="rounded-full bg-[#0f1535] p-4">
                <Search className="h-8 w-8 text-[#4a7bf7]" />
              </div>
              <h3 className="text-xl font-semibold text-white">No influencers found</h3>
              <p className="text-gray-400 max-w-md">
                We couldn't find any influencers matching your current filters. Try adjusting your search criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-2 border-[#1a2040] text-white hover:bg-[#1a2040]"
                onClick={clearAllFilters}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#1a2040] py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#4a7bf7]" />
            <span className="text-sm font-bold text-white">InfluEthiopia</span>
          </div>
          
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} InfluEthiopia. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            {[
              { name: "Facebook", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { name: "Instagram", icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
              { name: "Twitter", icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
              { name: "LinkedIn", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" }
            ].map((social) => (
              <Link key={social.name} href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.icon}></path>
                </svg>
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

