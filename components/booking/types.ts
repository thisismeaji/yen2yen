export type Booking = {
  id: string
  patient: string
  phone: string
  email: string
  location: string
  therapist: string
  datetime: string
  paymentStatus: PaymentStatus
  description: string
}

// Tambahkan tipe PaymentStatus
export type PaymentStatus = "Lunas" | "Belum Lunas" | "DP"
