"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const initialChecklists = [
  {
    id: 1,
    title: "Standesamt",
    tasks: [
      { id: 1, text: "Unterlagen zusammenstellen", completed: true },
      { id: 2, text: "Termin vereinbaren", completed: true },
      { id: 3, text: "Trauzeugen informieren", completed: false },
      { id: 4, text: "Kleidung auswählen", completed: false },
    ],
  },
  {
    id: 2,
    title: "Kirchliche Trauung",
    tasks: [
      { id: 1, text: "Gespräch mit Pfarrer", completed: false },
      { id: 2, text: "Kirchenmusik auswählen", completed: false },
      { id: 3, text: "Ablauf besprechen", completed: false },
      { id: 4, text: "Blumenschmuck bestellen", completed: false },
    ],
  },
];

export function ChecklistOverview() {
  const [checklists, setChecklists] = useState(initialChecklists);
  const [activeChecklist, setActiveChecklist] = useState(checklists[0]);

  const toggleTask = (taskId: number) => {
    const updatedChecklists = checklists.map((list) =>
      list.id === activeChecklist.id
        ? {
            ...list,
            tasks: list.tasks.map((task) =>
              task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
            ),
          }
        : list
    );
    
    setChecklists(updatedChecklists);
    setActiveChecklist(updatedChecklists.find(list => list.id === activeChecklist.id)!);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Checklisten</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Neue Liste
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="space-y-2">
          {checklists.map((list) => (
            <button
              key={list.id}
              className={cn(
                "w-full text-left px-4 py-2 rounded-lg transition-colors",
                activeChecklist.id === list.id
                  ? "bg-pink-50 text-pink-900"
                  : "hover:bg-gray-50 text-gray-700"
              )}
              onClick={() => setActiveChecklist(list)}
            >
              {list.title}
            </button>
          ))}
        </div>

        <div className="md:col-span-3">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">{activeChecklist.title}</h3>
            <div className="space-y-3">
              {activeChecklist.tasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={`task-${task.id}`}
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                  />
                  <label
                    htmlFor={`task-${task.id}`}
                    className={cn(
                      "text-sm cursor-pointer",
                      task.completed && "line-through text-gray-500"
                    )}
                  >
                    {task.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}