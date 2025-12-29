// components/booking/types.ts

export type PaymentStatus = "Lunas" | "Belum Lunas" | "DP"

export interface Booking {
  id: string
  patient: string
  phone: string
  email: string
  location: string
  therapist: string
  datetime: string // format ISO: YYYY-MM-DDTHH:mm
  paymentStatus: PaymentStatus
  description: string
}
