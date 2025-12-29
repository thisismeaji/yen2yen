import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Payment } from "./types"
import { PembayaranActions } from "./pembayaran-actions"

interface Props {
  payments: Payment[]
}

export function PembayaranTable({ payments }: Props) {
  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Pasien</TableHead>
            <TableHead>Metode</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {payments.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.invoice}</TableCell>
              <TableCell>{p.patient}</TableCell>
              <TableCell>{p.method}</TableCell>
              <TableCell>
                Rp {p.amount.toLocaleString("id-ID")}
              </TableCell>
              <TableCell>{p.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    p.status === "paid"
                      ? "default"
                      : p.status === "pending"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {p.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <PembayaranActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
