import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Rating } from "@/components/ui/rating"

export type TestimonialItem = {
  name: string
  role: string
  location: string
  avatar: string
  rating: number
  content: string
}

/* ===== TESTIMONIAL DATA (YEN2YEN) ===== */
const testimonials: TestimonialItem[] = [
  {
    name: "Maria L.",
    role: "Busy Professional",
    location: "Jakarta",
    avatar: "/images/avatar-1.png",
    rating: 5,
    content:
      "I came to Yen2Yen feeling exhausted and overwhelmed. After just a few sessions, my body feels lighter and my mind is much calmer. The therapists truly listen and care.",
  },
  {
    name: "Andi P.",
    role: "Entrepreneur",
    location: "Tangerang",
    avatar: "/images/avatar-2.png",
    rating: 4.5,
    content:
      "The environment is very peaceful and private. The therapy sessions helped reduce my muscle pain and stress from long working hours. Highly recommended.",
  },
  {
    name: "Sinta R.",
    role: "Working Mom",
    location: "Bekasi",
    avatar: "/images/avatar-3.png",
    rating: 5,
    content:
      "Yen2Yen feels like a safe space for healing. I always leave each session feeling more relaxed, balanced, and emotionally refreshed.",
  },
  {
    name: "Daniel K.",
    role: "Creative Freelancer",
    location: "Depok",
    avatar: "/images/avatar-4.png",
    rating: 4.5,
    content:
      "The personalized approach makes a big difference. My therapist adjusted the session based on my condition, and I could really feel the improvement.",
  },
]

export default function TestimonialsComponent() {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <Carousel
        className="mx-auto flex max-w-7xl gap-12 px-4 max-sm:flex-col sm:items-center sm:gap-16 sm:px-6 lg:gap-24 lg:px-8"
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
      >
        {/* Left Content */}
        <div className="space-y-4 sm:w-1/2 lg:w-1/3">
          <p className="text-primary text-sm font-medium uppercase">
            Client Stories
          </p>

          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            What Our Clients Feel
          </h2>

          <p className="text-muted-foreground text-xl">
            Real experiences from people who trusted Yen2Yen with their healing
            journey.
          </p>

          <div className="flex items-center gap-4">
            <CarouselPrevious className="static translate-y-0 rounded-md disabled:bg-primary/10 disabled:text-primary disabled:opacity-100" />
            <CarouselNext className="static translate-y-0 rounded-md disabled:bg-primary/10 disabled:text-primary disabled:opacity-100" />
          </div>
        </div>

        {/* Right Carousel */}
        <div className="relative sm:w-1/2 lg:w-2/3">
          <CarouselContent className="sm:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:pl-6 lg:basis-1/2">
                <Card className="h-full transition-colors duration-300 hover:border-primary">
                  <CardContent className="space-y-5">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-10 rounded-full">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="rounded-full text-sm">
                          {testimonial.name
                            .split(" ", 2)
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role} ·{" "}
                          <span className="font-medium">
                            {testimonial.location}
                          </span>
                        </p>
                      </div>
                    </div>

                    <Rating
                      readOnly
                      variant="yellow"
                      size={24}
                      value={testimonial.rating}
                      precision={0.5}
                    />

                    <p className="text-muted-foreground">
                      “{testimonial.content}”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  )
}
