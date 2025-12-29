import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { LaporanItem } from "./types"

interface Props {
  data: LaporanItem[]
}

export function LaporanTable({ data }: Props) {
  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tanggal</TableHead>
            <TableHead>Pasien</TableHead>
            <TableHead>Terapi</TableHead>
            <TableHead>Terapis</TableHead>
            <TableHead className="text-right">Pendapatan</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.patient}</TableCell>
              <TableCell>{item.therapy}</TableCell>
              <TableCell>{item.therapist}</TableCell>
              <TableCell className="text-right">
                Rp {item.amount.toLocaleString("id-ID")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
