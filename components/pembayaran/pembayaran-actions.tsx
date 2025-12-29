import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Eye, Printer, MoreVertical } from "lucide-react"

export function PembayaranActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Eye className="mr-2 h-4 w-4" />
          Detail
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Printer className="mr-2 h-4 w-4" />
          Cetak Invoice
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
