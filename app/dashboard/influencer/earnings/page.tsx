import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, Download, TrendingUp } from "lucide-react"

export default function EarningsPage() {
  // Mock data for earnings
  const earningsSummary = {
    totalEarnings: "45,000 ETB",
    pendingPayments: "12,000 ETB",
    thisMonth: "8,500 ETB",
    lastMonth: "7,200 ETB",
    percentageChange: 18,
  }

  const recentPayments = [
    {
      id: 1,
      brand: "Ambo Water",
      campaign: "Summer Hydration Campaign",
      date: "2023-06-15",
      amount: "5,000 ETB",
      status: "completed",
    },
    {
      id: 2,
      brand: "Dashen Brewery",
      campaign: "Festival Promotion",
      date: "2023-05-28",
      amount: "12,000 ETB",
      status: "completed",
    },
    {
      id: 3,
      brand: "Bedele Special",
      campaign: "Product Launch",
      date: "2023-05-10",
      amount: "8,000 ETB",
      status: "completed",
    },
    {
      id: 4,
      brand: "Anbessa Shoes",
      campaign: "Fashion Week Highlight",
      date: "2023-04-22",
      amount: "15,000 ETB",
      status: "completed",
    },
  ]

  const pendingPayments = [
    {
      id: 5,
      brand: "Ambo Water",
      campaign: "Summer Hydration Campaign Phase 2",
      date: "2023-06-30",
      amount: "7,000 ETB",
      status: "pending",
    },
    {
      id: 6,
      brand: "Dashen Brewery",
      campaign: "Festival Promotion Extended",
      date: "2023-07-15",
      amount: "5,000 ETB",
      status: "pending",
    },
  ]

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1a2040]">Earnings</h1>
        <Button className="bg-[#1a2040] hover:bg-[#2a3050] flex items-center gap-1">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Earnings</CardDescription>
            <CardTitle className="text-2xl">{earningsSummary.totalEarnings}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">Lifetime earnings</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Pending Payments</CardDescription>
            <CardTitle className="text-2xl">{earningsSummary.pendingPayments}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">To be received</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>This Month</CardDescription>
            <CardTitle className="text-2xl">{earningsSummary.thisMonth}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">Current month earnings</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Monthly Growth</CardDescription>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl">{earningsSummary.percentageChange}%</CardTitle>
              {earningsSummary.percentageChange > 0 ? (
                <span className="text-green-500 flex items-center">
                  <TrendingUp className="h-4 w-4" />
                </span>
              ) : (
                <span className="text-red-500 flex items-center">
                  <ArrowDown className="h-4 w-4" />
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-500">vs. {earningsSummary.lastMonth} last month</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="completed" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="completed">Completed Payments</TabsTrigger>
          <TabsTrigger value="pending">Pending Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View all your completed payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Brand</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Campaign</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPayments.map((payment) => (
                      <tr key={payment.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{payment.brand}</td>
                        <td className="py-3 px-4">{payment.campaign}</td>
                        <td className="py-3 px-4">{new Date(payment.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4 font-medium">{payment.amount}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-50 text-green-700">Completed</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Payments</CardTitle>
              <CardDescription>Payments that are scheduled or in process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Brand</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Campaign</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Expected Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingPayments.map((payment) => (
                      <tr key={payment.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{payment.brand}</td>
                        <td className="py-3 px-4">{payment.campaign}</td>
                        <td className="py-3 px-4">{new Date(payment.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4 font-medium">{payment.amount}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-yellow-50 text-yellow-700">Pending</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

