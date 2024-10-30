"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MoreVertical } from "lucide-react"

interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done"
  priority: "low" | "medium" | "high"
  assignee: {
    name: string
    avatar: string
  }
  dueDate: string
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Implement authentication",
    description: "Add user authentication using NextAuth.js",
    status: "in-progress",
    priority: "high",
    assignee: {
      name: "John Doe",
      avatar: "/placeholder.svg",
    },
    dueDate: "2024-11-15",
  },
  // Add more mock tasks as needed
]

export function TaskList() {
  const [tasks] = useState<Task[]>(mockTasks)

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle>{task.title}</CardTitle>
              <CardDescription>{task.description}</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={task.assignee.avatar} />
                  <AvatarFallback>{task.assignee.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-x-2">
                  <Badge variant={task.priority === "high" ? "destructive" : "secondary"}>
                    {task.priority}
                  </Badge>
                  <Badge variant="outline">{task.status}</Badge>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {task.dueDate}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
