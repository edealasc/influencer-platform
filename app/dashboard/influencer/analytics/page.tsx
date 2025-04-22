import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "@/components/ui/chart"
import { Download, TrendingUp, Users, Eye, Heart } from "lucide-react"

export default function AnalyticsPage() {
  // Mock data for analytics
  const analyticsSummary = {
    totalReach: "125,000",
    engagement: "4.8%",
    followers: "25,600",
    growthRate: "2.3%",
  }

  // Mock data for charts
  const reachData = [
    { name: "Jan", value: 65000 },
    { name: "Feb", value: 75000 },
    { name: "Mar", value: 85000 },
    { name: "Apr", value: 90000 },
    { name: "May", value: 110000 },
    { name: "Jun", value: 125000 },
  ]

  const engagementData = [
    { name: "Jan", value: 3.2 },
    { name: "Feb", value: 3.8 },
    { name: "Mar", value: 4.1 },
    { name: "Apr", value: 3.9 },
    { name: "May", value: 4.5 },
    { name: "Jun", value: 4.8 },
  ]

  const platformData = [
    { name: "Instagram", value: 65 },
    { name: "TikTok", value: 25 },
    { name: "YouTube", value: 10 },
  ]

  const contentPerformance = [
    {
      id: 1,
      platform: "Instagram",
      type: "Post",
      date: "2023-06-15",
      reach: "35,000",
      engagement: "5.2%",
      likes: "1,850",
      comments: "245",
    },
    {
      id: 2,
      platform: "TikTok",
      type: "Video",
      date: "2023-06-10",
      reach: "42,000",
      engagement: "6.8%",
      likes: "2,860",
      comments: "320",
    },
    {
      id: 3,
      platform: "Instagram",
      type: "Story",
      date: "2023-06-05",
      reach: "28,000",
      engagement: "3.5%",
      likes: "980",
      comments: "120",
    },
    {
      id: 4,
      platform: "YouTube",
      type: "Video",
      date: "2023-06-01",
      reach: "18,000",
      engagement: "4.2%",
      likes: "760",
      comments: "95",
    },
  ]

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1a2040]">Analytics</h1>
        <Button className="bg-[#1a2040] hover:bg-[#2a3050] flex items-center gap-1">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Reach</CardDescription>
            <CardTitle className="text-2xl">{analyticsSummary.totalReach}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <Eye className="h-4 w-4" />
              Last 30 days
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Engagement Rate</CardDescription>
            <CardTitle className="text-2xl">{analyticsSummary.engagement}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <Heart className="h-4 w-4" />
              Average across platforms
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Followers</CardDescription>
            <CardTitle className="text-2xl">{analyticsSummary.followers}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <Users className="h-4 w-4" />
              All platforms combined
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Growth Rate</CardDescription>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl">{analyticsSummary.growthRate}</CardTitle>
              <span className="text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4" />
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">Monthly follower growth</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reach">Reach</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Reach Over Time</CardTitle>
                <CardDescription>Monthly reach across all platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={reachData}
                  categories={["value"]}
                  index="name"
                  colors={["#1a2040"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-80"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Rate</CardTitle>
                <CardDescription>Monthly engagement percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={engagementData}
                  categories={["value"]}
                  index="name"
                  colors={["#1a2040"]}
                  valueFormatter={(value) => `${value}%`}
                  className="h-80"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reach">
          <Card>
            <CardHeader>
              <CardTitle>Reach Analysis</CardTitle>
              <CardDescription>Detailed reach metrics across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                data={reachData}
                categories={["value"]}
                index="name"
                colors={["#1a2040"]}
                valueFormatter={(value) => `${value.toLocaleString()}`}
                className="h-80"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Analysis</CardTitle>
              <CardDescription>Detailed engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                data={engagementData}
                categories={["value"]}
                index="name"
                colors={["#1a2040"]}
                valueFormatter={(value) => `${value}%`}
                className="h-80"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="platforms">
          <Card>
            <CardHeader>
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>Audience distribution across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={platformData}
                categories={["value"]}
                index="name"
                colors={["#1a2040"]}
                valueFormatter={(value) => `${value}%`}
                className="h-80"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Content Performance</CardTitle>
          <CardDescription>Recent content metrics across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Platform</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Reach</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Engagement</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Likes</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Comments</th>
                </tr>
              </thead>
              <tbody>
                {contentPerformance.map((content) => (
                  <tr key={content.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{content.platform}</td>
                    <td className="py-3 px-4">{content.type}</td>
                    <td className="py-3 px-4">{new Date(content.date).toLocaleDateString()}</td>
                    <td className="py-3 px-4">{content.reach}</td>
                    <td className="py-3 px-4">{content.engagement}</td>
                    <td className="py-3 px-4">{content.likes}</td>
                    <td className="py-3 px-4">{content.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

