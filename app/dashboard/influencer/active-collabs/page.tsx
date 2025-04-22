import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, FileText, MessageSquare } from "lucide-react"

export default function ActiveCollabsPage() {
  // Mock data for active collaborations
  const activeCollabs = [
    {
      id: 1,
      brand: "Ambo Water",
      campaign: "Summer Hydration Campaign",
      startDate: "2023-06-01",
      endDate: "2023-06-30",
      progress: 65,
      compensation: "5,000 ETB",
      tasks: [
        { id: 1, name: "Instagram Post 1", completed: true, dueDate: "2023-06-10" },
        { id: 2, name: "Instagram Post 2", completed: true, dueDate: "2023-06-20" },
        { id: 3, name: "Instagram Post 3", completed: false, dueDate: "2023-06-28" },
      ],
      description: "Promote our new flavored water line on Instagram with 3 posts over 2 weeks.",
    },
    {
      id: 2,
      brand: "Dashen Brewery",
      campaign: "Festival Promotion",
      startDate: "2023-06-15",
      endDate: "2023-07-15",
      progress: 25,
      compensation: "12,000 ETB",
      tasks: [
        { id: 1, name: "Pre-event Teaser", completed: true, dueDate: "2023-06-20" },
        { id: 2, name: "Event Coverage", completed: false, dueDate: "2023-07-01" },
        { id: 3, name: "Post-event Highlight", completed: false, dueDate: "2023-07-10" },
      ],
      description: "Create content during the upcoming music festival showcasing our beer.",
    },
  ]

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#1a2040]">Active Collaborations</h1>
        <Button className="bg-[#1a2040] hover:bg-[#2a3050]">Find New Campaigns</Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {activeCollabs.map((collab) => (
          <Card key={collab.id} className="overflow-hidden border border-gray-200">
            <CardHeader className="bg-gray-50 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{collab.brand}</CardTitle>
                  <CardDescription>{collab.campaign}</CardDescription>
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Timeline</p>
                  <p className="font-medium">
                    {new Date(collab.startDate).toLocaleDateString()} - {new Date(collab.endDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Compensation</p>
                  <p className="font-medium">{collab.compensation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Progress</p>
                  <div className="flex items-center gap-2">
                    <Progress value={collab.progress} className="h-2" />
                    <span className="text-sm font-medium">{collab.progress}%</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Campaign Tasks</p>
                <div className="space-y-2">
                  {collab.tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-2 rounded bg-gray-50">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          readOnly
                          className="rounded text-[#1a2040] focus:ring-[#1a2040]"
                        />
                        <span className={task.completed ? "line-through text-gray-500" : ""}>{task.name}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  View Contract
                </Button>
                <Button variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Schedule
                </Button>
                <Button className="bg-[#1a2040] hover:bg-[#2a3050] flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  Message Brand
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

