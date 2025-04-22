"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
  MoreHorizontal,
  Calendar,
  User,
  Send,
  Paperclip,
  ImageIcon,
  Smile,
} from "lucide-react"

// Mock data for messages
const conversations = [
  {
    id: 1,
    influencer: "Abebe Bikila",
    image: "/placeholder.svg?height=40&width=40",
    lastMessage: "I've reviewed the campaign brief and have some ideas to share.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    influencer: "Sara Tadesse",
    image: "/placeholder.svg?height=40&width=40",
    lastMessage: "When would you like me to post the content?",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    influencer: "Dawit Mekonnen",
    image: "/placeholder.svg?height=40&width=40",
    lastMessage: "The video is ready for your review. Let me know what you think!",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 4,
    influencer: "Hanna Girma",
    image: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thank you for the opportunity. I'm excited to work with your brand!",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 5,
    influencer: "Yonas Kebede",
    image: "/placeholder.svg?height=40&width=40",
    lastMessage: "I have a question about the campaign requirements.",
    time: "1 week ago",
    unread: false,
  },
]

// Mock data for the active conversation
const activeConversation = {
  id: 1,
  influencer: "Abebe Bikila",
  image: "/placeholder.svg?height=40&width=40",
  status: "online",
  messages: [
    {
      id: 1,
      sender: "influencer",
      text: "Hello! I've received your campaign brief for the Summer Fashion Collection.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "brand",
      text: "Hi Abebe! Great to hear from you. What do you think about it?",
      time: "10:35 AM",
    },
    {
      id: 3,
      sender: "influencer",
      text: "I think it's a great fit for my audience. I have some ideas for how we could showcase the products in a way that would really resonate with my followers.",
      time: "10:40 AM",
    },
    {
      id: 4,
      sender: "brand",
      text: "That sounds promising! Could you share some of your ideas?",
      time: "10:42 AM",
    },
    {
      id: 5,
      sender: "influencer",
      text: "I've reviewed the campaign brief and have some ideas to share. I was thinking of creating a series of lifestyle photos featuring the summer collection in different settings around Addis Ababa. I could also do a styling video showing how to mix and match the pieces for different occasions.",
      time: "10:50 AM",
    },
  ],
}

export default function BrandMessagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedConversation, setSelectedConversation] = useState(activeConversation)
  const [newMessage, setNewMessage] = useState("")

  // Filter conversations based on search term
  const filteredConversations = conversations.filter((conversation) => {
    if (searchTerm && !conversation.influencer.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }
    return true
  })

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // In a real app, you would send this to an API
    console.log("Sending message:", newMessage)

    // Clear the input
    setNewMessage("")
  }

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
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-white bg-[#4a7bf7]"
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
                placeholder="Search messages..."
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

        {/* Messages Layout */}
        <div className="flex h-[calc(100vh-4rem)]">
          {/* Conversations List */}
          <div className="w-full md:w-80 border-r border-[#1a2040] overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xl font-bold text-white mb-4">Messages</h2>

              <div className="space-y-2">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`flex gap-3 p-3 rounded-lg cursor-pointer ${
                      selectedConversation.id === conversation.id ? "bg-[#1a2040]" : "hover:bg-[#1a2040]"
                    }`}
                    onClick={() => setSelectedConversation(activeConversation)}
                  >
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={conversation.image || "/placeholder.svg"}
                          alt={conversation.influencer}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      {conversation.unread && (
                        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#4a7bf7]"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-white">{conversation.influencer}</p>
                        <p className="text-xs text-gray-400">{conversation.time}</p>
                      </div>
                      <p className="text-sm text-gray-300 truncate">{conversation.lastMessage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="hidden md:flex flex-col flex-1">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#1a2040]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={selectedConversation.image || "/placeholder.svg"}
                      alt={selectedConversation.influencer}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-[#0f1535]"></div>
                </div>
                <div>
                  <p className="font-medium text-white">{selectedConversation.influencer}</p>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#1a2040]">
                  <Search className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#1a2040]">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-[#0f1535] border-[#1a2040] text-white">
                    <DropdownMenuItem className="hover:bg-[#1a2040]">View Profile</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#1a2040]">Mark as Unread</DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#1a2040]">Mute Notifications</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#1a2040]" />
                    <DropdownMenuItem className="text-red-500 hover:bg-[#1a2040] hover:text-red-500">
                      Delete Conversation
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "brand" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "influencer" && (
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                      <Image
                        src={selectedConversation.image || "/placeholder.svg"}
                        alt={selectedConversation.influencer}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div
                    className={`max-w-[70%] ${
                      message.sender === "brand" ? "bg-[#4a7bf7] text-white" : "bg-[#1a2040] text-white"
                    } rounded-lg p-3`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70 text-right">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-[#1a2040]">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#1a2040]">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#1a2040]">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-[#0f1535] border-[#1a2040] text-white focus-visible:ring-[#4a7bf7]"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                />
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-[#1a2040]">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-[#4a7bf7] hover:bg-[#3a6ae7] text-white" onClick={handleSendMessage}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Empty State (shown when no conversation is selected on mobile) */}
          <div className="hidden flex-col flex-1 items-center justify-center p-4 text-center">
            <div className="rounded-full bg-[#0f1535] p-4 mb-4">
              <MessageSquare className="h-8 w-8 text-[#4a7bf7]" />
            </div>
            <h3 className="text-xl font-semibold text-white">Select a conversation</h3>
            <p className="text-gray-400 max-w-md mt-2">
              Choose a conversation from the list to start messaging with an influencer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

