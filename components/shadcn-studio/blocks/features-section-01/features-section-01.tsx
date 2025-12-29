import type { ComponentType } from "react"
import { ArrowRightIcon } from "lucide-react"
import {
  HeartHandshakeIcon,
  SparklesIcon,
  StarIcon,
  SmartphoneIcon,
  LockKeyholeIcon,
  LeafIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type FeatureItem = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
  cardBorderColor: string
  avatarTextColor: string
  avatarBgColor: string
}

const featuresList: FeatureItem[] = [
  {
    icon: HeartHandshakeIcon,
    title: "Certified & Caring Therapists",
    description:
      "Handled by experienced and certified therapists who truly listen, understand, and guide your healing journey with care.",
    cardBorderColor: "border-primary/40 hover:border-primary",
    avatarTextColor: "text-primary",
    avatarBgColor: "bg-primary/10",
  },
  {
    icon: LeafIcon,
    title: "Holistic Healing Approach",
    description:
      "We treat the body, mind, and emotions as one connected system to achieve long-lasting balance and wellness.",
    cardBorderColor:
      "border-green-600/40 hover:border-green-600 dark:border-green-400/40 dark:hover:border-green-400",
    avatarTextColor: "text-green-600 dark:text-green-400",
    avatarBgColor: "bg-green-600/10 dark:bg-green-400/10",
  },
  {
    icon: SparklesIcon,
    title: "Personalized Therapy Sessions",
    description:
      "Each session is tailored to your unique needs, condition, and comfort level—no one-size-fits-all treatment.",
    cardBorderColor:
      "border-amber-600/40 hover:border-amber-600 dark:border-amber-400/40 dark:hover:border-amber-400",
    avatarTextColor: "text-amber-600 dark:text-amber-400",
    avatarBgColor: "bg-amber-600/10 dark:bg-amber-400/10",
  },
  {
    icon: StarIcon,
    title: "Trusted by Our Clients",
    description:
      "Hundreds of clients have experienced real improvements in relaxation, pain relief, and emotional well-being.",
    cardBorderColor: "border-destructive/40 hover:border-destructive",
    avatarTextColor: "text-destructive",
    avatarBgColor: "bg-destructive/10",
  },
  {
    icon: LockKeyholeIcon,
    title: "Private & Safe Environment",
    description:
      "Your comfort and privacy are our priority. Every session takes place in a calm, clean, and confidential space.",
    cardBorderColor:
      "border-sky-600/40 hover:border-sky-600 dark:border-sky-400/40 dark:hover:border-sky-400",
    avatarTextColor: "text-sky-600 dark:text-sky-400",
    avatarBgColor: "bg-sky-600/10 dark:bg-sky-400/10",
  },
  {
    icon: SmartphoneIcon,
    title: "Easy Booking & Support",
    description:
      "Book your therapy session easily via WhatsApp or online, with responsive support ready to assist you anytime.",
    cardBorderColor: "border-primary/40 hover:border-primary",
    avatarTextColor: "text-primary",
    avatarBgColor: "bg-primary/10",
  },
]

export default function Features() {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Why Choose Yen2Yen Wellness Therapy
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl">
            We provide more than therapy sessions — we offer a safe space for
            healing, balance, and long-term well-being.
          </p>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-lg text-base shadow-none has-[>svg]:px-6"
          >
            <a href="/services">
              Explore Our Therapies
              <ArrowRightIcon />
            </a>
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "shadow-none transition-colors duration-300",
                feature.cardBorderColor
              )}
            >
              <CardContent>
                <Avatar
                  className={cn("mb-6 size-10 rounded-md", feature.avatarTextColor)}
                >
                  <AvatarFallback
                    className={cn(
                      "rounded-md [&>svg]:size-6",
                      feature.avatarBgColor
                    )}
                  >
                    <feature.icon />
                  </AvatarFallback>
                </Avatar>

                <h6 className="mb-2 text-lg font-semibold">
                  {feature.title}
                </h6>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
