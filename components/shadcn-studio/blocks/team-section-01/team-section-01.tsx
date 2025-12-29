import { InstagramIcon } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const therapists = [
  {
    image: "/images/therapist-1.jpg",
    name: "Yen Pratama",
    role: "Holistic Wellness Therapist",
    description:
      "Specialized in relaxation and body balance therapy, helping clients release tension and restore inner calm.",
  },
  {
    image: "/images/therapist-2.jpg",
    name: "Ayu Lestari",
    role: "Emotional Healing Specialist",
    description:
      "Focused on stress relief and emotional recovery through gentle, mindful therapeutic techniques.",
  },
  {
    image: "/images/therapist-3.jpg",
    name: "Raka Santoso",
    role: "Body & Muscle Therapy Expert",
    description:
      "Experienced in muscle recovery and pain relief, supporting physical healing and long-term wellness.",
  },
]

export default function Team() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            Our Therapists
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-lg">
            Meet our caring and certified therapists, dedicated to guiding you
            through a safe and personalized healing journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {therapists.map((therapist, i) => (
            <Card key={i} className="mx-auto max-w-sm text-center">
              <CardContent className="space-y-4 pt-6">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="mx-auto h-56 w-56 rounded-full object-cover"
                />

                <CardTitle className="text-xl">
                  {therapist.name}
                </CardTitle>

                <Separator className="mx-auto w-12" />

                <p className="text-sm font-medium">
                  {therapist.role}
                </p>

                <p className="text-muted-foreground text-sm">
                  {therapist.description}
                </p>

                {/* Optional Social (keep minimal) */}
                <div className="flex justify-center gap-4 pt-2">
                  <InstagramIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
