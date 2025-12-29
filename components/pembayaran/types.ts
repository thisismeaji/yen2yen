export type PaymentStatus = "paid" | "pending" | "failed"

export interface Payment {
  id: string
  invoice: string
  patient: string
  method: "Cash" | "Transfer" | "QRIS"
  amount: number
  date: string
  status: PaymentStatus
}
