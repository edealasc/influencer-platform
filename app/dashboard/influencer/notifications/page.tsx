import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CheckCircle, Clock, MessageSquare, Star, User } from "lucide-react"

export default function NotificationsPage() {
  // Mock data for notifications
  const allNotifications = [
    {
      id: 1,
      type: "application",
      title: "Application Accepted",
      description: "Your application for Ambo Water's Summer Campaign has been accepted.",
      date: "2023-06-15T10:30:00",
      read: false,
    },
    {
      id: 2,
      type: "message",
      title: "New Message",
      description: "Dashen Brewery sent you a message about the Festival Promotion campaign.",
      date: "2023-06-14T15:45:00",
      read: true,
    },
    {
      id: 3,
      type: "payment",
      title: "Payment Received",
      description: "You received a payment of 8,000 ETB from Bedele Special.",
      date: "2023-06-12T09:15:00",
      read: false,
    },
    {
      id: 4,
      type: "campaign",
      title: "New Campaign Match",
      description: "We found a new campaign that matches your profile: Anbessa Shoes Fashion Week.",
      date: "2023-06-10T14:20:00",
      read: true,
    },
    {
      id: 5,
      type: "review",
      title: "New Review",
      description: "Ambo Water left a 5-star review for your collaboration.",
      date: "2023-06-08T11:05:00",
      read: false,
    },
    {
      id: 6,
      type: "system",
      title: "Profile Verification",
      description: "Your profile has been verified. You now have access to premium campaigns.",
      date: "2023-06-05T16:30:00",
      read: true,
    },
  ]

  const unreadNotifications = allNotifications.filter((notification) => !notification.read)

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 24) {
      return diffInHours === 0 ? "Just now" : `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`
    } else if (diffInHours < 48) {
      return "Yesterday"
    } else {
      return date.toLocaleDateString()
    }
  }

  // Function to get icon based on notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "application":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "message":
        return <MessageSquare className="h-5 w-5 text-blue-500" />
      case "payment":
        return <Clock className="h-5 w-5 text-purple-500" />
      case "campaign":
        return <Bell className="h-5 w-5 text-orange-500" />
      case "review":
        return <Star className="h-5 w-5 text-yellow-500" />
      case "system":
        return <User className="h-5 w-5 text-gray-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1a2040]">Notifications</h1>
        <div className="flex gap-2">
          <Button variant="outline">Mark All as Read</Button>
          <Button className="bg-[#1a2040] hover:bg-[#2a3050]">Settings</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Notifications</TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            {unreadNotifications.length > 0 && (
              <span className="ml-2 bg-[#1a2040] text-white rounded-full px-2 py-0.5 text-xs">
                {unreadNotifications.length}
              </span>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-4">
            {allNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`overflow-hidden ${!notification.read ? "border-l-4 border-l-[#1a2040]" : ""}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-gray-100">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className={`font-medium ${!notification.read ? "text-[#1a2040]" : "text-gray-700"}`}>
                          {notification.title}
                        </h3>
                        <span className="text-sm text-gray-500">{formatDate(notification.date)}</span>
                      </div>
                      <p className="text-gray-600 mt-1">{notification.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unread">
          <div className="space-y-4">
            {unreadNotifications.length > 0 ? (
              unreadNotifications.map((notification) => (
                <Card key={notification.id} className="overflow-hidden border-l-4 border-l-[#1a2040]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-full bg-gray-100">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-[#1a2040]">{notification.title}</h3>
                          <span className="text-sm text-gray-500">{formatDate(notification.date)}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{notification.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700">No unread notifications</h3>
                <p className="text-gray-500 mt-1">You're all caught up!</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

