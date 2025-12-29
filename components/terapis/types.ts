export type TherapistStatus = "active" | "inactive"

export interface Therapist {
  id: string
  name: string
  phone: string
  specialization: string
  experience: number // tahun
  status: TherapistStatus
}
