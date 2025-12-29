"use client"

import { FC } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar, Clock, Hash } from "lucide-react"

interface BookingSortSelectorProps {
  sortBy: "date" | "time" | "id"
  sortOrder: "asc" | "desc"
  onSortByChange: (value: "date" | "time" | "id") => void
  onSortOrderChange: (value: "asc" | "desc") => void
}

export const BookingSortSelector: FC<BookingSortSelectorProps> = ({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
}) => {
  const getLabel = () => {
    switch (sortBy) {
      case "date":
        return "Tanggal"
      case "time":
        return "Jam"
      case "id":
        return "ID Booking"
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm">
          {getLabel()} {sortOrder === "asc" ? "↑" : "↓"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onSortByChange("date")}>
          <Calendar className="mr-2 h-4 w-4" />
          Tanggal
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSortByChange("time")}>
          <Clock className="mr-2 h-4 w-4" />
          Jam
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSortByChange("id")}>
          <Hash className="mr-2 h-4 w-4" />
          ID Booking
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
